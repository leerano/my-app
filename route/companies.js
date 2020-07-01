const express = require ('express');
const router = express.Router();
<<<<<<< HEAD
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
=======
const connection = require('../connection');

router.get('/', (req, res) => {
    const sql = 'SELECT * FROM customers ORDER BY customerNumber LIMIT ?, ?';
    const pageNumber = parseInt(req.params.pageNumber) || 1;
    const pageSize = parseInt(req.params.pageSize) || 10;
    const firstRecord = pasrseInt()

    connection.query(sql, [firstRecord, pageSize], (error, results) =>{
        if (error) {
                console.log(error);

        }
        res.send(results);
    });
});

>>>>>>> 6ec83bd242f692efeb20a0f7abcf76111d77b164

module.exports = router;