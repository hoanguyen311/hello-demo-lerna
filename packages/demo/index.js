const all = require('@hoa-demo-lerna/core');

for(const func in all) {
  if (all.hasOwnProperty(func)) {
    all[func]();
  }
}