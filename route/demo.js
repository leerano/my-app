const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.send('This is a demo of express!');
});

router.post('/', (req, res) => {
    let total = req.body.base + req.body.bonuses;
    let tax = total * .3
    res.send({ total, tax });
});


module.exports = router;

