var drawSquare = function(size){
   
    var sqSize = Math.pow(size,2);
    var arr = [];
	var line = "";
    
    for(var i = 0; i<sqSize; i++){
        if(i != 0 && i % size === 0){
            arr.push('\n');
            console.log(arr);
			arr = [];
        }
        if(i % 2 === 0){
            arr.push(' ');
        }else{
            arr.push('#');
        }
    }
    
    console.log(arr);
}
drawSquare(8);