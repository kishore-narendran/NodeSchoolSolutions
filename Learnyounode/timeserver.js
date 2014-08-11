var net = require("net")
var portno = process.argv[2]

function zeroFill(x){
	if(x <= 9){
		return "0"+x.toString()
	}
	else{
		return x.toString()
	}
}
var server = net.createServer(function (socket){
	d = new Date()
	data = zeroFill(d.getFullYear()) + "-"
		+ zeroFill(d.getMonth() + 1) + "-"
		+ zeroFill(d.getDate()) + " "
		+ zeroFill(d.getHours()) + ":"
		+ zeroFill(d.getMinutes()) + "\n"	
	socket.end(data)
})
server.listen(portno)