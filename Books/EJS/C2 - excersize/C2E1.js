// "write a loop that makes seven calls to console.log outputting a triangle made from # (base 7)"
// suggested using .length to control the function 

$(function(){
	$('#clickMe').click(function(){
		
		var x = "#";
		for (i = 0; x.length <= 7; i++) {
			console.log(x);
			x += "#";
		};
	});
});