const Userdata=require("../Model/model");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const dotenv=require("dotenv");
dotenv.config();
const Signup=async(req,res)=>{
    const{username,email,password}=req.body;
    try{
        if(!username || !email || !password )
            return res.status(400).json({msg:"please fill details"})
        const data= await Userdata.findOne({email});
        if(data) return res.status(200).json({msg:"email already exist"});
        const haspassword= await bcrypt.hash(password,10)
          const user=  new Userdata({
            username,
            email,
            password:haspassword
          })
          await user.save();
     
          return res.status(200).json({msg:"successfully registration page",user})
    }
    catch(err){
       return  res.status(500).json({msg:err})
    }
}

const Sigin=async(req,res)=>{
  const {email,password}=req.body;
 
  try{
       const user=await Userdata.findOne({email});
       if(!user)return res.status(404).json({msg:"please provide the correct email"});
       const validpassword=await bcrypt.compare(password,user.password);
       if(!validpassword)return res.status(200).json({msg:"please correct this password"});
       const token=jwt.sign(
        {
         userId:user._id,
        },
         process.env.JWT_SECRET,
         {expiresIn:"2d"}

       )
       return res.status(200).json({msg:"successfully sigin",user:user.email,token});
  }
  catch(err){
    return res.status(500).json({msg:err})
  }
}
module.exports={Signup,Sigin};