//CommunJs every file is a module (by default)
//Modules Encapsuled code (only share minimum)

const sayHi = require('./04-utils');
const { peter, john } = require('./03-names');
const items = require('./05-alternative-flavor');
require('./06-mind-granade');


sayHi(peter);
sayHi(john);
sayHi('Ale');

console.log(items);