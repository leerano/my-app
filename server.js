const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const demo = require('./route/demo');
const companies = require('./route/companies');

server.use(bodyParser.urlencoded({
    extended: true


}));
server.use(bodyParser.json());


server.use('/demo', demo);
server.use('/companies', companies);

server.listen(4300);
