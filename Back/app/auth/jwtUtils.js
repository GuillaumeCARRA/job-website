require('dotenv').config(); 
const jwt = require('jsonwebtoken'); 

// const jwtSecret = "test"; 

module.exports = {
    generateToken: (payload) => {
        const token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: '4h'}); 
        console.log('token', token);
        return token; 
    },
    
    verifyToken: (token) => {
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET); 
            console.log(decoded);
            return decoded; 
        } catch (error) {
            throw new Error('Invalid token');
        }
    }
}