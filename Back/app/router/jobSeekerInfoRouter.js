const express = require('express'); 

const jobSeekerInfoController = require('../controllers/jobSeekerInfoController');



// const { verifyToken } = require('../auth/jwtUtils'); 

const router = express.Router();

// router.use(verifyToken);

router.get('/', jobSeekerInfoController.getAllJobSeekerInfo);
router.get('/:id(\\d+)', jobSeekerInfoController.getOneJobSeekerInfo);
router.post('/', jobSeekerInfoController.createJobSeekerInfo);
router.patch('/:id(\\d+)', jobSeekerInfoController.updateJobSeekerInfo);
router.delete('/:id(\\d+)', jobSeekerInfoController.deleteJobSeekerInfo);

module.exports = router; 