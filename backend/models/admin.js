const con=require("../connection")
module.exports={
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
      con.query(sql,admin,(err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  },
  
    changeAdmin:function(cb,id,admin) {
      const sql = `UPDATE admin SET ? WHERE adminid=${id} `
      con.query(sql,admin,(err,rslt)=>{
        cb(err,rslt)
      })
    },
    deleteAdmin:function(cb,id) {
      const sql=`DELETE FROM admin WHERE id=${id}`
    connection.query(sql,(err,res)=>{
        cb(err,res)
      })
    }

}