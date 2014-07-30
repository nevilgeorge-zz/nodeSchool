// Exercise 12
var map = require('through2-map'),
	http = require('http');

var server = http.createServer(function(request, response) {
	if (request.method != 'POST') {
		return res.send('please send POST request!');
	}

	request.pipe(map(function(chunk) {
		return chunk.toString().toUpperCase();
	})).pipe(response);
});

server.listen(process.argv[2]);