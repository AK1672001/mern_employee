const Userdata=require("../Model/model");
const bcrypt=require("bcrypt");
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

module.exports=Signup;