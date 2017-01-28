var app = require('./config/express')();
var mongoose = require('./config/mongoose')();
var rotaProdutos  = require('./routes/produtos')(app);

app.listen(8000, function() {
	console.log("Servidor em execução...")
});
