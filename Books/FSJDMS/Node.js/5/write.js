var fs = require('fs');
var data = 'some file data';
/*
fs.writeFile(__dirname + '/foo.txt', data, function(error){
    if(error){
        return console.error(error.message);
    }
});
*/
// example of the 'wv' flag

fs.writeFile(__dirname + '/foo.txt', data, {
    flag: 'wx'
},function(error){
    if(error){
        return console.error(error.message);
    }
});