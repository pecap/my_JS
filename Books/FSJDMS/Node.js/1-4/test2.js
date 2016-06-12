var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();

/*
emitter.on('error', function(error){
    console.error(error.message);
});
*/

process.on('uncaughtException', function(error){
    console.error(error.message);
    process.exit(-1);
});

emitter.emit('error', new Error('ERROR: our error is bad and we feel bad for making it :/'));