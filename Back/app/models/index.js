const Job = require('./job'); 
const JobApplications = require('./jobApplications'); 
const JobCategory = require ('./jobCategory'); 
const JobSeekerCriteria = require ('./jobSeekerCriteria');
const JobSeekerSituation = require ('./jobSeekerSituation');
const JobSeekerCv = require ('./jobSeekerCv');
const JobSeekerInfo = require ('./jobSeekerInfo'); 
// const JobSeekerDetails = require('./jobSeekerDetails'); 
const Recruiter = require('./recruiter'); 
const Users = require('./users'); 

/*JOBSEEKER USER 1N START */
// a Users has many JobSeekerDetail (n) => hasMany
// 1st argument: the model to link
// 2nd argument: configuration object
Users.hasMany(JobSeekerCriteria, {
    // the foreign key that must be found in JobSeekerDetails
    foreignKey: 'users_id',
     // the name we want to give to the jobSeekers in users if we do a join
    as:'jobSeekerCriteria'
}); 

JobSeekerCriteria.belongsTo(Users, {
    foreignKey: 'users_id',

    as: 'users'
});

Users.hasMany(JobSeekerSituation, {
    foreignKey: 'users_id',
    as: 'jobSeekerSituations',
});

JobSeekerSituation.belongsTo(Users, {
    foreignKey: 'users_id',

    as: 'users'
});

Users.hasMany(JobSeekerCv, {
    foreignKey: 'users_id',
    as: 'jobSeekerCvs',
});

JobSeekerCv.belongsTo(Users, {
    foreignKey: 'users_id',

    as: 'users'
});

Users.hasOne(JobSeekerInfo, {
    foreignKey: 'users_id',
    as: 'jobSeekerInfo',
});

/*JOBSEEKER USER 1N END */

/*JOBSEEKER JOBAPPLICATIONS 1N START */
Users.hasMany(JobApplications,{
    foreignKey: 'users_id',

    as: 'jobApplies'
}); 

JobApplications.belongsTo(Users, {
    foreignKey: 'users_id',

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

    // Set the name of the association from a "Job" instance to its "JobCategory" instances
    as: 'jobCategories', 

    //Set the name of the table used to store the many-to-many relationship
    through: '_m2m_job_cat', 

    //Set the name of the foreign key in the table used to store 
    //the many-to-many relationship, that references the "Job" table
    foreignKey: 'job_id', 

    //Set the name of the foreign key in the table used to store 
    //the many-to-many relationship, that references the "JobCategory" table
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
    JobSeekerCriteria, 
    JobSeekerSituation,
    JobSeekerCv,
    JobSeekerInfo,
    // JobSeekerDetails, 
    Recruiter,
    Users 
}