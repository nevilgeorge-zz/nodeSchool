// Exercise 13
var http = require('http'),
	url = require('url');

var server = http.createServer(function(request, response) {
	response.writeHead(200, {'content-type': 'application/JSON'});
	var parsed = url.parse(request.url, true);
	var date = new Date(parsed.query.iso);
	if (parsed.pathname == '/api/parsetime') {
		response.write(JSON.stringify({
			hour: date.getHours(),
			minute: date.getMinutes(),
			second: date.getSeconds()
		}));
	}

	if (parsed.pathname == '/api/unixtime') {
		res.write(JSON.stringify({ unixtime: Math.round(date.getTime())}));
	}
});

server.listen(process.argv[2]);