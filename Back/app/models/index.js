const Job = require('./job'); 
const JobApplications = require('./jobApplications'); 
const JobCategory = require ('./jobCategory'); 
const JobSeekerDetails = require('./jobSeekerDetails'); 
const Recruiter = require('./recruiter'); 
const Users = require('./users'); 

/*JOBSEEKER USER 1N START */
Users.hasMany(JobSeekerDetails, {
    foreignKey: 'users_id',

    as:'jobSeekers'
}); 

JobSeekerDetails.belongsTo(Users, {
    foreignKey: 'users_id',

    as: 'users'
});
/*JOBSEEKER USER 1N END */

/*JOBSEEKER JOBAPPLICATIONS 1N START */
JobSeekerDetails.hasMany(JobApplications,{
    foreignKey: 'job_seeker_details_id',

    as: 'jobApplies'
}); 

JobApplications.belongsTo(JobSeekerDetails, {
    foreignKey: 'job_seeker_details_id',

    as:'jobSeekers'
});
/*JOBSEEKER JOBAPPLICATIONS 1N END */

/*JOB JOBAPPLICATIONS 1N START */
Job.hasMany(JobApplications,{
    foreignKey: 'job_id', 

    as: 'jobApplies'
});

JobApplications.belongsTo(Job, {
    foreignKey: 'job_id',

    as: 'jobs'
});
/*JOB JOBAPPLICATIONS 1N END */


/* RECRUITER JOB 1N START*/ 
Recruiter.hasMany(Job,{
    foreignKey: 'recruiter_id',

    as: 'jobs'
});

Job.belongsTo(Recruiter, {
    foreignKey: 'recruiter_id',

    as: 'recruiters'
});
/* RECRUITER JOB 1N END*/ 

/*MANY TO MANY START*/
Job.belongsToMany(JobCategory,{
    as: 'jobCategories', 

    through: '_m2m_job_cat', 

    foreignKey: 'job_id', 

    otherKey: 'job_category_id'
}); 


JobCategory.belongsToMany(Job,{
    as: 'jobs', 

    through: '_m2m_job_cat', 

    foreignKey: 'job_category_id', 

    otherKey: 'job_id'
}); 
/*MANY TO MANY END*/

module.exports = {
    Job, 
    JobApplications,
    JobCategory, 
    JobSeekerDetails, 
    Recruiter,
    Users 
}