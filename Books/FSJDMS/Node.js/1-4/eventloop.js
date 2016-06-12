/*
console.log('one event loop cycle');

setTimeout(function(){
	console.log('different cycle');
}, 100);

console.log('same cycle');
*/

setInterval(function(){
	console.log('Task A');
}, 10);
setInterval(function(){
	while(true);
	console.log('Task B');
}, 15);