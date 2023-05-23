const express = require('express'); 

const jobSeekerController = require('../controllers/jobSeekerController');

const router = express.Router();

router.get('/', jobSeekerController.getAllJobSeekers);
router.get('/:id(\\d+)', jobSeekerController.getOneJobSeeker);
router.post('/', jobSeekerController.createJobSeeker);
router.patch('/:id(\\d+)', jobSeekerController.updateJobSeeker);
router.delete('/:id(\\d+)', jobSeekerController.deleteJobSeeker);

module.exports = router; 