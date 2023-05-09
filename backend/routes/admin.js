const express = require('express');
const router = express.Router();
const admin=require("../controller/admin.js")
router.get("/",admin.getAllAdmin)
module.exports=router