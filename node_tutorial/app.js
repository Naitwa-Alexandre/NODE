const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response', (name, id) => {
  console.log(`data recieved user: ${ name }, id: ${ id }`);
});

customEmitter.on('response', (name, id, ...rest) => {
  console.log(`whos gonna brow up peoples mind ? ${ name } with id: ${ id }`);
  console.log(rest);
});

customEmitter.emit('response', 'alepereira', 42, 'alo', 'burrito', [1,2,3,4,5], 'elefante-asiatico');