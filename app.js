var express = require('express');
var app = express();

app.use('/public/css', express.static(__dirname + '/public/css'));
app.use('/public/js', express.static(__dirname + '/public/js'));

app.get('/', function (req, res) {
  res.sendFile(__dirname+'/index.html');
});

app.listen(3000, function () {
  console.log('localhost:3000');
});