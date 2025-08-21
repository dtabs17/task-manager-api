const pool = require("../database/db");

async function registerUser(userData){
    const {username, email, password, created_at} = userData;
    const result = await pool.query("INSERT into users (username, email, password, created_at) VALUES ($1,$2,$3,$4) RETURNING *", [username,email,password,created_at]);
    return result.rows[0];
}

async function loginUser(userData){
    const {email} = userData;
    const result = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
    if(result.rows.length === 0)
        return null;
    return result.rows[0];
}

module.exports = {
    registerUser,
    loginUser
};