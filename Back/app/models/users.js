// we import our sequelize client
const sequelize = require ('../client'); 

// we add the classes of the package we need
const {Datatypes, Model} = require('sequelize'); 

class Users extends Model{}; 

// we use the static init method inherited from Model to configure our model
Users.init (
    // 1st argument: an object which describes the fields of the table
    // No need to indicate the id field, Sequelize adds it automatically
    {
       first_name: Datatypes.TEXT,
       last_name: Datatypes.TEXT,
       email: Datatypes.TEXT,
       password: Datatypes.TEXT,
       role_id: Datatypes.INTEGER
    },
    // 2nd argument: an object with connection info
    {
        // instance of client sequelize
        sequelize,
        // we indicate the name of the table in the DB
        tableName: 'users'
    }
);

// don't forget to export 
module.exports = Users;