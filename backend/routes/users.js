const express = require('express');
const router = express.Router();
const {getUsers,postOne,login}=require("../controller/users.js")
router.post("/",postOne)
router.get("/",getUsers)
router.post('/login',login)

module.exports=router