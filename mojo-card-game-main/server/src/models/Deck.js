const sequelize = require('../db/config');
const { DataTypes } = require('sequelize');

const Deck = sequelize.define({
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    xp: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = Deck;