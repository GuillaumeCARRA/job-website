const express = require('express'); 

const jobSeekerCriteria = require('../controllers/jobSeekerCriteriaController');

const router = express.Router();

router.get('/', jobSeekerCriteria.getAllJobSeekerCriteria);
router.get('/:id(\\d+)', jobSeekerCriteria.getOneJobSeekerCriteria);
router.post('/', jobSeekerCriteria.createJobSeekerCriteria)
router.patch('/:id(\\d+)', jobSeekerCriteria.updateJobSeekerCriteria);
router.delete('/:id(\\d+)', jobSeekerCriteria.deleteJobSeekerCriteria);

module.exports = router; 