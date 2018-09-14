var express = require("express");
var app = express();
var PORT = 3000;

var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function (req, res) {

})

module.exports = router;