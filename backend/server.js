const express=require("express");
const server=express();
const mongoose=require("mongoose")
// const router=require("./Router/router")
const dotenv=require("dotenv");
dotenv.config();
server.get('/',(req,res)=>{
    res.json({message:"Hello from server side2! "})
})
server.use(express.json());
server.listen(3000,()=>{
    console.log(`server is running 3000`);
    mongoose.connect("mongodb://localhost:27017/userdata")
.then(()=>{
   console.log("database is connected");
})
.catch((err)=>{
    console.log(err);
})
})
// server.use(router);
