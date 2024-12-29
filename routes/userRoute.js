const express=require("express");
let {userModel}=require("../models/userModel")

let route=express.Router();

route.get("/",async(req,res)=>{
    try {
        let userData= await userModel.find();
        console.log("userData",userData);

        res.send(userData)

    } catch (error) {
        res.send(error)
    }
   ;
});

route.post("/",async (req,res) => {
    try {
        let insertedData=await userModel.create(req.body);
        res.send({sucecess:true,message:"successfully inserted"});

    } catch (error) {
        res.send({sucecess:false,message:error.message});
    }

})

route.put("/:id",async (req,res) => {
    try {
        // find params
        // req.params.id
        let updatedData=await userModel.findByIdAndUpdate(req.params.id,req.body)
        res.send({sucecess:true,message:"succcessfully updated",updatedData})
    } catch (error) {
        res.send({sucecess:false,message:error.message})
    }

})

route.delete("/:id",async (req,res) => {
    try {
        let deletedData=await userModel.findByIdAndDelete(req.params.id)
        res.send({sucecess:true,message:"successfully deleted"})

    } catch (error) {
        res.send({sucecess:false,message:error.message})
    }

})

module.exports=route