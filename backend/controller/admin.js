const admin =require('../models/admin.js')
const bcrypt = require("bcrypt");
module.exports={
    //---------------------------- search for an admin----------------------------------//
    getOneAdmin: (req, res) => {
        admin.getOne(req.params.adminmail)
          .then((result) => {
            res.send(result);
          })
          .catch((error) => {
            res.status(500).send(error);
          });
      },
            
      //------------------------------- sign up admin-----------------------------------//     
    signUpAdmin: async function (req, res) {
        const { adminname, adminmail, adminpw } = req.body
        const bool = await admin.getOne(adminmail)
        try {
          if (bool.length!==0) {
            res.status(409).send('admin exists') 
          }
           else {
            const hashed = await bcrypt.hash(adminpw, 10);
            const newAdmin = {
              adminname:adminname,
              adminmail:adminmail,
              adminpw: hashed
            }
            await admin.createAdmin(newAdmin)
            res.status(201).send(result)
          }
        }
        catch (err) {
          res.status(500).send(err)
        }
    },
    //--------------------------------------login admin-------------------------------------//
    loginAdmin:async function (req,res){
       try{
        const {adminmail, adminpw } = req.body
        const bool= await admin.getOne(adminmail)

       if(bool.length===0){
           res.send('admin not exists')  
       }

       else{
        const adminRow=bool[0];
        const passwordMatch = await bcrypt.compare(adminpw,adminRow.adminpw);
        if(passwordMatch){
        res.send("you are logged")
        }
        else res.send("wrong password")
       }
       }
       catch(err) {
        res.status(500).send(err)
       }
    }
    }

