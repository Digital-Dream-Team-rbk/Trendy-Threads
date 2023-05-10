const admin =require('../models/admin.js')
const bcrypt = require("bcrypt");
module.exports={
    getOneAdmin:(req,res)=>{
        const mycallback=function(err, results) {
            if(err) res.status(500).send(err);
            else res.json(results)
        }
        admin.getOne(mycallback,req.params.adminname)
    },
    postAdmin:async function (req,res){
    try{
        const { adminname, adminmail, adminpw } = req.body
        console.log(req.body.adminmail)
        const mycallback=function(err, results) {
            if(err) res.status(500).send(err);
            else res.json(results)
        }
        const boll=admin.getOne(mycallback,req.body.adminmail)
        console.log(boll,'this is boll')
       if(boll){
           res.send('admin exists')  
       }
       else {
        const hashed=await bcrypt.hash(req.body.adminpw,10);
        console.log(hashed)
        await admin.createAdmin(mycallback,{
        adminname:req.body.adminname,
        adminmail:req.body.adminmail,
        adminpw:hashed
        })
        res.status(201).send(res)
    }
    }
        catch(err) {
            res.status(404).send(err)
        }
    }
    }

