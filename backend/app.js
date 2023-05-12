const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();
const cors =require ('cors');
app.use(cors());
app.use(fileUpload());
app.use(express.json({ limit: '100mb' }));
app.use(express.urlencoded({ limit: '100mb', extended: true }));
//create route  for admin
const adminRoute = require('../backend/routes/admin.js');
// user routes
const userRoute = require("../backend/routes/users.js")
// Import products route
const productsRoute = require('../backend/routes/product.js'); 
//use path for controller methodes
app.use('/api/admin',adminRoute);
app.use("/api/users",userRoute);
app.use('/api/products', productsRoute); 




module.exports = app; 