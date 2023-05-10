const connection= require("../connection")

const getAllUsers=(callback)=>{
    const sql="SELECT * FROM users"
    connection.query(sql,(err,result)=>{
        callback(err,result)
    })
}
const getOneUser=async (useremail)=>{
    const sql=`SELECT * FROM users where useremail=${useremail}`
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
const updateOneUser=(name,update,callback)=>{
    const sql= `update users set ? where username="${name}"`
    connection.query(sql,update,(err,result)=>{
        callback(err,result)})
}
const deleteOneUser=(name,callback)=>{
    const sql= `delete from recepie where username="${name}"`
    connection.query(sql,(err,result)=>{
        callback(err,result)
    })
}
module.exports={
    getAllUsers,
    getOneUser,
    postOneUser,
    updateOneUser,
    deleteOneUser
}