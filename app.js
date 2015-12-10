var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var route = require('./routes/route');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static('public'));
route.setRoutes(app);
app.listen(3000, function() {
  console.log('App listening at http://localhost:3000');
})
