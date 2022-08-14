const { DataTypes } = require("sequelize");
const { sequelize } = require("../db");

const Menu = sequelize.define("Menu", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

module.exports = Menu;
