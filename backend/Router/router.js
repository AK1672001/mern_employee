const express=require("express");
const {Signup,Sigin}=require("../Controller/controller");

const router=express.Router();

router.post("/signup",Signup);
router.post("/sigin",Sigin);
module.exports=router;