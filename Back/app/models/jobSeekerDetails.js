// we import our sequelize client
const sequelize = require ('../client'); 

// we add the classes of the package we need
const {DataTypes, Model} = require('sequelize'); 

class JobSeekerDetails extends Model{}; 

// we use the static init method inherited from Model to configure our model
JobSeekerDetails.init (
    // 1st argument: an object which describes the fields of the table
    // No need to indicate the id field, Sequelize adds it automatically
    {
       first_name: DataTypes.TEXT,
       last_name: DataTypes.TEXT,
       date_of_birth: DataTypes.DATE, 
       address: DataTypes.TEXT,
       zip_code: DataTypes.TEXT,
       district: DataTypes.TEXT,
       country: DataTypes.TEXT,
       email: DataTypes.TEXT,
       password: DataTypes.TEXT,
       driving_licence: DataTypes.TEXT,
       phone_number: DataTypes.TEXT,
       current_job_title: DataTypes.TEXT,
       is_current_job: DataTypes.TEXT,
       availability_job: DataTypes.TEXT,
       skill_level: DataTypes.TEXT,
       degree_level: DataTypes.TEXT,
       degree_name: DataTypes.TEXT,
       annual_salary: DataTypes.INTEGER,
       worker_statuts: DataTypes.TEXT,
       job_title_search: DataTypes.TEXT,
       job_location_search: DataTypes.TEXT,
       job_contract_search: DataTypes.TEXT,
       role_id: DataTypes.INTEGER
    },
    // 2nd argument: an object with connection info
    {
        // instance of client sequelize
        sequelize,
        // we indicate the name of the table in the DB
        tableName: 'job_seeker_details'
    }
);

// don't forget to export 
module.exports = JobSeekerDetails;