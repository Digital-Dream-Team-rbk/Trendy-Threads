const con=require("../connection")
module.exports={
   getOne : function(name) {
    return new Promise((resolve, reject) => {
      const sql=`SELECT * FROM admin where adminmail='${name}'`
      con.query(sql,(err,rslt)=>{
        if (err) reject(err)
        else resolve(rslt)
      })
    })
  },
    createAdmin:function(cb,admin){
        const sql ="INSERT INTO admin SET ?"
        con.query(sql,admin,(err,rslt)=>{
          cb(err,rslt)
        })
    }
}