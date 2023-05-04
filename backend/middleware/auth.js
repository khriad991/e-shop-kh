const jwt = require("jsonwebtoken");
const Errorhandler = require("../utils/ErrorHandler")
const catchAsyncError = require("./catchAsyncError")
const User = require("../model/user");

exports.isAuthenticated = catchAsyncError(async (req,res,next)=>{
    const {token} =req.cookie;
    if(!token){
        return next(new Errorhandler("Please login to continue,", 401))
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    req.user =await User.findById(decoded.id);

    next()
})


// authentication for isAdmin --------->>

exports.isAdmin = (...roles)=>{
    return (req,res,next)=>{
        if(!roles.includes(req.user.role)){
            return next(new Errorhandler(`${req.user.role} Can Not Access this resources `))
        }
        next();
    }
}











