const mysql=require("mysql2")
const config=require("../backend/config")
const connection = mysql.createConnection(config);
connection.connect((err) => {
  if (err) console.log("Error to connect to database", err);
  else console.log("Yaaay Database connected!!");
});
module.exports=connection