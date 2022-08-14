const { sequelize } = require("../db");
const Restaurant = require("../restaurant/model");
const Menu = require("../menu/model");

(async () => {
  Menu.belongsTo(Restaurant);
  Restaurant.hasMany(Menu);
  await sequelize.sync({ alter: true });
})();
