/*		Recursion

			build a function that checks if a number is even based on the following logic -

				zer is even
				one is odd
				for any other number N, its evenness is the same as N - 2

*/

function isEven(number){
	if(number<0){
		return isEven(number+2); 
	} else if(number === 0){
		return "even";
	} else if(number === 1){
		return "odd";
	} else{
		return isEven(number-2);
	}
}
for (i=-100;i<=100;i++){
	console.log(isEven(i));
}



