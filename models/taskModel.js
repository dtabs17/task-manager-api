const pool = require("../database/db");

async function getAllTasks(){
    const result = await pool.query("SELECT * FROM tasks order by id ASC");
    return result.rows;
}

async function getTaskByID(id){
    const result = await pool.query("SELECT * FROM tasks WHERE id = $1", [id]);
    return result.rows[0];
}

async function createTask(taskData){
    const {title, completed} = taskData;
    const result = await pool.query("INSERT into tasks (title,completed) VALUES ($1,$2)  RETURNING *", [title, completed]);
    return result.rows[0];  
}

async function updateTask(taskData, id){
    const {title, completed} = taskData;
    const result = await pool.query("UPDATE tasks SET title = $1, completed = $2 WHERE id = $3",
        [title, completed, id]);
        return result.rowCount>0;
}

async function deleteTask(id){
    const result = await pool.query("DELETE FROM tasks WHERE id = $1", [id]);
    return result.rowCount > 0;
}

module.exports = {
    getAllTasks,
    getTaskByID,
    createTask,
    updateTask,
    deleteTask
};