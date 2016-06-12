$(function(){
	$('#clickMe').click(function(){
			
			var drawSquare = function(size){
			var sqSize = Math.pow(size,2);
			var arr = [];
			var line = "";
    
			for(var i = 0; i<sqSize; i++){
				if(i != 0 && i % size === 0){
					arr.push('\n');
					line+=arr[i];
				}else if(i % 2 === 0){
					arr.push(' ');
					line+=arr[i];
				}else{
					arr.push('#');
					line+=arr[i];
				}
			}
			console.log(arr);
			console.log(line);
			}
	drawSquare(prompt("what size grid would you like to form?"));
	
	});
});