const connection = require("../connection");
const cloudinary = require("cloudinary").v2;

// Configure Cloudinary with your account details
cloudinary.config({
  cloud_name: "",
  api_key: "",
  api_secret: "",
});

const getAllProducts = (callback) => {
  const sql = "SELECT * FROM products";
  connection.query(sql, (err, result) => {
    callback(err, result);
  });
};

const getOneProduct = async (id) => {
  const sql = `SELECT * FROM products WHERE productid = ${id}`;
  return new Promise((resolve, reject) => {
    connection.query(sql, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result[0]);
      }
    });
  });
};

const postOneProduct = async (product) => {
  // Upload the image file to Cloudinary and get back the public URL
  const image = await cloudinary.uploader.upload(product.productimage.path);

  // Build the new product object to insert into the database
  const newProduct = {
    productname: product.productname,
    productprice: product.productprice,
    productquantity: product.productquantity,
    productcategory: product.productcategory,
    productimage:image.secure_url,
    adminid: product.adminid,
  };

  const sql = `INSERT INTO products SET ?`;
  return new Promise((resolve, reject) => {
    connection.query(sql, newProduct, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

const updateOneProduct = (id, update, callback) => {
  const sql = `UPDATE products SET ? WHERE productid = ${id}`;
  connection.query(sql, update, (err, result) => {
    callback(err, result);
  });
};

const deleteOneProduct = (id, callback) => {
  const sql = `DELETE FROM products WHERE productid = ${id}`;
  connection.query(sql, (err, result) => {
    callback(err, result);
  });
};

module.exports = {
  getAllProducts,
  getOneProduct,
  postOneProduct,
  updateOneProduct,
  deleteOneProduct,
};







