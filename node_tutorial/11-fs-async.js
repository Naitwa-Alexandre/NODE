const { readFile, writeFile } = require('fs');

readFile('./content/first.txt','utf8', (err, res) => {
  if (err) return console.log(err);

  const first = res;

  readFile('./content/second.txt', 'utf8', (err, res) => {
    if (err) return console.log(err);

    const second = res;

    writeFile(
      './content/result-async.txt',
      `Here is the result: ${ first }, ${ second }`,
      { flag: 'a' },
      (err, res) => {
        if (err) return console.log(err);
        
        console.log('file created');
      }
    );
  });
});
