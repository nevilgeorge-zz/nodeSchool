// Exercise 4
var through = require('through');
var upperCaser = function(buffer) {
	this.queue(buffer.toString().toUpperCase());
}

process.stdin.pipe(through(upperCaser)).pipe(process.stdout);