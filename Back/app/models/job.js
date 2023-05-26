// we import our sequelize client
const sequelize = require ('../client'); 

// we add the classes of the package we need
const {DataTypes, Model} = require('sequelize'); 

class Job extends Model{}; 

// we use the static init method inherited from Model to configure our model
Job.init (
    // 1st argument: an object which describes the fields of the table
    // No need to indicate the id field, Sequelize adds it automatically
    {
       job_title: DataTypes.TEXT,
       job_description: DataTypes.TEXT,
       job_location: DataTypes.TEXT,
       date_published: DataTypes.DATE,
       job_start_date: DataTypes.DATE,
       contract_status: DataTypes.TEXT,
       recruiter_id: DataTypes.INTEGER
    //    job_category_id: DataTypes.INTEGER

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