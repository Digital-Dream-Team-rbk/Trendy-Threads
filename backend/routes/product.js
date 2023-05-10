const express = require('express');
const router = express.Router();
const products = require('../controller/products.js');

// Get all products
router.get('/', products.getAllProducts);

// Get one product by ID
router.get('/:id', products.getOneProduct);

// Create a new product
router.post('/', products.postOneProduct);

// Update an existing product by ID
router.put('/:id', products.updateOneProduct);

// Delete a product by ID
router.delete('/:id', products.deleteOneProduct);

module.exports = router;