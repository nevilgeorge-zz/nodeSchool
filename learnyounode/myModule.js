var fs = require('fs'),
	path = require('path');

module.exports = function(dirname, extension, callback) {
	fs.readdir(dirname, function(err, files) {
		if (err) {
			return callback(err);
		}
		var list = []
		for (var i = 0; i < files.length; i++) {
			if (path.extname(files[i]) == '.' + extension) {
				list.push(files[i]);
			}
		}
		return callback(null, list);
	});
};