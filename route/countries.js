const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const connection = mysql.createConnection({

    host: 'localhost',
    user: 'my_user',
    password: 'password1234',
    database: 'classicmodels'
});

connection.connect();

router.get('/', (req, res) => {
    connection.query('SELECT DISTINCT country FROM customers', (error, results) => {
        
        res.send(results);

        });
    });

module.exports = router;