var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();
var house = require('./routes/housing');
var rent = require('./routes/renting');

mongoose.connect('mongodb://localhost:27017/realestate');

app.use(bodyParser.json());
app.use(express.static('public'));

app.use('/housing', house);
app.use('/renting', rent);

app.listen(5000, function(){
    console.log('serve it up', 5000);
});