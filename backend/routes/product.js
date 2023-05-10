const express = require('express');
const router = express.Router();
const products = require('../controller/products.js');

// Get all products
router.get('/all', products.getAllProducts);

// Get one product by ID
router.get('/one/:id', products.getOneProduct);

// Create a new product
router.post('/postone/', products.postOneProduct);

// Update an existing product by ID
router.put('/update/:id', products.updateOneProduct);

// Delete a product by ID
router.delete('delete/:id', products.deleteOneProduct);

module.exports = router;