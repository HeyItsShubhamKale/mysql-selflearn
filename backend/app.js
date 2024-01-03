
const express = require ("express");
const mysql = require ("mysql");

app.use(express.json());



const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "test",
  });


app.get('/',(req,res)=>{
    res.send("Hi");
})

app.listen(5000,()=>{
console.log("Server listening in http://localhost:5000")
})