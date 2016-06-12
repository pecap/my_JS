// Require necessary modules
var m = require('mmm');
var colors = require('colors');

// time stamp for 1st req
console.log('Time after first require ' + m.now);

// testing the math module 
if(m.add(3,5)===8){
	console.log('test succesful. result is '.green + m.add(3,5));
}else{
	console.log('computer says no...');
}
if(m.multiply(4,5)===20){
	console.log('test succesful. result is '.green + m.multiply(4,5));
}else{
	console.log('computer says no...');
}
if(m.factorial(4)===16){
	console.log('test succesful. result is '.green + m.factorial(4));
}else{
	console.log('computer says no...'.red);
}
// time stamp for 2nd require (= 1st)
setTimeout(function(){
	m = require('mmm');
	console.log('Time after second require ' + m.now);
}, 5000);