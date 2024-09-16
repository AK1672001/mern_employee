const express=require("express");
const {Signup,Sigin,logout}=require("../Controller/controller");

const router=express.Router();

router.post("/signup",Signup);
router.post("/sigin",Sigin);
router.get("/logout",logout)
module.exports=router;