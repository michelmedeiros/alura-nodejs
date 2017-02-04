var mongoose = require('mongoose');

module.exports = function() {
  if (!process.env.NODE_ENV) {
    mongoose.connect('mongodb://localhost/nodejs');
    console.log('Ambiente de desenvolvimento');
  }

  if (process.env.NODE_ENV == 'test') {
    mongoose.connect('mongodb://localhost/nodejs-test');
    console.log('Ambiente de testes');
  } else if (process.env.NODE_ENV == 'production') {
    mongoose.connect('mongodb://admin:admin@ds139949.mlab.com:39949/heroku_gl5hvj1x');
    console.log('Ambiente de produção');
  }

  console.log('Conectando no mongo');
  return mongoose;

}