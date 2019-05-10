var express = require('express');
//var server = express.createServer();
// express.createServer()  is deprecated. 
var server = express(); // better instead
server.use(express.static(__dirname + '/src'));

server.listen(3000);
console.log("Listening on http://localhost:3000");