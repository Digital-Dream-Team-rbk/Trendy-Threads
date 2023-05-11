const con=require("../connection")
module.exports={
  getAllUsers:()=>{
    return new Promise((resolve, reject) => {
      const sql=`SELECT * FROM admin `
      con.query(sql,(err,rslt)=>{
        if (err) reject(err)
        else resolve(rslt)
      })
    })
},
   getOne : function(mail) {
    return new Promise((resolve, reject) => {
      const sql=`SELECT * FROM admin where adminmail="${mail}"`
      con.query(sql,(err,rslt)=>{
        if (err) reject(err)
        else resolve(rslt)
      })
    })
  },
  createAdmin: function(admin) {
    return new Promise((resolve, reject) => {
      const sql = "INSERT INTO admin SET ?";
      con.query(sql,admin,(err,result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  },
  
  changeAdmin:function(id,admin) {
      return new Promise((resolve,reject)=>{
        const sql = `UPDATE admin SET ? WHERE adminid=${id} `
        con.query(sql,admin,(err,rslt)=>{
        if(err){
          reject(err)
        }
        else resolve(rslt)
      })
      }
       )
  },

    deleteAdmin:function(id){
    return new Promise((resolve,reject)=>{
      const sql=`DELETE FROM admin WHERE adminid=${id}`
      con.query(sql,(err,rslt)=>{
      if(err){
        reject(err)
      }
      else resolve(rslt)
    })
    }
  )}
}