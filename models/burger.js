var orm = require("../config/orm.js");

//orm.updateOne("devoured", "1", "burger_name", "cheese hamburger");

//orm.insertOne("cheeseburger", false);

var burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (data) {
            cb(data);
        });
    },
    updateOne: function (colInput, colValInput, conditionInput, conditionValInput, cb) {
        orm.updateOne("burgers", colInput, colValInput, conditionInput, conditionValInput, function (data) {
            cb(data);
        })
    },
    insertOne: function (columnInputs, valueInputs, cb) {
        orm.insertOne("burgers", columnInputs, valueInputs, function (res) {
            cb(res);
        })
    }
}

// var tableInput = "burgers";
// var columnInputs = ["burger_name", "devoured"];
// var valueInputs = ["good burger", false];

// valueInputs.forEach(element => {
//     element = "\"" + element + "\"";
// });
// console.log(`INSERT INTO ${tableInput} (${columnInputs.toString()}) VALUES (${valueInputs.join(", ")})`);
module.exports = burger;