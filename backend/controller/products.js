const productModel = require("../models/product");
const path=require('path')
const {uploadImage}=require("../cloudinary")
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
    const imgPath=path.join(__dirname,`../backend/images/${req.file.filename}`)
    const imgId=await uploadImage(imgPath)
    // Build the new product object to insert into the database
    const newProduct = {
      productname: req.body.productname,
      productprice: req.body.productprice,
      productquantity: req.body.productquantity,
      productcategory: req.body.productcategory,
      productimage: imgId,
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