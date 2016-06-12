var drawSquare = function(size){
   
    var sqSize = Math.pow(size,2);
    var arr = [];
    line = "";
	
    for(var i = 0; i<sqSize; i++){
        if(i !== 0 && i % size === 0){
            arr.push('\n');
			line += arr[i];
			console.log(line);
            arr = [];
        }
        if(i % 2 === 0){
            arr.push(' ');
        }else{
            arr.push('#');
        }
    }
    
    console.log(line);
}
drawSquare(8);