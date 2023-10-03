const express = require('express'); 

//import all router
const jobApplicationRouter = require('./jobApplicationRouter');
const jobCategoryRouter = require('./jobCategoryRouter');
const jobRouter = require('./jobRouter');
// const jobSeekerRouter = require('./jobSeekerRouter');
const jobSeekerCriteriaRouter = require('./jobSeekerCriteriaRouter')
const jobSeekerCvRouter = require('./jobSeekerCvRouter') 
const jobSeekerInfoRouter = require('./jobSeekerInfoRouter')
const jobSeekerSituationRouter = require('./jobSeekerSituationRouter') 
const recruiterRouter = require('./recruiterRouter');
const userRouter = require('./userRouter');

const router = express.Router();

//url prefix
router.use('/apply', jobApplicationRouter);
router.use('/category', jobCategoryRouter);
router.use('/job', jobRouter);
// router.use('/profile', jobSeekerRouter);
router.use('/critere', jobSeekerCriteriaRouter);
router.use('/cv', jobSeekerCvRouter);
router.use('/info', jobSeekerInfoRouter);
router.use('/situation', jobSeekerSituationRouter);
router.use('/recruiter', recruiterRouter);
router.use('/signup', userRouter);


module.exports = router; 