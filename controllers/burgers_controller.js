var express = require("express");
var app = express();
var PORT = 3000;

var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        res.render("index", { results: data });
        console.log(data);
    })
})

router.put("/api/burgers/:id", function (req, res) {
    // var condition = `id = ${req.params.id}`;

    //console.log(req.params.id);

    burger.updateOne("devoured", "1", "id", req.params.id, function (data) {
        res.status(200).end();
    })
})

router.post("/api/burgers", function (req, res) {
    burger.insertOne(["burger_name", "devoured"], [req.body.name, false], function () {
        res.status(200).end();
    })
})

module.exports = router;