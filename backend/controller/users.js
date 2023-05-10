const {getAllUsers,getOneUser,postOneUser,updateOneUser,deleteOneUser}= require ("../models/users")
const bcrypt = require ("bcrypt")
const jwt = require ("jsonwebtoken");
const db = require("../config");

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
const login = async (req, res) => {
    try {
      const dbUser = await getOneUser(req.body.useremail);
      if (!dbUser || dbUser.length === 0) {
        res.status(404).send("Non-existing user");
        return;
      }
  
      const matchedPassword = await bcrypt.compare(
        req.body.userpw,
        dbUser[0].userpw
      );
  
      if (matchedPassword) {
        const token = jwt.sign(
          {
            userId: dbUser[0].userid,
            userEmail: dbUser[0].useremail
          },
          "SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
        );
  
        res.status(200).json({
          token: token,
          message: "Authentication successful"
        });
      } else {
        res.status(400).send("Wrong password");
      }
    } catch (error) {
      res.status(400).send("Problem with login");
    }
  };
module.exports={
    getUsers,
    postOne,
    login
}