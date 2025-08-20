const express = require("express");
const {getAllTasks, getTaskByID, createTask, updateTask, deleteTask} = require("../controllers/taskController");

const router = express.Router();

router.get("/tasks", getAllTasks);
router.get("/task/:id", getTaskByID);
router.post("/tasks", createTask);
router.put("/task/:id", updateTask);
router.delete("/task/:id", deleteTask);

module.exports=router;