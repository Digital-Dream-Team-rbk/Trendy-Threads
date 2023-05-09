const con=require("../connection")
module.export={
    getAll:function (cb){
        const sql="SELECT * FROM admin"
        con.query(sql,(err,rslt)=>{
          cb(err,rslt)
        })
    }
}