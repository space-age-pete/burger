var connection = require("./connection.js");

var orm = {
    selectAll: function (tableInput) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, tableInput, function (err, data) {
            if (err) throw err;
            console.log(data);
        })
    },

    insertOne: function (tableInput, burgerInput, devouredInput) {
        var queryString = "INSERT INTO ?? (burger_name, devoured) VALUES ( ? , ? )";
        connection.query(queryString, [tableInput, burgerInput, devouredInput], function (err, data) {
            if (err) throw err;
        })
    },

    updateOne: function (colInput, colValInput, conditionInput, conditionValInput) {
        var queryString = "UPDATE burgers SET ?? = ? WHERE ?? = ?";
        connection.query(queryString, [colInput, colValInput, conditionInput, conditionValInput], function (err, data) {
            if (err) throw err;
            console.log(data);
        })
    }
}

module.exports = orm;