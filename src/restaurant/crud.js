const Restaurant = require("./model");

exports.createRestaurant = async (restaurantObj) => {
  try {
    return await Restaurant.create(restaurantObj);
  } catch (error) {
    return error;
  }
};

exports.readRestaurant = async (filterObj = {}) => {
  try {
    return await Restaurant.findAll({ where: filterObj });
  } catch (error) {
    return error;
  }
};

exports.updateRestaurant = async (updateObj, filterObj) => {
  try {
    return await Restaurant.update(updateObj, { where: filterObj });
  } catch (error) {
    return error;
  }
};

exports.deleteRestaurant = async (filterObj) => {
  try {
    return await Restaurant.destroy({ where: filterObj });
  } catch (error) {
    return error;
  }
};
