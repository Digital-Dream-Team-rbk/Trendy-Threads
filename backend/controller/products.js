const productModel = require("../models/product");

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
  const product = req.body;
  try {
    const result = await productModel.postOneProduct(product);
    res.status(201).json(result);
  } catch (err) {
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