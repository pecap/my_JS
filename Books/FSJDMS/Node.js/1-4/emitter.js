var events = require('events');
var EventEmitter = events.EventEmitter;

function Counter(){
    var self = this;
    
    EventEmitter.call(this); // call the eventemitter constructor
    var count = 0;
    
    this.start = function(){
        this.emit('start');
        
        setInterval(function(){
            self.emit('count', count);
            ++count;
        }, 1000);
    };
}
util.inherits(counter, EventEmitter); //setup inheritance

var counter = new Counter();