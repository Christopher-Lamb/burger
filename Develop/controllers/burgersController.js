const express = require("express");
const router = express.Router();

const burger = require("../models/burgers.js");

router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

//Create Routes With Logic
router.get("/burgers", function (req, res) {
  burger.selectALL(function (data) {
    res.json({ burgers: data });
  });
});

router.post("/burgers", function (req, res) {
  burger.insertOne(req.body.burger_name, function (result) {
    //Send back id of new burger
    res.json({ id: result.id });
  });
});

router.put("/burgers/:id", function (req, res) {
  let condition = `id = ${req.params.id}`;
  burger.updateOne({ devoured: 1 }, condition, function (result) {
    if (result == 0) {
      return res.status(404).end();
    } else {
      res.join({ id: req.params.id });
    }
  });
});

router.delete("/burgers/:id", function (req, res) {
  let condition = `id = ${req.params.id}`;

  burger.deleteOne(condition, function (result) {
    if (result.affectedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;
