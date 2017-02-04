var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var methodOverride = require('method-override');

module.exports = function() {

    var app = express();
    app.use(express.static('./public'));
    app.set('view engine', 'ejs');
    app.set('views', './app/views');

    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    app.use(methodOverride('_method'));
    app.use(expressValidator());

    load('routes', {
            cwd: 'app',
            verbose: true
        })
        .then('models')
        .into(app);

    // app.use(function(req, res, next) {
    //     res.status(404).render("erros/404");
    // });

    // app.use(function(error, req, res, next) {
    //     res.status(500).render("erros/500");
    // });
    return app;
};