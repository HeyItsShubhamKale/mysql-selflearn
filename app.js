const express = require ("express");
const mysql = require ("mysql");

app.use(express.json());



const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "test",
  });

  db.connect ((error) => {
    if (error) {
        console.log (error)
    }else {
        console.log("Database connected successfully ")
    }
} );

app.get('/',(req,res)=>{
    res.send("Hi");
})

app.post("/users", async (req, res) => {
try {
    const { name, address, country } = req.body;
    const [{ insertId }] = await connection.promise().query(
      `INSERT INTO users (name, address, country) 
          VALUES (?, ?,?)`,
      [name, address, country]
    );
    res.status(202).json({
      message: "User Created",
    });
  } catch (err) {
    res.status(500).json({
      message: err,
    });
  }
});

app.listen(5000,()=>{
console.log("Server listening in http://localhost:5000")
})