var db = require('../infra/mongoose')();
var Schema = db.Schema;

var LivroSchema = new Schema({
    titulo: String,
    descricao: String,
    preco: Number
});

module.exports = db.model('Livros', LivroSchema);