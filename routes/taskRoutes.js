const express = require("express");
const {getAllTasks, getTaskByID, createTask, updateTask, deleteTask} = require("../controllers/taskController");
const authenticateToken = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/tasks", authenticateToken, getAllTasks);
router.get("/task/:id", authenticateToken, getTaskByID);
router.post("/tasks", authenticateToken, createTask);
router.put("/task/:id", authenticateToken, updateTask);
router.delete("/task/:id", authenticateToken, deleteTask);

module.exports=router;