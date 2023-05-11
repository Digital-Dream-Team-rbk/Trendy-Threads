const connection = require("../connection");




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
  const sql = `INSERT INTO products SET ?`;
  return new Promise((resolve, reject) => {
    connection.query(sql,product, (err, result) => {
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







