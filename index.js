require('dotenv').config()
const express = require("express")
const app = express();
const port = 4000
app.get("/",(req,res)=>{
   res.send("hello world")
})
app.get("/login",(req,res)=>{
    res.send("<h1> login successfully </h1>")
})
app.listen(process.env.PORT, ()=>{
    console.log(`server is running at port ${port}`)
})