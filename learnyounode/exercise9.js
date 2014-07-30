// Exercise 9 WHAT!
var http = require('http'),
	stringArray = [];

http.get(process.argv[2], function(response) {
	response.setEncoding('utf8');
	var string1 = '';
	response.on('data', function(data) {
		string1 += data;
	});

	http.get(process.argv[3], function(response) {
		response.setEncoding('utf8');
		var string2 = '';
		response.on('data', function(data) {
			string2 += data;
		});

		// wait for second to return
		response.on('end', function() {
			stringArray.push(string2);
		});

		http.get(process.argv[4], function(response) {
			response.setEncoding('utf8');
			var string3 = '';
			response.on('data', function(data) {
				string3 += data;
			});

			// wait for third to return, then print strings
			response.on('end', function() {
				stringArray.push(string3);

				for (var i = 0; i < stringArray.length; i++) {
					console.log(stringArray[i]);
				}
			});

		})
	});

	// wait for first to return
	response.on('end', function() {
		stringArray.push(string1);
	});
});