//		Bean counting

function countBs("string"){
	var result = 0;
	for(i=0;i<string.length;i++){
		if(string.charAt(i) === b){
			result +=1;
		}
	}
	return result;
}
console.log(countBs("banana rama b");