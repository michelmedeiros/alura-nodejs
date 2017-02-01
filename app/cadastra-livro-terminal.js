var http = require('http');
var configuracoes = {
	hostname: 'localhost',
	port : 8000,
	path : '/api/produtos',
	method : 'post',
             headers: {
             	'Accept' : 'application/json',
             	'Content-type' : 'application/json'
             }
};

var client = http.request(configuracoes, function(res) {
	console.log('HTTP Response: ' + res.statusCode);
	res.on('data', function(body) {
		console.log('Reposta: ' + body);
	})
});

var produto = {
	titulo: 'mais sobre nodejs',
	descricao: 'node, js um pouco sobre http',
	preco: 100
};

client.end(JSON.stringify(produto));