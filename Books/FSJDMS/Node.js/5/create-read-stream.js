var fs = require('fs');
var stream = fs.createReadStream('foo.txt');

// data event handler
stream.on('data', function(data){
    var chunk = data.toString();
    process.stdout.write(chunk);
});
// end event handler
stream.on('end', function(){
    console.log();
});
// error event handler
stream.on('error', function(error){
    console.error(error.message);
});