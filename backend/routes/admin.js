const express = require('express');
const router = express.Router();
const admin=require("../controller/admin.js");
router.get("/:adminmail",admin.getOneAdmin);
router.post('/',admin.signUpAdmin);
router.post('/login',admin.loginAdmin);
router.put("/id",admin.updateAdmin);
router.delete("/id",admin.deleteAdmin);
module.exports=router;
