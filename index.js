const port = process.env.PORT || 3000;
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('./config/express');
var mongoose = require('./config/mongoose');

var db = mongoose();

var app = express();


app.listen(port);

console.log('server running at '+ port);

module.exports = app;
