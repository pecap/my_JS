
/*
the original example - without closure

$(function(){
	function buildACat(){
		var catName = "Mr. Tibbles";
		function catFactory(){
			alert(catName);
		}
		catFactory();
	}
	$('#buildcat').click(function(){
		buildACat();
	});
});
*/

//now a version with closure

/*
$(function(){
	function buildACat(){
		var catName = "Tuffy";
		function catFactory(){
			alert(catName);
		}
		//Notice: instead of executing it, it juts
		// returns a REFERENCE
		return catFactory;
	}
	$('#buildcat').click(function(){
		var myNewCat = buildACat();
		// buildACat() has executed. it has gone out of scope now,
		// and all its private function variables with it, right? right?
		myNewCat(); // <-- Not so fast ... the catName variable value was somehow stored along with catFactory ...
	});
	
});
*/

// a 'module' pattern -->

a = (function() {
	var privateFunction = function(){
		alert('hello');
	}
	return{
		publicFunction: function(){
			privateFunction();
		}
	}
})();

a.publicFunction();