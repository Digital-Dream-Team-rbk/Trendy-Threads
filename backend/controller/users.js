const {getAllUsers,getOneUser,postOneUser,updateOneUser,deleteOneUser}= require ("../models/users")
const bcrypt = require ("bcrypt")

const getUsers=(req,res)=>{
    const callback=(err,result)=>{
        if(err) res.status(500).send(err)
        else res.status(200).send(result)
        }
        getAllUsers(callback)
};
const postOne=async (req,res)=>{
      try {
        const dbUser=getOneUser(req.body.useremail)
        if(dbUser.length > 0){
            res.status(409).send("user already exists")
            return;
        }
        const hashedPassword=await bcrypt.hash(req.body.userpw, 10)
        const user ={
            username:req.body.username,
            userpw:hashedPassword,
            useremail:req.body.useremail
        }
        await postOneUser(user)
        res.status(201).send(user)
    } catch (error) {
        res.status(500).send(error)
    }
}
module.exports={
    getUsers,
    postOne
}