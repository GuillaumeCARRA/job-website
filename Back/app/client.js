// we import the class we need
const {Sequelize} = require('sequelize');

// we create an instance of the class by configuring it with our DATABASE_URL variable
const sequelize = new Sequelize(
    process.env.DATABASE_URL, {
        define: {
            // allow field names in snake_case
            underscored: true,

            // we add a config property to activate the automatic addition of 2 fields to our models:
            // - createdAt
            // - updatedAt
            timestamps: false,  
        }
     
    }
);

//Don't forget to exports the client, to use it in our models
module.exports = sequelize;