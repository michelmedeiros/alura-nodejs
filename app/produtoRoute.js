module.exports = function(app) {
  var Livros = require('../models/livro');
  var express    = require('express');
  var router = express.Router();
  // middleware to use for all requests
  router.use(function(req, res, next) {
      // do logging
      console.log('Something is happening.');
      next(); // make sure we go to the next routes and don't stop here
  });
  // test route to make sure everything is working (accessed at GET http://localhost:8000/api)
  router.get('/', function(req, res) {
      res.json({ message: 'hooray! welcome to our api!' });
  });

  router.route('/produtos')
    // get all the produtos (accessed at GET http://localhost:8000/api/livros)
    .get(function(req, res) {
        Livros.find(function(err, livros) {
            if (err)
                res.send(err);

            //res.json(bears);
            res.render('produtos/lista', {lista:livros});
      });
  });

  // REGISTER OUR ROUTES -------------------------------
  // all of our routes will be prefixed with /api
  app.use('/api', router);
}
