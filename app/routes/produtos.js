// module.exports = function(app) {
//   app.get('/produtos', function(req, res) {
//     console.log('listando produtos...');
//   	res.render("aula1/lista")
//   });
// }

module.exports = function(app) {
    app.get('/produtos', function(req, res) {
      var mongoose = require('mongoose');
      mongoose.connect('mongodb://localhost/nodejs');
      var livrosSchema = new mongoose.Schema({
          titulo: String,
          descricao: String,
          preco: String
      });

      var livros = mongoose.model('livros', livrosSchema);

      livros.find(function (err, todos) {
        if (err) return console.error(err);
        console.log(todos);
        res.send(todos);
      });
      mongoose.connection.close();
    });
}
