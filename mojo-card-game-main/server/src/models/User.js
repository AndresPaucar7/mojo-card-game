const { DataTypes } = require('sequelize');
const sequelize = require('../db/config');

const User = sequelize.define('User', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = User;