const express = require('express');

const app = express();
const cors =require ('cors');
app.use(cors());

//create route  for admin
const adminRoute = require('../backend/routes/admin.js');
// user routes
const userRoute = require("../backend/routes/users.js")
// Import products route
const productsRoute = require('../backend/routes/product.js'); 
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//use path for controller methodes
app.use('/api/admin',adminRoute);
app.use("/api/users",userRoute);
app.use('/api/products', productsRoute); 



module.exports = app; 