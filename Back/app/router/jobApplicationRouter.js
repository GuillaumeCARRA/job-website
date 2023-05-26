const express = require('express'); 

const jobApplicationsController = require('../controllers/jobApplicationsController');

const router = express.Router();

router.get('/', jobApplicationsController.getAllApplies);
router.get('/:id(\\d+)', jobApplicationsController.getOneApply);
router.post('/', jobApplicationsController.createApply)
router.patch('/:id(\\d+)', jobApplicationsController.updateApply);
router.delete('/:id(\\d+)', jobApplicationsController.deleteApply);

module.exports = router; 