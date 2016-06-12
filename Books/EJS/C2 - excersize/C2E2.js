// FizzBuzz :
// write a program that console.logs 1-100 with 2 exceptions - numbers divisible by 3 are replaced with "Fizz", divisible by 5 replaced by "Buzz"
// then, make it print FizzBuzz when a number is divisible by both

$(function(){
	$('#clickMe').click(function(){
		
		var x = 1;
		var f = "Fizz";
		var b = "Buzz";
		
		for (i = 1; x <= 100; i++) {
			if (x % 3 === 0 && x % 5 === 0) {
				console.log(f+b);	
			} else if (x % 3 === 0) {
				console.log(f);
			} else if (x % 5 === 0) {
				console.log(b);
			} else {
				console.log(x);
			}
			x++;
			
		};
	});
});