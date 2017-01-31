var express = require('../app/config/express')();
var request = require('supertest')(express);

describe('ProdutosController', function() {
    it('listagem json', function(done) {
        request.get('/api/produtos')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });

    it('# cadastro de novo produto com dados invalidos', function(done) {
        request.post('/api/produtos')
            .send({
                titulo: "",
                descricao: "novo livro"
            })
            .expect(400, done);
    });

    it('# cadastro de novo produto com dados invalidos', function(done) {
        request.post('/api/produtos')
            .send({
                titulo: "titulo",
                descricao: "novo livro",
                preco: 20.50
            })
            .expect(200, done);
    });
});