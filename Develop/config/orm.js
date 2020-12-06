const connection = require("./connection.js");

const orm = {
  selectAll: function (tableInput, cb) {
    let queryString = `SELECT * FROM ${tableInput};`;
    connection.query(queryString, function (err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  insertOne: function (table, col, val, cb) {
    let queryString = `INSERT INTO ${table} (${col}) VALUES(??);`;
    connection.query(queryString, val, function (err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  updateOne: function (table, objColVal, condition, cb) {
    let queryString = `UPDATE ${table} SET ${objColVal} WHERE ${condition}`;
    connection.query(queryString, function (err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  deleteOne: function (table, condition, cb) {
    let queryString = `DELETE FROM ${table} WHERE ${condition}`;
    connection.query(queryString, function (err, result) {
      if (err) throw err;
      cb(result);
    });
  },
};

module.exports = orm;
