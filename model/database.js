const mysql = require("mysql");

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'ecom_ing21'
});

connection.connect();

exports.connection = connection;

