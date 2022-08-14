const Restaurant = require("../restaurant/model");
const Menu = require("./model");

exports.createMenu = async (menuObj) => {
  try {
    return await Menu.create(menuObj);
  } catch (error) {
    return error;
  }
};

exports.addMenuToRestaurant = async (menuName, restaurantName) => {
  try {
    const targetRestaurant = await Restaurant.findOne({
      where: { name: restaurantName },
    });
    const targetMenu = await Menu.findOne({ where: { name: menuName } });
    return await targetRestaurant.addMenu(targetMenu);
  } catch (error) {
    return error;
  }
};

exports.readMenu = async (filterObj = {}) => {
  try {
    return await Menu.findAll({ where: filterObj });
  } catch (error) {
    return error;
  }
};

exports.updateMenu = async (updateObj, filterObj) => {
  try {
    return await Menu.update(updateObj, { where: filterObj });
  } catch (error) {
    return error;
  }
};

exports.deleteMenu = async (filterObj) => {
  try {
    return await Menu.destroy({ where: filterObj });
  } catch (error) {
    return error;
  }
};
