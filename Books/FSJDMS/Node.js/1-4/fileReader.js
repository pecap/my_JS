// Require modules
var fs = require('fs');
var fileName = 'README.txt';

// check fileName
fs.exists(fileName, function(exists){
    if (!exists){
        return console.error('File does not exist');
    }
    // check if file exists
    fs.stat(fileName, function(error, stats){
        if(error){
            return console.error(error);
        } else if(!stats.isFile()){
            return console.error('Not a file');
        }
        // log file content to console
        fs.readFile(fileName, 'utf8', function(error, data){
            if(error){
                return console.error(error);
            }
            console.log(data);
        });
    });
});
