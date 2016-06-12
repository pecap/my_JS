$(function(){
	$('#clickMe').click(function(){
		var square = function(x) {
			return x*x;
		};
		console.log(square(12));
		
		var makeNoise = function() {
			console.log("pling!");
		};
		makeNoise();
		
		var power = function(base, exponent) {
			var result = 1;
			for (i = 0; i < exponent; i++) {
				result *= base;
			};
		return result;
		};
		console.log(power(3, 3));
	});
});

