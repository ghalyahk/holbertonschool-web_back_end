const express = require('express');

const app = express();

// route for /
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// start server
app.listen(1245);

module.exports = app;
