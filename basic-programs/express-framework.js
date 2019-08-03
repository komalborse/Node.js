var express = require('express');

var app = express();

app.get('/', function(req, res){
  res.send('this is the homopage');
});
//app.get('/contact', function(req, res){
  //res.send('this is the conatct page');
//});
app.listen(3000);
