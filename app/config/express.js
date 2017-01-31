// call the packages we need
var express = require("express"); // call express

var bodyParser = require("body-parser");
var load = require("express-load");
var methodOverride = require('method-override');
var expressValidator = require('express-validator');


module.exports = function() {
    // define our app using express
    var app = express();
    // configure app to use bodyParser()
    // this will let us get the data from a POST
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    app.use(methodOverride('_method'));
    app.use(expressValidator());
    app.set('view engine', 'ejs');
    app.set('views', '../app/views');
    
    load('routes').then('models').into(app);

    return app;
}