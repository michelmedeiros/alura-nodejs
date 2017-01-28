var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var LivroSchema = new Schema({
    titulo: String,
    descricao: String,
    preco: String
});

module.exports = mongoose.model('Livros', LivroSchema);
