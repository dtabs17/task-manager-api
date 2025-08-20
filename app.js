require("dotenv").config();
const taskRoutes = require("./routes/taskRoutes");
const express = require("express");
const pool = require("./database/db");
const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use("/api/tasks", taskRoutes);
app.listen(PORT, ()=>{
    console.log("server is running");
});
