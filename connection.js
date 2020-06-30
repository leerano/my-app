const mysql = require('mysql');

const host = process.env.DB_HOST;
const database = process.env.DB_NAME;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;

const connection = mysql.createConnection({
    host,
    user,
    password,
    database
});

connection.connect();

module.exports = connection;
