require("./associations");
const restaurant = require("./restaurant/crud");
const menu = require("./menu/crud");

(async () => {
  try {
    //Restaurant CRUD
    //CREATE
    console.log(
      await restaurant.createRestaurant({
        name: "McDonalds",
        location: "Liverpool",
      })
    );
    console.log(
      await restaurant.createRestaurant({
        name: "Subway",
        location: "Manchester",
      })
    );
    //READ
    console.log(await restaurant.readRestaurant());
    console.log(await restaurant.readRestaurant({ location: "Manchester" }));
    //UPDATE
    console.log(
      await restaurant.updateRestaurant(
        { location: "Liverpool" },
        { name: "Subway" }
      )
    );
    console.log(await restaurant.readRestaurant({ location: "Liverpool" }));
    //DELETE
    console.log(await restaurant.deleteRestaurant({ name: "Subway" }));
    console.log(await restaurant.readRestaurant());

    //Menu CRUD
    //CREATE
    console.log(await menu.createMenu({ name: "Saver" }));
    console.log(await menu.createMenu({ name: "Morning" }));
    //READ
    console.log(await menu.readMenu());
    console.log(await menu.readMenu({ name: "Morning" }));
    //UPDATE
    console.log(
      await menu.updateMenu({ name: "Breakfast" }, { name: "Morning" })
    );
    console.log(await menu.readMenu({}));
    //DELETE
    console.log(await menu.deleteMenu({ name: "Morning" }));
    console.log(await menu.readMenu());

    //Associations
    console.log(await menu.addMenuToRestaurant("Saver", "McDonalds"));
    console.log(await menu.readMenu());
  } catch (error) {
    console.log(error);
  }
})();
