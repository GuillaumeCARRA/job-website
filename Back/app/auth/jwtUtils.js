require('dotenv').config(); 
const jwt = require('jsonwebtoken'); 

module.exports = {
    generateToken: (payload) => {
        const token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: '4h'}); 
        console.log('token payload', payload);
        return token; 
    },
    
    verifyToken: (token) => {
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            console.log('decoded inside jwtUtils', decoded);
            return decoded; 
        } catch (error) {
            throw new Error('Invalid token');
        }
    }
}