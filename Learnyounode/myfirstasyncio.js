var path = process.argv[2];
var fs = require('fs');
fs.readFile(path, function(error, data){
	if(error)
		return;
	else{
		buffer = data.toString();
		console.log(buffer.split('\n').length-1);
	}
});