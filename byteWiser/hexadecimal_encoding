var array = [];
for (var i = 0; i < process.argv.length; i++) {
	if (i > 1) {
		array.push(parseInt(process.argv[i]));
	}
}
buf = new Buffer(array);
console.log(buf.toString('hex'));