// we import our sequelize client
const sequelize = require ('../client'); 

// we add the classes of the package we need
const {Datatypes, Model} = require('sequelize'); 

class Role extends Model{}; 

// we use the static init method inherited from Model to configure our model
Role.init (
    // 1st argument: an object which describes the fields of the table
    // No need to indicate the id field, Sequelize adds it automatically
    {
        name: DataTypes.TEXT
    },
    // 2nd argument: an object with connection info
    {
        // instance of client sequelize
        sequelize,
        // we indicate the name of the table in the DB
        tableName: 'role'
    }
);

// don't forget to export 
module.exports = Role;