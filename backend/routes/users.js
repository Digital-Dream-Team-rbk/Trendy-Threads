const express = require('express');
const router = express.Router();
const {getUsers,postOne,login,updateOne,deleteOne}=require("../controller/users.js")
router.post("/",postOne)
router.get("/",getUsers)
router.post('/login',login)
router.put("/",updateOne)
router.delete("/:useremail",deleteOne)


module.exports=router