const express = require('express');
const router = express.Router();
const admin=require("../controller/admin.js")
router.get("/:adminmail",admin.getOneAdmin)
router.post('/',admin.postAdmin)
module.exports=router