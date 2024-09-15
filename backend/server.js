const express=require("express");
const server=express();
const path = require('path');
const mongoose=require("mongoose")
 const router=require("./Router/router")
 const Emprouter=require("./EmpRouter/emprouter")
 const cors=require("cors")

const dotenv=require("dotenv");
dotenv.config();
server.use(cors({
    origin: 'http://localhost:3000', // Specify the allowed origin
    credentials: true
     
 }));
server.use('/images', express.static(path.join(__dirname,'ImgUpload', 'Public', 'images')));

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
// server.use('/uploads', express.static('uploads'));

 server.use(router);
 server.use(Emprouter);

