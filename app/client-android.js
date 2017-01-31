var http = require('http');
var configuracoes = {
    hostname: 'localhost',
    port: 8000,
    path: '/api/produtos',
    headers: {
        'Accept': 'application/json'
    }
};

http.get(configuracoes, function(res) {
    console.log('HTTP Response: ' + res.statusCode);
    res.on('data', function(body) {
        console.log('Reposta: ' + body);
    })
});