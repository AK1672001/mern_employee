const {Empdetails,Empalldetails,Empdelete,Empdetailsupdate}=require("../EmpController/empcontroller");
const upload=require("../ImgUpload/imgupload")

const express=require("express");
const Emprouter=express.Router();

Emprouter.post("/empdetails",upload.single('file'),Empdetails);
Emprouter.get("/empalldetails",Empalldetails);
Emprouter.post("/empdelete/:id",Empdelete)
Emprouter.post("/empupdatedetails/:id",upload.single('file'),Empdetailsupdate);
module.exports=Emprouter;
