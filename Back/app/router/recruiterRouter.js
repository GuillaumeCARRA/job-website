const express = require('express'); 

const recruiterController = require('../controllers/recruiterController');

const router = express.Router();

router.get('/sign', recruiterController.handleRecruiterSignUpform);
router.post('/sign', recruiterController.handleRecruiterSignUpform); 
router.get('/log', recruiterController.handleRecruiterLoginForm);
router.post('/log', recruiterController.handleRecruiterLoginForm);
router.patch('/modify/:id(\\d+)', recruiterController.updateRecruiter);
router.delete('/delete/:id(\\d+)', recruiterController.deleteRecruiter); 

module.exports = router; 