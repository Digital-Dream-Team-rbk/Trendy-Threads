const express = require('express');

const app = express();
const cors =require ('cors');
app.use(cors());


const adminRoute = require('../backend/routes/admin.js');



app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/admin', adminRoute);


module.exports = app; 