var path = process.argv[2];
var fs = require('fs');
buffer = fs.readFileSync(path).toString();
console.log(buffer.split('\n').length.toString()-1);