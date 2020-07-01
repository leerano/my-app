const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const demo = require('./route/demo');
const customer = require('./route/customer');
const countriesRouter = require('./route/countries');
const companiesRouter = require('./route/companies');

server.use(bodyParser.urlencoded({
    extended: true


}));
server.use(bodyParser.json());

server.get('/', (req, res) => {
        res.send('Hello there!');
});

server.use('/demo', demo);
server.use('/customer', customer);
server.use('/countries', countriesRouter);
server.use('/companies', companiesRouter);


console.log('Starting server on port 4300. Go to http://localhost:4300');

server.listen(4300);
