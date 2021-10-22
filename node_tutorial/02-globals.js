console.log(__dirname);

let i = 0;
const ONE_SECOND = 1000;

setInterval(() => {
  i += 1;
  console.log(i);
}, ONE_SECOND);
