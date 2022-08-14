require("dotenv").config();
const { Sequelize } = require("sequelize");

exports.sequelize = new Sequelize({
  dialect: process.env.DIALECT,
  storage: process.env.STORAGE,
});
