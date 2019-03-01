const all = require('../core');

for(const func in all) {
  if (all.hasOwnProperty(func)) {
    all[func]();
  }
}