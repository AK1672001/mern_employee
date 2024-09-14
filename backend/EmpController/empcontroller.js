const Empdata=require("../EmpModel/empmodel");
const Empdetails=async(req,res)=>{
    const{name,email,phone,designation,gender,course}=req.body;
    const ImgUpload = req.file.filename; 

    if(!name ||!email || !phone || !designation || !gender || !course || !ImgUpload)
        return res.status(404).json({msg:"please fill all the details including image"})
    try{
         const userdata= await Empdata.findOne({email})
         if(userdata)return res.status(404).json({msg:"please provide anthor email"})
          const user=  new Empdata({
            name,
            email,
            phone,
            designation,
            gender,
            course,
            ImgUpload
          })
          await user.save();
          return res.status(200).json({msg:"successfully employ details",user});
    }
    catch(err){
        return res.status(500).json({msg:err})
    }
}

const Empalldetails=async(req,res)=>{
    try{
         const user=await Empdata.find();
         if(!user)return res.status(404).json({msg:"employe not found"});
         else
         return res.status(200).json({msg:"employe all details",user});
    }
    catch(err){
        res.status(500).json({msg:err})
    }
}
const Empdelete=async(req,res)=>{
    try{
         const {id}=req.params
         const user=await Empdata.findByIdAndDelete(id);
       
         return res.status(200).json({msg:"deleted successfully"});
    }
    catch(err){
      return  res.status(500).json({msg:err})
    }
}
const Empdetailsupdate=async(req,res)=>{
    const{name,email,phone,designation,gender,course,ImgUpload}=req.body;
    try{
         const {id}=req.params;
          const data=await Empdata.findByIdAndUpdate(id,{
            name,
            email,
            phone,
            designation,
            gender,
            course,
            ImgUpload,
    },{ new: true })
            
         if(!data){
            return res.status(404).json({msg:"employe not found"});
         }
         return res.status(200).json({msg:" update employe successfully",data});
    }
    catch(err){
      return  res.status(500).json({msg:err.message})
    }
}
module.exports={Empdetails,Empalldetails,Empdelete,Empdetailsupdate};