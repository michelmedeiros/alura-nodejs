var Livros = require('../models/livro');

module.exports = function(app) {
  app.get('/api/produtos', function(req, res) {
    Livros.find(function(err, livros) {
      if (err)
        res.send(err);
      //res.json(bears);
      res.render('produtos/lista', {
        lista: livros
      });
    });
  });

  app.get('/api/produtos/remove/:id', function(req, res, next) {
    Livros.findById(req.params.id, function (err, livro) {
      if(err) { return next(err); }
      if(!livro) { return res.send(404); }
      livro.remove(function(err) {
        if(err) { return handleError(res, err); }
        console.log('DELETE removing ID: ' + livro._id);
        return  res.redirect('/api/produtos');
      });
    });
  });
}

