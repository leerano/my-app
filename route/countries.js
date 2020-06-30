const express = require ('express');
const router = express.Router();
const connection = require ('../connection');

router.post('/', (req, res) => {
    const {customerName, city, state, postalCode, country} = req.body;

    const sql = 'INSERT INTO countries (customerName, city, state, postalCode, country) VALUES (?, ?, ?, ?, ?)';
    const data = [customerName, city, state, postalCode,country];
    connection.query(sql, data, (error, results) => {
        if(error) {
            console.log(error);
            res.status(500).send(error);
        }
        connection.query('SELECT * FROM countries  WHERE id=?', [result.insertId], (err,country) => {
                res.send(country[0]);
        });

    
    });

});

module.exports = router;