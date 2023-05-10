const express = require('express');
const router = express.Router();
const {getUsers,postOne}=require("../controller/users.js")
router.post("/",postOne)
router.get("/",getUsers)
module.exports=router