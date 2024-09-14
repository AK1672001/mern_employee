const mongoose=require("mongoose");
const validator=require("validator")
const userSchema=new mongoose.Schema({
    username:{
       type:String,
       required:true
    },
    email:{
        type:String,
        required:true,
        validate:[validator.isEmail,"Please provide a vild email"]
     },
     password:{
        type:String,
        required:true
     },

})

const Userdata=mongoose.model("Userdata",userSchema);
module.exports=Userdata;