const express=require("express");
const server=express();
const mongoose=require("mongoose")
 const router=require("./Router/router")
const dotenv=require("dotenv");
dotenv.config();
server.get('/',(req,res)=>{
    res.json({message:"Hello from server side2! "})
})
server.use(express.json());
server.listen(process.env.PORT,()=>{
    console.log(`server is running ${process.env.PORT}`);
    mongoose.connect("mongodb://localhost:27017/userdata")
.then(()=>{
   console.log("database is connected");
})
.catch((err)=>{
    console.log(err);
})
})
 server.use(router);
