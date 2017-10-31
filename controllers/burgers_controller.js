var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burger: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burger", function(req, res) {
  burger.create([
    "name", "devoured"
  ], [
    req.body.burger_name, req.body.devoured
  ], function(result) {
    // Send back the ID of the new quote
    res.json({result});
  });
}); 

router.put("/api/burger", function(req, res) {
  console.log(req.body.data)
  burger.update(
   "devoured = true"
   , 
   "id = " + req.body.data
   , function(result) {
    res.json({result})
   })
});

module.exports = router;