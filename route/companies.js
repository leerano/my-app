const express = require ('express');
const router = express.Router();
const connection = mysql.createConnection({

    host: 'localhost',
    user: 'my_user',
    password: 'password1234',
    database: 'classicmodels'
});

connection.connect();


router.post('/', (req, res) => {
    const {customerName, city, state, postalCode, country} = req.body; 
    const sql = 'INSERT INTO companies (customerName, city, state, postalCode, country) VALUES (?, ?, ?, ?, ?)';
    const data = [customerName, city, state, postalCode,country];
    
    connection.query(sql, data, (error, results) => {
        if(error) {
            console.log(error);
            res.status(500).send(error);
        }
        res.send(result);
        });

    
    });

module.exports = router;