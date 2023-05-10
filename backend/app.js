const express = require('express');

const app = express();
const cors =require ('cors');
app.use(cors());

//create route  for admin
const adminRoute = require('../backend/routes/admin.js');
// user routes
const userRoute = require("../backend/routes/users.js")



app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/admin',adminRoute);
app.use("/api/users",userRoute)


module.exports = app; 