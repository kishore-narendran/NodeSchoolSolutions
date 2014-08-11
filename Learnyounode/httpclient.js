var url = process.argv[2];
var http = require("http");
http.get(url, function callback(response){
	response.on("data", function(data){
		data = data.toString();
		data = data.split("\n");
		for (var i = 0; i < data.length; i++) {
			console.log(data[i]);
		}
	});
});