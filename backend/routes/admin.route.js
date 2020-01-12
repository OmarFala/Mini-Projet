let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();

let adminSchema = require("../models/admin");

router.route("/").get((req, res) => {
  adminSchema.find((error, data) => {
    if (error) {
      console.log("hrrrrrrrrr");
    } else {
      res.json(data);
    }
  });
});

module.exports = router;
