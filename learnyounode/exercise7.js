// Exercise 7
var http = require('http');

http.get(process.argv[2], function(response) {
	response.setEncoding('utf8');
	response.on('data', function(data) {
		console.log(data);
	});
	response.on('error', function(err) {
		console.log('Following error occurred: ' + err);
	});
	response.on('end', function(end) {
		return;
	});
});