
const express = require("express");
const User = require("../model/user")
const {upload} = require("../multer");
const {ErrorHandler} = require("../utils/ErrorHandler")
const path = require("path");

const router = express.Router();


router.post("/create-user", upload.single("file"), async (req,res, next)=>{
    const {name , email , password} = req.body
    const  userEmail = await User.findOne({email});
        if(userEmail){
            return next(new ErrorHandler('User Already Exisits', 400));
        }

    const filename = req.file.filename;
    const fileUrl = path.join(filename);
    const user = {
        name :name ,
        email:email,
        password:password,
        avatar:fileUrl,
    }
    console.log(user);
})


module.exports = router