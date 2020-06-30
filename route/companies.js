const express = require ('express');
const router = express.Router();
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


module.exports = router;