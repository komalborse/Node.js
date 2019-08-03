var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
console.log('request was made:'+ req.url);
res.writeHead(200,{'content-Type':'text/html'});
var myReadStream = fs.createReadStream(__dirname + '/index.html','utf8');
//var myWriteStream = fs.createWriteStream(__dirname + '/WriteMe.txt

myReadStream.pipe(res);
//res.end('hey komal');
});
server.listen(3000,'127.0.0.1');
console.log('listen port 3000');
