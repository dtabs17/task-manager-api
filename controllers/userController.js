const express = require("express");
const bcrypt = require("bcryptjs");
const app = express();
const user = require("../models/userModel");

const registerUser = async(req,res)=>{
    try{
        req.body.password = await bcrypt.hash(req.body.password, 10);
        const result = user.registerUser(req.body);
        if(result)
            res.status(201).json({success:"User successfully Registered"});
    }catch(err){
        return res.status(500).json({error:err.message});
    };
}

const loginUser = async(req,res)=>{

}

module.exports = {
    registerUser,
    loginUser
}