const express = require('express');
const router = express.Router();
const {getUsers,postOne}=require("../controller/users.js")
router.post("/",postOne)
module.exports=router