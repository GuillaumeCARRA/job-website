const express = require('express'); 

const jobSeekerSituationController = require('../controllers/jobSeekerSituationController');

const router = express.Router();

router.get('/', jobSeekerSituationController.getAllJobSeekerSituation);
router.get('/:id(\\d+)', jobSeekerSituationController.getOneJobSeekerSituation);
router.post('/', jobSeekerSituationController.createJobSeekerSituation)
router.patch('/:id(\\d+)', jobSeekerSituationController.updateJobSeekerSituation);
router.delete('/:id(\\d+)', jobSeekerSituationController.deleteJobSeekerSituation);

module.exports = router; 