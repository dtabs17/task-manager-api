const express = require("express");
const app = express();
const task = require("../models/taskModel");

const getAllTasks = async (req,res)=>{
    try{
    const tasks = await task.getAllTasks();
    if(tasks.length > 0){
        return res.status(200).json({tasks});
    }
    return res.status(404).json({error: "No tasks found"});
}catch(err){
    res.status(500).json({error: err.message});
}
};

const getTaskByID = async(req,res)=>{
try{
    const specificTask = await task.getTaskByID(req.params.id);
    if(specificTask){
        return res.status(200).json({success: "task found", specificTask});
    }
    return res.status(404).json({error: "task not found"}) 
}catch(err){
    return res.status(500).json({error:err.message});
}
};

const createTask = async(req,res)=>{
try{
    const newTask = await task.createTask(req.body);
    if(newTask){
        return res.status(201).json({success: "Task successfully Added", newTask});
    }
}catch(err){
    return res.status(500).json({error: err.message});
}
};

const updateTask = async(req,res)=>{
try{
    const success = await task.updateTask(req.body, req.params.id);
    if(success){
        return res.status(201).json({"success": "task successfully updated"});
    }
    return res.status(404).json({error:`failed to update task ${req.params.id}`})
}catch(err){
    return res.status(500).json({error:err.message});
}
};

const deleteTask = async(req,res)=>{
    try{
    const result = await task.deleteTask(req.params.id);
    if(result)
        return res.status(200).json({success:`task ${req.params.id} successfully deleted`});
    return res.status(404).json({error:"task not found"});
}catch(err){
    return res.status(500).json({error:err.message});
}
};

module.exports = {
    getAllTasks,
    getTaskByID,
    createTask,
    updateTask,
    deleteTask
};