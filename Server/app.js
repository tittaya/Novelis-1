var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var neo4j = require('neo4j-driver').v1;

var app = express();

//view Engine
app.set('views',path.join(__dirname, 'views'));
app.set('views engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

var driver = neo4j.driver('bolt://localhost:7687', neo4j.auth('neo4j', 'mypassword'));
var session = driver.session();

app.get('/', function(req, res){
    res.send('It works');
})

app.listen(4000, () => {
    console.log('now listening for requests on port 4000');
});

module.exports = app;