//		Minimum function

function Minimum (a, b){
	if(a<b){
		return a;
	} else if(a>b){
		return b;
	} else{
		return null;
	}
}		
console.log(Minimum(3,3));
console.log(Minimum(7,21));
console.log(Minimum(1,-1));