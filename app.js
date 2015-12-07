var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function(req, res) {
  console.log();
  res.sendFile(__dirname + '/public/index.html');
})

app.listen(3000, function() {
  console.log('App listening at http://localhost:3000');
})
