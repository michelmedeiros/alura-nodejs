var mongoose = require('mongoose');

module.exports = function () {
    if(!process.env.NODE_ENV) {
      mongoose.connect('mongodb://localhost/nodejs');
      console.log('Ambiente de desenvolvimento');
    }
    if(process.env.NODE_ENV == 'test') {
      mongoose.connect('mongodb://localhost/nodejs-test');
      console.log('Ambiente de testes');
    }

    console.log('Conectando no mongo');
  return mongoose;

}
