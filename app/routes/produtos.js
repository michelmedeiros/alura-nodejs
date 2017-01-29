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

  app.get('/api/produtos/form', function(req, res) {
    res.render('produtos/form');
  });

  app.delete('/api/produtos', function(req, res, next) {
    var id = req.body.id;
    Livros.findById(id, function (err, livro) {
      if(err) { return next(err); }
      if(!livro) { return res.send(404); }
      livro.remove(function(err) {
        if(err) { return handleError(res, err); }
        console.log('DELETE removing ID: ' + livro._id);
        return  res.redirect('/api/produtos');
      });
    });
  });

  app.post('/api/produtos', function(req, res) {
    var livro = req.body;
    console.log('Título: ' + livro.titulo);
    console.log('Descrição: ' + livro.descricao);
    console.log('Preço: ' + livro.preco);
    Livros.create(livro, function(err, livros) {
       if(err) res.send(err);
       console.log('INSERT novo livro: ' + livro.titulo);
       return  res.redirect('/api/produtos');
    });
  });



}

