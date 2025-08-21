require("dotenv").config();
const taskRoutes = require("./routes/taskRoutes");
const userRoutes = require("./routes/userRoutes");
const express = require("express");
const app = express();
const PORT = process.env.PORT;

app.use(express.json()); 
app.use("/api/tasks", taskRoutes);
app.use("/api/users", userRoutes);

app.listen(PORT, ()=>{
    console.log("server is running");
});
