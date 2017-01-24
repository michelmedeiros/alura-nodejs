var http = require('http');

http.createServer(function(req, res) {
  if (req.url == '/produtos') {
    res.end("<html><body><h1>Listagem de produtos</h1></body></html>");
  } else {
    res.end("<html><body><h1>Home da Casa do Código</h1></body></html>");  
  }

}).listen(3000);

console.log('Servidor em execução');
