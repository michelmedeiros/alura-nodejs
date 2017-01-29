var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/nodejs');

module.exports = function () {
    console.log('Conectando no mongo');    
  return mongoose;
  
}
