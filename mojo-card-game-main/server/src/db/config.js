const { Sequelize } = require('sequelize');

// Initialize Sequelize instance
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './my-database.sqlite'
});

module.exports = sequelize;