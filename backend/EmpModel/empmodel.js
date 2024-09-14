const mongoose=require("mongoose");
const validator=require("validator")
const empSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
          required:true,
         validate:[validator.isEmail,"please provide vild email"]
    },phone:{
        type:Number,
        required:true,
        maxlength: 10, 
        minlength: 10,
        validate: {
            validator: function(v) {
              return /^\d{10}$/.test(v); // Ensures it contains exactly 10 digits
            },
            message: props => `${props.value} is not a valid 10-digit phone number!`
          }
    },designation:{
        type:String,
        required:true
    },gender:{
        type:String,
        required:true
    },
    course:{
        type:String,
        required:true
    },
    ImgUpload:{
        type:String,
        required:true
    },
})
const Empdata=mongoose.model("Empdata",empSchema)
module.exports=Empdata;