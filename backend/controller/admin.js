const admin =require('../models/admin.js')
const bcrypt = require("bcrypt");
module.exports={
    // search for an admin
    getOneAdmin: (req, res) => {
        admin.getOne(req.params.adminmail)
          .then((result) => {
            res.send(result);
          })
          .catch((error) => {
            res.status(500).send(error);
          });
      },
            
      // sign up admin     
      signUpAdmin: async function (req, res) {
        const { adminname, adminmail, adminpw } = req.body
        const bool = await admin.getOne(req.body.adminmail)
        console.log(bool)
        try {
          if (bool.length!==0) {
            res.status(409).send('admin exists') 
          }
           else {
            const hashed = await bcrypt.hash(req.body.adminpw, 10);
            const newAdmin = {
              adminname: req.body.adminname,
              adminmail: req.body.adminmail,
              adminpw: hashed
            }
            console.log(newAdmin)
            await admin.createAdmin(newAdmin)
            res.status(201).send(result)
          }
        }
        catch (err) {
          res.status(500).send(err)
        }
      },
    //login admin 
    loginAdmin:async function (req,res){
       try{
        const {adminmail, adminpw } = req.body
        const bool=admin.getOne(req.body.adminmail)
       if(bool.length===0){
           res.send('admin not exists ')  
       }
       else{
        const adminRow=bool[0]
        console.log(adminRow.adminpw,"adminRow")
        const passwordMatch = await bcrypt.compare(adminpw,adminRow.adminpw);
        if(passwordMatch){
            console.log("check the name",adminRow.adminname)
        }
        else res.send("wrong password")
       }
       }
       catch(err) {
        res.status(404).send(err)
       }
    }
    }

