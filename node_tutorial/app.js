const http = require('http');

const server = http.createServer((req, res) => {
  const { url } = req;
  switch (url) {
    case '/':
      res.end('Welcome to our home page');
      break;
    case '/about':
      res.end('Welcome to about page');
    case '/sports':
      res.end('Welcome to sports page');
    default:
      break;
  }
  res.end(`
    <h1>Ooops!!</h1>
    <p>We could not found the page you are looking for</p>
    <a href="/">back home</a>
  `);
});

server.listen(5000);