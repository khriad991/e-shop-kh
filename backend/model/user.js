const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require:[true, 'Please enter your name!']
    },
    email:{
        type:String,
        require:[true, "Please enter your email"]
    },
    password:{
        type:String,
        require:[true,"Please enter your password"],
        minLength:[6,'Password shoould be greater than 6 characters'],
        select:false
    },
    phoneNumber:{
        type:Number
    },
    address:[
        {
            country:{type:String},
            city:{String},
            address1:{type:String},
            address2:{type:String},
            zipCode:{type:Number},
            addressType:{type:String}
    }
    ],
    role:{
        type:String,
        default:'user'
    },
    avatar:{
        type:String,
        require:true,
    },
    createAt:{
        type:Date,
        default:Date.now(),
    },
    resetPasswordToken:String,
    resetPasswordTime:Date,
})


// Hash passwond
userSchema.pre("save", async function(next){
    if(!this.isModified("password")){
        next();
    }
    this.password = await bcrypt.hash(this.password, 10 )
});

// jwt Token ------------>>>>
userSchema.methods.getJwtToken = function (){
    return jwt.sign({id:this._id},process.env.JWT_SECRET_KEY),{
        expiresIn:process.env.JWT_EXPIRES
    }}

// Compare tha Password ----------->>>>
userSchema.methods.comparePassword= async function(enteredPassword){
    return await bcrypt.compare(enteredPassword , this.password);

}





module.exports = mongoose.model("User", userSchema);