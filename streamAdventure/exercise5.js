// Exercise 5
var split = require('split'),
	through = require('through'),
	count = 0;

var convertString = function(line) {
	count++;
	if (count % 2 == 0) {
		this.queue(line.toString().toUpperCase() + '\n');
	} else {
		this.queue(line.toString().toLowerCase() + '\n');
	}

};

process.stdin.pipe(split()).pipe(through(convertString)).pipe(process.stdout);