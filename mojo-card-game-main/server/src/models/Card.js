const sequelize = require('../db/config');
const { DataTypes } = require('sequelize');

const Card = sequelize.define('card', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    mojo: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    stamina: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    imgUrl: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Card;