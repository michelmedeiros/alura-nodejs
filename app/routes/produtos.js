var Livros = require('../models/livro');

module.exports = function(app) {
  app.get('/api/produtos', function(req, res, next) {
    Livros.find(function(err, livros) {
      if (err){
        return next(err);
      }
      res.format({
        html: function() {
          res.render('produtos/lista', {
            lista: livros
          });
        },
        json: function() {
          res.json(livros);
        }
      });
    });
  });

  app.get('/api/produtos/form', function(req, res) {
    res.render('produtos/form', {
      errosValidacao: {},
      livro: {}
    });
  });

  app.delete('/api/produtos', function(req, res, next) {
    var id = req.body.id;
    Livros.findById(id, function(err, livro) {
      if (err) {
        return next(err);
      }
      if (!livro) {
        return res.send(404);
      }
      livro.remove(function(err) {
        if (err) {
          return handleError(res, err);
        }
        console.log('DELETE removing ID: ' + livro._id);
        return res.redirect('/api/produtos');
      });
    });
  });

  app.post('/api/produtos', function(req, res) {
    var livro = req.body;
    req.assert('titulo', 'Título é obrigatório').notEmpty();
    req.assert('preco', 'Preço é um número').isFloat();
    var erros = req.validationErrors();
    if (erros) {
      console.log('Erros encontrados no cadastro: ' + erros[0].param + ' - ' + erros[0].msg);
      res.format({
        html: function() {
          res.status(400).render('produtos/form', {
            errosValidacao: erros,
            livro: livro
          });
        },
        json: function() {
          res.status(400).json(erros);
        }
      });
    }
    console.log('Título: ' + livro.titulo);
    console.log('Descrição: ' + livro.descricao);
    console.log('Preço: ' + livro.preco);
    Livros.create(livro, function(err, livros) {
      if (err) res.send(err);
      console.log('INSERT novo livro: ' + livro.titulo);
      return res.redirect('/api/produtos');
    });
  });



}
