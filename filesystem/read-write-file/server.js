
var http = require('http');
var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/readMe.txt','utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/WriteMe.txt');

myReadStream.on('data', function(chunk){
  console.log('new chuck is received');
  myWriteStream.write(chunk);
});
/* var http = require('http');
var server = http.createServer(function(req,res)
{
  console.log('request was made: ' + req.url);
  res.writeHead(200,{'Content-Type': 'text/plain'});
  res.end('hello raspiinvent');
});
server.listen(3000,'127.0.0.1');
console.log('listen port 3000'); */
//readable stream
/*var http = require ('http');
var fs = require('fs');
var myReadStream = fs.createReadStream(__dirname + '/readMe.txt','utf8');

myReadStream.on('data',function(chunk){
  console.log('new chunk received:');
  console.log(chunk);
});*/
