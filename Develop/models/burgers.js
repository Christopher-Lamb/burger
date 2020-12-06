const orm = require("../config/orm.js");

let burger = {
  //Select burgers tbl
  selectALL: function (cb) {
    orm.selectOne("burgers", function (res) {
      cb(res);
    });
  },
  //Insert a value into tbl burger col burger_name
  insertOne: function (val, cb) {
    orm.insertOne("burgers", "burger_name", val, function (res) {
      cb(res);
    });
  },
  //Update the boolean of a burger
  updateOne: function (condition, cb) {
    orm.updateOne(
      "burgers",
      "devoured=1",
      condition,
      function (res) {
        cb(res);
      }
    );
  },
  deleteOne: function (val, cb) {
    orm.deleteOne("burgers", `burger_name="${val}"`, function (res) {
      cb(res);
    });
  },
};
module.exports = burger;
