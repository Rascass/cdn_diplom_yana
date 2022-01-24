var express = require("express");
var router = express.Router();
const prices = require("../controllers/prices.controller")
/* GET users listing. */
router.get("/", prices);

module.exports = router;
