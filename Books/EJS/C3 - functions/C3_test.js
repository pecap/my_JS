var square = function(x){
    return x*x;
}
console.log(square(prompt("pick a number, and ill return the square")));

var makeNoise = function(){
    console.log("Pling!");
    alert("Pling!");
}
makeNoise();

var power = function(base, exponent){
    var result = 1;
    for (i=0;i<exponent;i++){
        result*=base;
        
    };
    return result;
}
console.log(power(prompt("whats your base?"), prompt("and your exponent?")));

function wrapValue(n){
	var localVariable = n;
	return function() {
		return localVariable;
	}
}

var wrap1 = wrapValue(1);
var wrap2 = wrapValue(2);
console.log(wrap1());
console.log(wrap2());

//the power function from earlier, for the upcoming multiplier example (a manipulation of the power function using the closure concept)

function power(base, exponent) {
	if(exponent === undefined){
		exponent = 2;
	}
	var result = 1;
	for (i=0; i<exponent; i++){
		result*=base;
	}
	return result;
}
console.log(power(4)); //because exponent === undefind, the function sets exponent = 2
console.log(power(4, 3));

//the multiplier function

function multiplier(factor){
	return function(number){
		return number*factor;
	};
}
var twice = multiplier(2);
console.log(twice(5));

var fourTimes = multiplier(4);
console.log(fourTimes(5));

//recursive function - a function that calls itself

//example - an alternative implementation of the "power" function

function power(base, exponent){
	if(exponent === 0){
		return 1;
	} else{
		return base*power(base, exponent-1);
	}
}

//this alternative is more elegant then the looping variant above, yet its about 10 times slower
//runing through a simple loop is a lot cheaper than calling a function multiple times

//under this example both the looping (the complex) version and the recursive version are both simple and easy to
//read and write. so it doesnt make much sense replacing the looping version with the recursive one.
//in programs dealing with more complex concepts giving up some efficiency in order to make the program more straightforward becomes more attractive

//the rule of thumb is to not worry about efficiency untill you know for sure that the program is too slow.
//if it is, find out which parts are taking up the most time, and start exchanging elegance for efficiency

//but its not just a matter of efficiency. some problems are easier to solve with recursion than with loops
//most often these are problems that require exploring or processing several "branches", each branching yet again and again...

//PUZZLE: by starting from 1 and repeatedly either adding 5 or multiplying by 3, an infinite amount of new numbers can be produced.
//how would you write a function that. given a number, tries to find a sequence of such additions and multiplications that produce that number?
//for example the number 13 could be reached by first multiplying by 3 then adding 5 twice. whereas 15 cannot be reached at all

function findSolution(target){
	function find(start, history){
		if(start === target){
			return history;
		}else if(start > target){
			return null;
		}else{
			return find(start+5, "("+history+"+5)") || find(start*3, "("+history+"*3)");
		}
	}
	return find(1, "1");
}
console.log(findSolution(13));
console.log(findSolution(24));
console.log(findSolution(15));

/*

	there are 2 more or less natural ways for functions to be introduced into programs:
		
		1. when writing similar code multiple times. we take the repeated functionality and put it into a function
		2. when we need new functionality we haven't written yet. we usually start by naming the function and even
		writing code that uses the function before we write its functionality

	how difficult it is to find a good name for a function is a good indication of how clear a concept it is you are trying to represet

	example:

		we want to write a program that prints 2 numbers, the numbers of cows and chickens on a farm,
		with words "Cows" and "Chickens" after them, and zero's padded before both numbers so that they are 3 digits long

			007 Cows
			011 Chickens

*/

function printFarmInventory(cows, chickens){
	
	var cowString = String(cows);
	while (cowString.length<3){
		cowString="0"+cowString;
	}
	console.log(cowString+" Cows");

	var chickenString = String(chickens);
	while (chickenString.length<3){
		chickenString="0"+chickenString;
	}
	console.log(chickenString+" Chickens");
}
printFarmInventory(7, 11);
printFarmInventory(29, 112);

/*
		while we were coding the farmer got into pigs aswell and wants us to add pigs to the program

		a second before we add another argument and copy/pase those 4 lines of code we stop. there is a better way.
		we create a function ("printZeroPaddedWithLabel") that recieves 2 arguments (an amount and a label) and generates
		the string. we then rebuild our "printFarmInventory" function so it takes 3 arguments and runs each through the string
		generating function and print the results.

		the next step will be creating a function that recieves any arguments passed to it, running all through the string generating
		function. 

*/

function printZeroPaddedWithLabel(number, label){
	var numberString = String(number);
	while (numberString.length<3){
		numberString="0"+numberString;
	}
	console.log(numberString+" "+label);
}

function printFarmInventory(cows, chickens, pigs){
	printZeroPaddedWithLabel(cows, "Cows");
	printZeroPaddedWithLabel(chickens, "Chickens");
	printZeroPaddedWithLabel(pigs, "Pigs");
}

printFarmInventory(7, 11, 3);
printFarmInventory(29, 112, 13);

/*
		the name "printZeroPaddedWithLabel" is awkward. it conflates 3 things - printing, zero paddings and labeling - into a single fucntion

*/

function zeroPad(number, width){
	var string = String(number);
	while(string.length<width){
		string="0"+string;
	}
	return string;
}

function printFarmInventory(cows, chickens, pigs){
	console.log(zeroPad(cows, 3)+" Cows");
	console.log(zeroPad(chickens, 3)+" Chickens");
	console.log(zeroPad(pigs, 3)+" Pigs");
}

printFarmInventory(7, 11, 3);
printFarmInventory(29, 112, 13);