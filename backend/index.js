const express = require("express");
const app = express();
const cors =require ('cors');
app.use(cors());
app.use(express.json());
const port = 3000;


app.listen(port,(err)=>{
    if(err) console.log(`server off ligne`)
    else console.log(`Server on ligne on port:${port}`)
    });