const pool = require("../database/db");

async function registerUser(userData){
    const {username, email, password, created_at} = userData;
    const result = await pool.query("INSERT into users (username, email, password, created_at) VALUES ($1,$2,$3,$4) RETURNING *", [username,email,password,created_at]);
    return result.rows[0];
}

async function login(userData){
    const {email, password} = userData;
    const result = await pool.query("SELECT * FROM users WHERE email = $1 AND password = $2", [email,password]);
    return result.rows[0];
}

module.exports = {
    registerUser,
    login
};