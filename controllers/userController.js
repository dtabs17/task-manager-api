const express = require("express");
const bcrypt = require("bcryptjs");
const app = express();
const user = require("../models/userModel");
const jwt = require("jsonwebtoken");


const registerUser = async(req,res)=>{
    try{
        req.body.password = await bcrypt.hash(req.body.password, 10);
        const result = await user.registerUser(req.body);
        if(result)
            return res.status(201).json({success:"User successfully Registered"});
    }catch(err){
        return res.status(500).json({error:err.message});
    };
}

const loginUser = async(req,res)=>{
    try{
        const result = await user.loginUser(req.body);
        if(!result){
            return res.status(404).json({"Error":"Failed login. Wrong email or password"});
        }
        const success = await bcrypt.compare(req.body.password, result.password);
        if(!success){
            return res.status(401).json({"Error":"Failed login. Wrong email or password"});
        }
        const token = jwt.sign({id:result.id, username:result.username}, process.env.JWT_SECRET, {expiresIn : "1h"});
        return res.status(200).json({"successful login" : `welcome ${result.username}`, token});
    }catch(err){
        return res.status(500).json({error: err.message});
    }
}


module.exports = {
    registerUser,
    loginUser
}