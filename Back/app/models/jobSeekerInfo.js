// we import our sequelize client
const sequelize = require ('../client'); 

// we add the classes of the package we need
const {DataTypes, Model} = require('sequelize'); 

class JobSeekerInfo extends Model{}; 

// we use the static init method inherited from Model to configure our model
JobSeekerInfo.init (
    // 1st argument: an object which describes the fields of the table
    // No need to indicate the id field, Sequelize adds it automatically
    {
        district: DataTypes.TEXT , 
        country: DataTypes.TEXT ,
        phone_number: DataTypes.TEXT, 
        users_id: DataTypes.INTEGER
    },
    // 2nd argument: an object with connection info
    {
        // instance of client sequelize
        sequelize,
        // we indicate the name of the table in the DB
        tableName: 'job_seeker_personal_info'
    }
);

// don't forget to export 
module.exports = JobSeekerInfo;