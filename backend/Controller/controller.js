const Userdata=require("../Model/model");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const dotenv=require("dotenv");
dotenv.config();
const Signup=async(req,res)=>{
    const{name,email,password}=req.body;
    try{
        if(!name || !email || !password )
            return res.status(400).json({msg:"please fill details"})
        const data= await Userdata.findOne({email});
        if(data) return res.status(400).json({msg:"email already exist"});
        const haspassword= await bcrypt.hash(password,10)
          const user=  new Userdata({
            name,
            email,
            password:haspassword
          })
          await user.save();
     
          return res.status(200).json({msg:"successfully registration page",user})
    }
    catch(err){
       return  res.status(500).json({msg:err.message})
    }
}

const Sigin=async(req,res)=>{
  const {email,password}=req.body;
  if(!email || !password) return res.status(404).json({msg:"please fill all details"})
  try{
       const user=await Userdata.findOne({email});
       if(!user)return res.status(404).json({msg:"please provide the correct email"});
       const validpassword=await bcrypt.compare(password,user.password);
       if(!validpassword)return res.status(404).json({msg:"please correct this password"});
       const token=jwt.sign(
        {
        // name:user.name,
         userId:user._id,
         name:user.name
        },
         process.env.JWT_SECRET,
         {expiresIn:"2d"}

       )
       return res.status(200).json({msg:"successfully sigin",email:user.email,user:user.name,token});
  }
  catch(err){
    return res.status(500).json({msg:err.message})
  }
}
const logout=async(req,res)=>{
  try{
    res.clearCookie("userId","name");
    res.status(200).json({msg:"user logout successfully"});
  }
  catch(err){
    return res.status(404).json({mes:err.message})
  }
}
module.exports={Signup,Sigin,logout};