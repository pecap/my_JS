
console.log('Currently executing ' + __filename);
console.log('located in ' + __dirname);


// async version

var fs = require('fs');

fs.readFile(__filename, 'utf8', function(error, data){
    if(error){
        return console.error(error.message);
    }
    console.log(data);
});

/*
//and the sync version

var fs = require('fs');
var data;

try {
    data = fs.readFileSync(__filename);
    console.log(data);
}catch(error){
    console.error(error.message);
}
*/