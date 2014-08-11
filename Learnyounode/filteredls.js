var fs = require('fs');
var path = require('path');
var path_input = process.argv[2];
var ext_input = process.argv[3];
fs.readdir(path_input, function(error, files){
	for(i = 0; i < files.length; i++){
		if(path.extname(files[i]) == ("."+ext_input))
			console.log(files[i]);
	}
});