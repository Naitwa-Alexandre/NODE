const { readFileSync, writeFileSync } = require('fs');

const first = readFileSync('content/first.txt', 'utf8');
const second = readFileSync('content/second.txt', 'utf8');

const stringResult = `Here is the result: ${ first }, ${ second }`;

writeFileSync('content/result.txt', stringResult, { flag: 'a' });

