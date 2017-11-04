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
  burger.create([
    "name", "devoured"
  ], [
    req.body.burger_name, false
  ], function(result) {
    // Send back the ID of the new quote
    res.json({result});
  });
}); 

router.put("/burgers/update", function(req, res) {
  burger.update(req.body.burger_id, function(result) {
    console.log(result);
    res.redirect("/");
  });
});
 
module.exports = router;