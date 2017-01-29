var db = require('../infra/mongoose')();
var Schema       = db.Schema;

var LivroSchema = new Schema({
    _id: String,	
    titulo: String,
    descricao: String,
    preco: String
});

module.exports = db.model('Livros', LivroSchema);
