// we import our sequelize client
const sequelize = require ('../client'); 

// we add the classes of the package we need
const {Datatypes, Model} = require('sequelize'); 

class JobApplications extends Model{}; 

// we use the static init method inherited from Model to configure our model
JobApplications.init (
    // 1st argument: an object which describes the fields of the table
    // No need to indicate the id field, Sequelize adds it automatically
    {
       date_applied: Datatypes.DATE,
       job_id: Datatypes.INTEGER,
       job_seeker_details_id: Datatypes.INTEGER
    },
    // 2nd argument: an object with connection info
    {
        // instance of client sequelize
        sequelize,
        // we indicate the name of the table in the DB
        tableName: 'job_applications'
    }
);

// don't forget to export 
module.exports = JobApplications;