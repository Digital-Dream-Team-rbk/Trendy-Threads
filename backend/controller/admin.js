const admin =require('../models/admin.js')
const bcrypt = require("bcrypt");
module.exports={
  //------------------------------get All admin-----------------------------------------//
  getAll:(req, res) => {
     admin.getAllUsers()
      .then((result) => {
        res.send(result);
      })
      .catch((error) => {
        res.status(500).send(error);
      })},
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
    signUpAdmin: async (req, res)=> {
       
        try {
            const { adminname, adminmail, adminpw } = req.body
            const bool = await admin.getOne(adminmail)
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
            res.status(201).send("admin created")
          }
        }
        catch (err) {
            console.log("from catch")
          res.status(500).send(err)
        }
    },
    //--------------------------------------login admin-------------------------------------//
    loginAdmin:async function (req,res){
       try{
        const {adminmail, adminpw } = req.body
        const bool= await admin.getOne(adminmail)
        if(bool.length===0 || !bool){
          res.status(404).send('admin not exists')
          return ;  
       }
       else{
        const adminRow=bool[0];
        const passwordMatch = await bcrypt.compare(adminpw,adminRow.adminpw);
        if(passwordMatch){
        res.status(200).send("you are logged")
        }
        else res.status(400).send("wrong password or email")
       }
       }
       catch(err) {
        res.status(500).send(err)
       }
    },
    //--------------------------update admin info-------------------
    updateAdmin:async function(req,res){
      const { adminname,adminmail,adminpw } = req.body
      const hashed = await bcrypt.hash(adminpw, 10);
      const newAdmin = {
        adminname:adminname,
        adminmail:adminmail,
        adminpw:hashed
      }
      admin.changeAdmin(req.params.adminid,newAdmin)
      .then((result) => {
        res.send(result);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
    },
     //--------------------------delete admin info-------------------
    deleteAdmin:function(req,res){
      admin.deleteAdmin(req.params.adminid)
      .then((result) => {
        res.send(result);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
    }
  }

