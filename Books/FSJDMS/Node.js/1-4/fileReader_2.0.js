var fs = require('fs');
var fileName = 'README.txt';
// the read callback function - if error than error, if not log data to console
function readCallback(error, data){
    if(error){
        return console.error(error);
    }
    console.log(data);
}
// the stat callback function - if error than error, else if not a file than other error, if not read file
function statCallback(error, stats){
    if(error){
        return console.error(error);
    }else if(!stats.isFile()){
        return console.error('Not a file');
    }
    fs.readFile(fileName, 'utf8', readCallback);
}
// exists callback function - if error than error, if not run statcallback on file
function existsCallback(exists){
    if(!exists){
        return console.error('File does not exist');
    }
    fs.stat(fileName, statCallback);
}
// run program
fs.exists(fileName, existsCallback);