// Exercise 6
var myModule = require('./myModule.js');

myModule(process.argv[2], process.argv[3], function(err, files) {
	if (err) {
		console.log('error occurred');
	} else {
		for (var i = 0; i < files.length; i++) {
			console.log(files[i]);
		}
	}
});