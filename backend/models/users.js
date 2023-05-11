// requiring the connection to link database 
const connection= require("../connection")
//query function to get all users from the users table
const getAllUsers=(callback)=>{
    const sql="SELECT * FROM users"
    connection.query(sql,(err,result)=>{
        callback(err,result)
    })
}
//query function to get one user from the users table using his email
const getOneUser=async (useremail)=>{
    const sql=`SELECT * FROM users where useremail="${useremail}"`
    return new Promise((resolve, reject) => {
        connection.query(sql,(err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
      })
}
//query function to post a new user to the users table
const postOneUser= async (user)=>{
    const sql=`INSERT INTO users set ?`
    return new Promise((resolve, reject) => {
        connection.query(sql, user, (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
      });
}
//query function to update one user from the users table
const updateOneUser=(name,update)=>{
    const sql= `update users set ? where username="${name}"`
    return new Promise((resolve, reject) => {
    connection.query(sql,update,(err,result)=>{
      if(err){
        reject(err)
      }
      else resolve(result)
}) 
})
}
//query function to delete one user from the users table
const deleteOneUser=(mail)=>{
    const sql= `delete from users where useremail="${mail}"`
    return new Promise((resolve, reject) => {
    connection.query(sql,(err,result)=>{
      if(err){
        reject(err)
      }
      else resolve(result)
    })
})}
//exporting all of the function to use them in users.js in the controller folder
module.exports={
    getAllUsers,
    getOneUser,
    postOneUser,
    updateOneUser,
    deleteOneUser
}