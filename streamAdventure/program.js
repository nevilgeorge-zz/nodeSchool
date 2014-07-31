var concat = require('concat-stream');

process.stdin.pipe(concat(function (body) {
	var string = body.toString();
	string = string.split('').reverse().join('');
	console.log(string);
}));