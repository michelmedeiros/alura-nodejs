var Livros = require('../models/livro');

module.exports = function(app) {

  app.get('/api', function(req, res, next) {
    Livros.find(function(err, livros) {
      if (err) {
        return next(err);
      }
      res.format({
        html: function() {
          res.render('home/index', {
            livros: livros
          });
        },
        json: function() {
          res.json(livros);
        }
      });
    });
  });
}