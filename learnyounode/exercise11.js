// Exercise 11
var fs = require('fs'),
	http = require('http');

var server = http.createServer(function(request, response) {
	res.writeHead(200, {'content-type': 'text/plain'});
	fs.createReadStream(process.argv[3]).pipe(response);
});

server.listen(process.argv[2]);
