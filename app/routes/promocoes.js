var Livros = require('../models/livro');

module.exports = function(app) {
    app.get("/api/promocoes", function(req, res) {
        Livros.find(function(err, livros) {
            if (err) {
                return next(err);
            }
            res.render('promocoes/form', {
                livros: livros
                    // errosValidacao: {}
            });
        });
    });

    // app.get('/api/promocoes/form', function(req, res) {
    //     res.render('promocoes/form', {
    //         errosValidacao: {},
    //         livros: {}
    //     });
    // });

    app.post('/api/promocoes', function(req, res) {
        var promocao = req.body;
        req.assert('mensagem', 'Mensagem é obrigatória').notEmpty();
        var erros = req.validationErrors();
        var livros = [];
        if (erros) {
            console.log('Erros encontrados no cadastro: ' + erros[0].param + ' - ' + erros[0].msg);
            // res.redirect('/api/promocoes');
            // return res.status(400).render('promocoes/form', {
            //     errosValidacao: erros,
            //     promocao: promocao,
            //     livros: []
            // });
        }
        // Promocoes.create(promocao, function(err, livros) {
        //     if (err) res.send(err);
        // console.log('INSERT nova promocao: ' + promocao.mensagem);
        // return res.redirect('/api/promocoes/form');
        // });
    });

}