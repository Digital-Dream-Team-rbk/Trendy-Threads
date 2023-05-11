//requiring the query function from user.js in the model folder
const {getAllUsers,getOneUser,postOneUser,updateOneUser,deleteOneUser}= require ("../models/users")
//requiring the bcrypt and the jasonwebtoken libraries
const bcrypt = require ("bcrypt")
const jwt = require ("jsonwebtoken");


//function to get all the users in the users table
const getUsers=(req,res)=>{
    const callback=(err,result)=>{
        if(err) res.status(500).send(err)
        else res.status(200).send(result)
        }
        getAllUsers(callback)
};
// async function to post one user in the users table "sign up"
//(it checks if the user already exists in the table if true it sends an error message with status 409
// if false it hashes the password from the request body and later on inserts it in the users table using the query function
const postOne=async (req,res)=>{
      try {
        const dbUser= await getOneUser(req.body.useremail)
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
// async function that gets one user from the users table by his email and it cheks
// if the user does not exist is sends a response witha status 404 and a string "Non-existing user"
//other than that it checks if the password in the request matches the user passwprd in the database
//if the password hashes matchs it generates a web token sighned with the user's id and email address 
//and it sends a response with a status code 200 and it sends then tocken in the response payload and a string "Authentication successful"
//but if the password does not match it send a response with the status code 400 and a string "Wrong password"
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
  // async function that updates one user in the users table 
  const updateOne= async (req,res)=>{
    try {
    const hashedPassword=await bcrypt.hash(req.body.userpw, 10)
    const user ={
        username:req.body.username,
        userpw:hashedPassword,
        useremail:req.body.useremail
    }
    updateOneUser(user.username,user)
    res.status(201).send(user)
  }
  catch(err) {
    res.status(500).send(err)
   }
}
//async function that deletes 
const deleteOne= async (req,res)=>{
  try{
     const mail=req.params.useremail
     await deleteOneUser(mail)
     res.status(204).send(mail)
  }
  catch(err) {
    res.status(500).send(err)
   }
}
module.exports={
    getUsers,
    postOne,
    login,
    updateOne,
    deleteOne
}