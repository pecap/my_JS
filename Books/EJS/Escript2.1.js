$(function(){
	$('#clickMe').click(function(){
	// pass to many arguements into a function in JS, and it will simply ignore the extra ones
	// pass to few - the missing parameters are assigned the value "undefined"
	
		//alert("Hello", "Good Evening", "How do you do?");
	
	// optional arguements
	
	function power(base, exponent) {
		if (exponent === undefined) {
			exponent = 2;
		};
		var result = 1;
		for (i = 0; i < exponent; i++) {
			result *= base;
		};
		return result;
	};
	console.log(power(4));
	console.log(power(4, 3));
	console.log("R", 2, "D", 2);
	console.log("Hello", "Good evening", "How do you do?");
	});
});

/*
function chicken() {
			return egg();
		};
		function egg() {
			return chicken();
		};
		console.log(chicken() + " came first");
*/