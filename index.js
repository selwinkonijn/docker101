const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello there Hogent!!');
});

app.get('/crash', (req, res) => {
  process.exit(1);
});

app.listen(8080, () => {
  console.log('Listening on port 8080');
});
