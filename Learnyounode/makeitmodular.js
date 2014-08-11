var mymodule = require("./filteredlsmodule.js");
var path_input = process.argv[2];
var ext_input = process.argv[3];
mymodule(path_input, ext_input, function(err, data){
	for (var i = 0; i < data.length; i++) {
		console.log(data[i]);
	};
});