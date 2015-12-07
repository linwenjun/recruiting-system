var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function(req, res) {
  console.log();
  res.sendFile(__dirname + '/public/index.html');
})

module.exports = app;
