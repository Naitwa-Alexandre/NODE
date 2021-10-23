const { readFile, writeFile } = require('fs');

const login = (user, pass) => {
  if (!(user && pass)) {
    console.log('username or password need to be provied');
    return;
  }

  readFile('./database.json', (err, res) => {
    const data = JSON.parse(res);

    if (err) return console.log(err);

    const checkUser = data.find((usr) => usr.username === user && usr.pass === pass);

    if (!checkUser) {
      return console.log('User name or password incorrect');
    }

    return console.log('welcome');
  });
};

const registrate = (username, pass) => {
  if (!(username && pass)) {
    return console.log('a username and a password must be provided');
  }

  readFile('./database.json', (err, resp) => {
    const data = JSON.parse(resp);

    if (err) return console.log(err);

    const oldUser = data.find((user) => user.username === username && user.pass === pass);

    if (oldUser) return console.log('user already exist');

    const newUser = {
      username,
      pass
    };

    writeFile('./database.json',JSON.stringify([...data, newUser]), (err, _res) => {
      if (err) return console.log(err);

      console.log('user created');
    });
  });
};

login('eskalo', 'es');
registrate('blacksheep', '4269');