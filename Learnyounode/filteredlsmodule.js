var fs = require('fs');
var path = require('path');
module.exports = function (path_input, ext_input, callback){
	fs.readdir(path_input, function(error, files){
		if(error)
			return callback(error)
		var filenames = []
		for(i = 0; i < files.length; i++){
			if(path.extname(files[i]) == ("."+ext_input))
				filenames.push(files[i]);
		}
		return callback(null, filenames);
	});
}