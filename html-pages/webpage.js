/*var fs = require('fs');

var server = http.createServer(function(req,res){
  console.log('request was made:'+ req.url);
res.writeHead(200, {'content-Type': 'application/json'});
var myObj = {
name: 'riyu',
job: 'developer',
age: 29
};
res.end(JSON.stringfy(myObj));
});*/

//json.js
var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
  console.log('request was made:' + req.url);
  if(req.url === '/home' || req.url === '/' ){
res.writeHead(200,{'Content-Type':'text/html'});
  fs.createReadStream(__dirname +'/index.html').pipe(res);
} else if(req.url === '/contact'){
  res.writeHead(200,{'Content-Type': 'text/html'});
  fs.createReadStream(__dirname + '/contact.html').pipe(res);
} else if(req.url === '/api/ninjas'){
  var ninjas =[{name:'ritu', age:22}];
  res.writeHead(200,{'content-Type':'application/json'});
  res.end(JSON.stringify(ninjas));
}else{
  res.writeHead(404,{'Content-Type': 'text/html'});
  fs.createReadStream(__dirname + '/404.html').pipe(res);
}
});

server.listen(3000,'127.0.0.1');
console.log('hey ');

//app.get('/contact', function(req, res){
  //res.send('this is the conatct page');
//});
//app.listen(3000);
