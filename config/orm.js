var connection = require("./connection.js");

var orm = {
    selectAll: function (tableInput, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, tableInput, function (err, data) {
            if (err) throw err;
            console.log(data);
            cb(data);
        })
    },

    insertOne: function (tableInput, columnInputs, valueInputs, cb) {
        //var queryString = "INSERT INTO ?? (burger_name, devoured) VALUES ( ? , ? )";
        var qmarks = [];
        valueInputs.forEach(element => {
            qmarks.push("?");
        });
        var queryString = `INSERT INTO ${tableInput} (${columnInputs.toString()}) VALUES (${qmarks.toString()})`;

        // console.log(queryString);
        // console.log

        connection.query(queryString, valueInputs, function (err, data) {
            if (err) throw err;
            console.log(data);
            cb(data);
        })
    },

    updateOne: function (tableInput, colInput, colValInput, conditionInput, conditionValInput, cb) {
        var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        console.log(queryString);
        console.log(tableInput, colInput, colValInput, conditionInput, conditionValInput)
        connection.query(queryString, [tableInput, colInput, colValInput, conditionInput, conditionValInput], function (err, data) {
            if (err) throw err;
            console.log(data);
            cb(data);
        })
    }
}

module.exports = orm;