const express=require("express");
const Signup=require("../Controller/controller");

const router=express.Router();

router.post("/signup",Signup);

module.exports=router;