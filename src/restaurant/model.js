const { DataTypes } = require("sequelize");
const { sequelize } = require("../db");

const Restaurant = sequelize.define("Restaurant", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Restaurant;
