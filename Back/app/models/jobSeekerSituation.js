// we import our sequelize client
const sequelize = require ('../client'); 

// we add the classes of the package we need
const {DataTypes, Model} = require('sequelize'); 

class JobSeekerSituation extends Model{}; 

// we use the static init method inherited from Model to configure our model
JobSeekerSituation.init (
    // 1st argument: an object which describes the fields of the table
    // No need to indicate the id field, Sequelize adds it automatically
    {
        current_job_title: DataTypes.TEXT, 
        availability_job: DataTypes.TEXT, 
        skill_level: DataTypes.TEXT, 
        degree_level: DataTypes.TEXT, 
        annual_salary: DataTypes.INTEGER, 
        current_situation: DataTypes.TEXT, 
        users_id: DataTypes.INTEGER
    },
    // 2nd argument: an object with connection info
    {
        // instance of client sequelize
        sequelize,
        // we indicate the name of the table in the DB
        tableName: 'job_seeker_current_situation'
    }
);

// don't forget to export 
module.exports = JobSeekerSituation;