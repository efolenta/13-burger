// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb) {
    orm.selectAll(function(result) {
      cb(result);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(burger_name, cb) {
    orm.insertOne("burgers", burger_name, function(res) {
      cb(res);
    });
  },
  updateOne: function(id, devoured, cb) {
    orm.updateOne("burgers", id, devoured, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
