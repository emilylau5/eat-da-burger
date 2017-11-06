var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
  res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burger: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/create/burger", function(req, res) {
  burger.create(
    req.body.burger_name
  , function(result) {
    // Send back the ID of the new quote
    res.json(true);
  });
}); 

router.put("/update/burger", function(req, res) {
  console.log(req.body)
  burger.update(req.body.id, function(result) {
    // console.log(result);
    res.json(true);
  });
});
 
module.exports = router;