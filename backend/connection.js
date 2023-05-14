const mysql=require("mysql2")
const config=require("../backend/config")

const connection = mysql.createPool(config);
connection.on("connect", () => {
  console.log("Database connected successfully!");
});
module.exports=connection;