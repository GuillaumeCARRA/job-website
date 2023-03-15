// we import our sequelize client
const sequelize = require ('../client'); 

// we add the classes of the package we need
const {Datatypes, Model} = require('sequelize'); 

class Job extends Model{}; 

// we use the static init method inherited from Model to configure our model
Job.init (
    // 1st argument: an object which describes the fields of the table
    // No need to indicate the id field, Sequelize adds it automatically
    {
       job_title: Datatypes.TEXT,
       job_description: Datatypes.TEXT,
       job_location: Datatypes.TEXT,
       date_published: Datatypes.DATE,
       job_start_date: Datatypes.DATE,
       contract_status: Datatypes.TEXT,
       recruiter_id: Datatypes.INTEGER,
       job_category_id: Datatypes.INTEGER

    },
    // 2nd argument: an object with connection info
    {
        // instance of client sequelize
        sequelize,
        // we indicate the name of the table in the DB
        tableName: 'job'
    }
);

// don't forget to export 
module.exports = Job;