const express = require('express');

const app = express();

/* app.use((req, res, next) => {
  console.log("First request.");
  next();
});

app.use((req, res, next) => {
  console.log("Second request.");
  res.send("<h2>Hi there, welcome to Node.js</h2>");
}); */

app.use('/users', (req, res, next) => {
  res.send('<h1>The "Users" Page</h1>');
});

app.use('/', (req, res, next) => {
  res.send('<h1>Hello from Express!</h1>');
});

app.listen(3000);
