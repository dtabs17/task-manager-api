const jwt = require("jsonwebtoken");

function authenticateToken(req,res,next){
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (!token)
        return res.status(401).json({error: "Access denied middleware"});
    jwt.verify(token, process.env.JWT_SECRET, (err, user)=>{
        if(err)
            return res.status(403).json({err: err.message});    
        req.user = user;
        next();
    });
}

module.exports = authenticateToken;
