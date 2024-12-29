const mongoose=require("mongoose");

let userSchema=new mongoose.Schema({
    name:{
        type:"String",
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    email:{
        type:"String",
        required:true
    },
    isAdmin:{
        type:Number,
        require:false,
        default:0,
        enum:[0,1]
    },
    userName:{
        type:"String",
        required:true
    },
    password:{
        type:"string",
        required:true
    }
});

let userModel=mongoose.model("users",userSchema);

module.exports={userModel}

