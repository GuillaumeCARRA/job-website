const Job = require('./job'); 
const JobApplications = require('./jobApplications'); 
const JobCategory = require ('./jobCategory'); 
const JobSeekerDetails = require('./jobSeekerDetails'); 
const Recruiter = require('./recruiter'); 
const Users = require('./users'); 

Users.hasMany(JobSeekerDetails, {
    foreignKey: 'users_id',

    as:'jobSeekers'
}); 

JobSeekerDetails.belongsTo(Users, {
    foreignKey: 'users_id',

    as: 'users'
});

JobSeekerDetails.hasMany(JobApplications,{
    foreignKey: 'job_seeker_details_id',

    as: 'jobApplies'
}); 

JobApplications.belongsTo(JobSeekerDetails, {
    foreignKey: 'job_seeker_details_id',

    as:'jobSeekers'
});

Job.hasMany(JobApplications,{
    foreignKey: 'job_id', 

    as: 'jobApplies'
});

JobApplications.belongsTo(Job, {
    foreignKey: 'job_id',

    as:'jobs'
});