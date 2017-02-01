var http = require('http');
var assert = require('assert');



describe('ProdutosController',function(){

    beforeEach(function(done){
      var Livros = require('../app/models/livro');
      Livros.remove(function(err) {
        if (err) {
          console.log('ERROR removing livros:' + err);
        }
        console.log('DELETE removing livros:');
        done();
      });
    });

    it('listagem json',function(){
        var configuracoes = {
            hostname: 'localhost',
            port:8000,
            path:'/api/produtos',
            headers: {
                'Accept' : 'application/json'
            }
        };
        http.get(configuracoes,function(res){
            assert.equal(res.statusCode == 200);
            assert.equal(res.headers['content-type'],'application/json;charset=utf-8');
            done();
        });
    });

    // it('# cadastro de novo produto com dados invalidos', function(done) {
    //     http.post('/api/produtos')
    //         .send({
    //             titulo: "titulo",
    //             descricao: "novo livro",
    //             preco: 20.50
    //         })
    //         .expect(200, done);
    // });
});
