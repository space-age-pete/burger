var express = require("express");
var app = express();
var PORT = 3000;

app.use(express.static("public"));

var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});