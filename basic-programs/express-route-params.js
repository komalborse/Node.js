
var express = require('express');
var app = express();



app.get('/', function(req, res){
  res.send('this is the homepage');
});

app.get('/contact', function(req, res){
    res.send('this is yhe contactpage');

});

app.get('/profile/:name', function(req, res){
  res.send('you requested to see aprofile with the name of ' + req.params.name);

});
app.listen(3000);
