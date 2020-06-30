const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const demo = require('./route/demo');
const port = process.env.PORT;
const companies = require('./route/companies');
const customerRouter = require('./route/customers');
const countriesRouter = require('./route/countries');

server.use(bodyParser.urlencoded({
    extended: true


}));
server.use(bodyParser.json());


server.use('/demo', demo);
server.use('/companies', companies);
server.use('/customers', customerRouter);
server.use('/countries', countriesRouter);

console.log('Starting server on port ' + port + '. Go to http://localhost:' + port);

server.listen(port);
