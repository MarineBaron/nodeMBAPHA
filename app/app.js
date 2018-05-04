const express = require('express');
const path = require('path');

const app = express();

const port = 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', function (req, res) {
  res.send('Hello World');
});
 
app.listen(port);
