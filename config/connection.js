const mysql = require("mysql");

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
    var connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "root",
        database: "burgers_db",
        socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock"
    });
};

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
})

module.exports = connection;