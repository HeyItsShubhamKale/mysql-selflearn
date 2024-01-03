 import express from "express"
 import mysql from "mysql"
  
 const app = express()
 
//  const db = mysql.createConnection({
//     host:"localhost"
//     user:"root"
//     password:""
//     database:"test"
//  });

//  app.get("/", (req,res) =>{
//     res.json("hello this is backend")
//  });

 app.listen(5000, ()=>{

    console.log("connected to backend")
 })