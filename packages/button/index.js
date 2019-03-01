const cowsay = require('cowsay');

module.exports = function() {
  console.log(cowsay.say({ text: 'render button', e: '**', T: 'vv', cow: cowsay.SQUIRREL }));
};