const express = require('express'); 

const jobSeekerCvController = require('../controllers/jobSeekerCvController');

const router = express.Router();

router.get('/', jobSeekerCvController.getAllJobSeekerCv);
router.get('/:id(\\d+)', jobSeekerCvController.getOneJobSeekerCv);
router.post('/', jobSeekerCvController.createJobSeekerCv)
router.patch('/:id(\\d+)', jobSeekerCvController.updateJobSeekerCv);
router.delete('/:id(\\d+)', jobSeekerCvController.deleteJobSeekerCv);

module.exports = router; 