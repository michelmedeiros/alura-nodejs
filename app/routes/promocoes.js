var Livros = require('../models/livro');

module.exports = function(app) {
    app.get("/promocoes/form", function(req, res, next) {
        Livros.find(function(err, livros) {
            if (err) {
                return next(err);
            }
            res.render('promocoes/form', {
                livros: livros
            });
        });
    });
    app.post("/promocoes", function(req, res) {
        var promocao = req.body;
        app.get('io').emit('novaPromocao', promocao);
        res.redirect("/");
    });
}