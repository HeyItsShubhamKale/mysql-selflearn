 import express from "express"
 import mysql from "mysql"
  
 const app = express()
 
 const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"test"
 });

 app.get("/", (req,res) =>{
    res.json("hello this is backend")
 });

 app.get("/register", (req,res) =>{
   const q =" SELECT * FROM test.user_master";
   db.query (q,(err,data) =>{
      if (err) return res.json(err)
      else return res.json(data)
   })
 })

 app.listen(5000, ()=>{

    console.log("connected to backend")
 })