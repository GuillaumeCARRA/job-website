require('dotenv').config(); 
const jwt = require('jsonwebtoken'); 

module.exports = {
    generateToken: (payload) => {
        const token = jwt.sign(payload,  process.env.JWT_SECRET, {expiresIn: '4h'}); 
        console.log('token payload', payload);
        return token; 
    },
    
    verifyToken: (token) => {
        try {
            console.log('Token received:', token);
            const decoded = jwt.verify(token,  process.env.JWT_SECRET, {expiresIn: '4h'});
            console.log('decoded inside jwtUtils', decoded);
            return decoded; 
        } catch (error) {
            console.log(error);
            return { error: 'Invalid token' };
        }
    }
//     verifyToken: (request) => {
//         try {
//             const authorizationHeader = request.headers.authorization;
//             if (!authorizationHeader) {
//                 throw new Error('Authorization header missing');
//             }
    
//             const [bearer, token] = authorizationHeader.split(' ');
    
//             if (bearer !== 'Bearer' || !token) {
//                 throw new Error('Invalid authorization header format');
//             }
    
//             const decoded = jwt.verify(token, process.env.JWT_SECRET, { expiresIn: '4h' });
//             console.log('Decoded token:', decoded);
//             return decoded;
//         } catch (error) {
//             console.log(error);
//             return { error: 'Invalid token' };
//         }
//     }
}