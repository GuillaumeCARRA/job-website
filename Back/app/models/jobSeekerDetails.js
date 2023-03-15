// we import our sequelize client
const sequelize = require ('../client'); 

// we add the classes of the package we need
const {Datatypes, Model} = require('sequelize'); 

class JobSeekerDetails extends Model{}; 

// we use the static init method inherited from Model to configure our model
JobSeekerDetails.init (
    // 1st argument: an object which describes the fields of the table
    // No need to indicate the id field, Sequelize adds it automatically
    {
       first_name: Datatypes.TEXT,
       last_name: Datatypes.TEXT,
       date_of_birth: Datatypes.DATE, 
       address: Datatypes.TEXT,
       zip_code: Datatypes.TEXT,
       district: Datatypes.TEXT,
       country: Datatypes.TEXT,
       email: Datatypes.TEXT,
       password: Datatypes.TEXT,
       driving_licence: Datatypes.TEXT,
       phone_number: Datatypes.TEXT,
       current_job_title: Datatypes.TEXT,
       is_current_job: Datatypes.TEXT,
       availability_job: Datatypes.TEXT,
       skill_level: Datatypes.TEXT,
       degree_level: Datatypes.TEXT,
       degree_name: Datatypes.TEXT,
       annual_salary: Datatypes.INTEGER,
       worker_statuts: Datatypes.TEXT,
       job_title_search: Datatypes.TEXT,
       job_location_search: Datatypes.TEXT,
       job_contract_search: Datatypes.TEXT,
       role_id: Datatypes.INTEGER
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