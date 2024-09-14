const multer = require('multer');

const fs = require('fs');
const path = require('path');
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = path.join(__dirname, 'Public', 'images');
    // console.log("uploadDir>>",uploadDir)
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
     //cb(null,file.fieldname +"_" + Date.now() + path.extname(file.originalname) );
    const allowedExtensions = ['.jpg','.png'];
    
    const fileExtension = path.extname(file.originalname).toLowerCase();

    if (allowedExtensions.includes(fileExtension)) {
      cb(null, file.fieldname + "_" + Date.now() + fileExtension);
    } else {

        cb( new Error('Invalid file type. Only jpg and png files are allowed.'));
    }
  }
});


const upload = multer({
  storage: storage,
  onError: (err, res) => {
   return res.status(200).json({ msg:"only jpg and png file",err});
   
  }
});


module.exports=upload;