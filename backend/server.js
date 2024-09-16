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
    origin: 'http://localhost:3000', 
    credentials: true
     
 }));
server.use('/images', express.static(path.join(__dirname,'ImgUpload', 'Public', 'images')));

server.use(express.json());
server.listen(process.env.PORT,()=>{
    console.log(`server is running ${process.env.PORT}`);
    mongoose.connect(`${process.env.MONGO}`)
.then(()=>{
   console.log("database is connected");
})
.catch((err)=>{
    console.log(err);
})
})
server.use(router);
server.use(Emprouter);


const dirname=path.resolve();
server.use(express.static(path.join(dirname,'/frontend/build')));
server.get("*",(req,res)=>{
    res.sendFile(path.join(dirname,"frontend",'build','index.html'))
})



