const express = require('express');
const fileUpload = require('express-fileupload');
const cloudinary = require('cloudinary').v2;

const app = express();
const cors =require ('cors');
app.use(cors());
cloudinary.config({
    cloud_name: 'dvrzz6dtg',
    api_key: '361711739922946',
    api_secret: '1lxWKsa0rLkhY9mMVt_uEguWrbA'
  });


//create route  for admin
const adminRoute = require('../backend/routes/admin.js');
// user routes
const userRoute = require("../backend/routes/users.js")
// Import products route
const productsRoute = require('../backend/routes/product.js'); 



app.use(fileUpload());

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/admin',adminRoute);
app.use("/api/users",userRoute);
app.use('/api/products', productsRoute); 


app.post('/upload', (req, res) => {
    const file = req.files.file;
    
    // upload file to Cloudinary
    cloudinary.uploader.upload(file.tempFilePath, (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send(err);
      } else {
        // send URL of uploaded image back to client
        res.json({ url: result.secure_url });
      }
    });
  });



module.exports = app; 