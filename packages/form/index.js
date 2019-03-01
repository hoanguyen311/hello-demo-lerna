const cowsay = require('cowsay');

module.exports = function() {
  console.log(cowsay.say({ text: 'render form', cow: cowsay.SQUIRREL }));
};