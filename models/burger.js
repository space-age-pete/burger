var orm = require("../config/orm.js");

orm.updateOne("devoured", "1", "burger_name", "cheese hamburger");

orm.selectAll("burgers");

function devour(burgerName) {
    orm.updateOne("devoured", "1", "burger_name", burgerName);
}

//orm.insertOne("cheeseburger", false);