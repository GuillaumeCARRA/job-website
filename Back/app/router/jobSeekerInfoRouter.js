const express = require('express'); 

const jobSeekerInfoController = require('../controllers/jobSeekerInfoController');

const router = express.Router();

router.get('/', jobSeekerInfoController.getAllJobSeekerInfo);
router.get('/:id(\\d+)', jobSeekerInfoController.getOneJobSeekerInfo);
router.post('/', jobSeekerInfoController.createJobSeekerInfo)
router.patch('/:id(\\d+)', jobSeekerInfoController.updateJobSeekerInfo);
router.delete('/:id(\\d+)', jobSeekerInfoController.deleteJobSeekerInfo);

module.exports = router; 