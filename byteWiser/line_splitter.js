var fs = require('fs');

fs.readFile(process.argv[2], function(err, buf) {
	start = 0;
	for (var i = 0; i < buf.length; i++) {
		if (buf[i] === 10) {
			console.log(buf.slice(start, i))
			start = i + 1;
		}
	}
	console.log(buf.slice(start));
});