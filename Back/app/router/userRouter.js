const express = require('express'); 

const userController = require('../controllers/userController');

const router = express.Router();

router.get('/sign', userController.handleSignUpForm);
router.post('/sign', userController.handleSignUpForm); 
router.get('/log', userController.handleLoginForm);
router.post('/log', userController.handleLoginForm);
router.patch('/modify/:id(\\d+)', userController.updateUser);
router.delete('/delete/:id(\\d+)', userController.deleteUser); 

module.exports = router; 