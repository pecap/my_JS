$(function(){
	$('#clickMe').click(function(){
		/*
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
		*/
		/*
		var x = "outside";
		var f1 = function() {
			var x = "inside f1";
		};
		f1();
		console.log(x);
		*/
		/*
		var f2 = function() {
			x = "inside f2";
		};
		f2();
		console.log(x);
		*/
		
		// nested scope example - degrees of locality
		
		var landScape = function() {
			var result = "";
			var flat = function(size) {
				for (i = 0; i < size; i++) {
					result += "_";
				};
			};
			var mountain = function(size) {
				result += "/"
				for (i = 0; i < size; i++) {
					result += "'";
				};
				result += "\\";				
			};
			flat(3);
			mountain(4);
			flat(6);
			mountain(1);
			flat(1);
			return result;
		};
		console.log(landScape());
		
		// each local scope can also see all the local scopes that contain it
	});
});

