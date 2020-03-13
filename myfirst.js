// var http = require('http');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.end('Hello World!');
// }).listen(8080);
console.log("hello");

// make a new file and write data on it
const fs = require('fs');
fs.writeFileSync('hello.txt', 'hello from nodejs');