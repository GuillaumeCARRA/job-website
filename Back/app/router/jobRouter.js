const express = require('express'); 

const jobController = require('../controllers/jobController');

const router = express.Router();

router.get('/', jobController.getAllJobs);
router.get('/:id(\\d+)', jobController.getOneJob);
router.post('/:id(\\d+)', jobController.createJob)
router.patch('/:id(\\d+)', jobController.updateJob);
router.delete('/:id(\\d+)', jobController.deleteJob);


module.exports = router; 