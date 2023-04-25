// we import our sequelize client
const sequelize = require ('../client'); 

// we add the classes of the package we need
const {DataTypes, Model} = require('sequelize'); 

class Recruiter extends Model{}; 

// we use the static init method inherited from Model to configure our model
Recruiter.init (
    // 1st argument: an object which describes the fields of the table
    // No need to indicate the id field, Sequelize adds it automatically
    {
       first_name: DataTypes.TEXT,
       last_name: DataTypes.TEXT,
       street_address: DataTypes.TEXT,
       zip_code: DataTypes.TEXT,
       status_company: DataTypes.TEXT,
       company_name: DataTypes.TEXT,
       email: DataTypes.TEXT,
       phone_number: DataTypes.TEXT,
       password: DataTypes.TEXT,
       role_id: DataTypes.INTEGER
    },
    // 2nd argument: an object with connection info
    {
        // instance of client sequelize
        sequelize,
        // we indicate the name of the table in the DB
        tableName: 'recruiter'
    }
);

// don't forget to export 
module.exports = Recruiter;