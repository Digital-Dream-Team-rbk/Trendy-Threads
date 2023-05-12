const productModel = require("../models/product");
const connection = require("../connection");
const cloudinary = require("cloudinary").v2;
// Configure Cloudinary with your account details
cloudinary.config({
  cloud_name: "dzs2vkmbq",
  api_key: "885481975116747",
  api_secret: "oUO_ImkJff7SBOG-8kVGejsd8W4",
});

const getAllProducts = (req, res) => {
  productModel.getAllProducts((err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json(result);
    }
  });
};

const getOneProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await productModel.getOneProduct(id);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).send(err);
  }
};

const postOneProduct = async (req, res) => {
  try {
    // Upload the image URL to Cloudinary and get back the result
    const image = await cloudinary.uploader.upload(`${req.body.productimage}`);

    // Build the new product object to insert into the database
    const newProduct = {
      productname: req.body.productname,
      productprice: req.body.productprice,
      productquantity: req.body.productquantity,
      productcategory: req.body.productcategory,
      productimage: image.secure_url,
      adminid: req.body.adminid,
    };

    // Insert the new product into the database
    const query = 'INSERT INTO products SET ?';
    connection.query(query, newProduct, (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send(err);
        return;
      }

      res.status(201).json(result);
    });
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
};

const updateOneProduct = (req, res) => {
  const id = req.params.id;
  const update = req.body;
  productModel.updateOneProduct(id, update, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json(result);
    }
  });
};

const deleteOneProduct = (req, res) => {
  const id = req.params.id;
  productModel.deleteOneProduct(id, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json(result);
    }
  });
};

module.exports = {
  getAllProducts,
  getOneProduct,
  postOneProduct,
  updateOneProduct,
  deleteOneProduct,
};