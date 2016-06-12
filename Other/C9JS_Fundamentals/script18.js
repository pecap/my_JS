//poluted our global namespace with the word "version"
/*
$(function(){
	alert(window.version);
});

var version ="1.2";


// created "a singleton pattern" to bypass the global polution problem
//avoid polution by keeping everything inside the jquery ready space

$(function(){
	//var version ="1.2";
	//alert(window.version);
	
	$('#clickMe').click(function(){
		$('#main').append('You should only see this if you click the plus!');
		
		$('#main').append("<img src='plus-8.png' alt='Click me to see the paragraph' id='clickMe' />");
		
		$('#clickMe').toggle(function(){
			$('#message').show("fast");
			$('#clickMe').attr("src", "minus-8.png");
		}, function(){
			$('#message').hide("slow");
			$('#clickMe').attr("src","plus-8.png");
		});
		
		$('#message').hide();
	});

	
});
*/
$(function(){
	$('#main').append("img src="plus-8.png" alt="Click me to see the paragraph" id="clickMe" />");
	$('#main').append('You should only see this if you click the plus!');
	
	$('#clickMe').toggle(function(){
		$('#message').show("fast");
		$('#clickMe').attr("src", "minus-8.png");
	}, function(){
		$('#message').hide("slow");
		$('#clickMe').attr("src", "plus-8.png");
	});	
});
/*
var AETRIS ={};
AETRIS.version ="1.2";

//use the AETRIS. command to create "global" variables in the singleton pattern instead of creating new variables

AETRIS.planet = {
	id: 34,
	name: "intempstesta nox"
};

*/
