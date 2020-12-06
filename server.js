const express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static("./Develop/public"));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Import routes and give the server access to them.
var routes = require("./Develop/controllers/burgersController");

app.use(routes);

app.listen(PORT, function () {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
