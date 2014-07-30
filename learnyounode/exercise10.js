//Exercise 10
var net = require('net');
var server = net.createServer(function(socket) {
	var date = new Date();
	socket.write(date.getFullYear() + '-0' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes());
	socket.end();
});
server.listen(process.argv[2]);