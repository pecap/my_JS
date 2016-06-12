/* 
	we wish to represent a collection of numbers - 2, 3, 5, 7, 11
	we can put them in  string and note each number using the .length property

	it would be easier to use an Array, which is a data type specifically for storing sequences of values
*/

var listOfNumbers = [2, 3, 5, 7, 11];

console.log(listOfNumbers[1]);
console.log(listOfNumbers[1-1]);

/*
	getting into different elements within an array uses the [] notation
	a pair of [] after an expression with another expression inside of them,
	will look up the element in the left hand expression that corresponds to the
	index given by the expression in the brackets
*/

/*
	Properties (.length, .max) access a 'property' of some value
	in the first case we access a property named 'length' and in the second
	we access the property 'max' in the Math object (a collection of mathematical values and functions)

	almost all JS values have properties with the exceptions being - null, undefined.
	try to access a property of these nonvalues will return an error
*/

/* 
	the two most common ways to access properties are with a dot and with square brackets so
	both value.x and value[x] access a property of value, just not necessarily the same property
	the difference is in the interpertation of x - 

		value.x = when using a dot, the part after the dot must be a valid variable name that directly names the property
		value[x] = when using square brackers, the expression in the brackets is evaluated to get the property name.

	so while value.x fetches the property of value named "x", value[x] tries to evaluate the expression 'x' 
	and uses the result as the property name

	if you know the property we are interested in is called "length", you say value.length
	if you want to extract the property named by the value held in the variable i, you say value[i]

	also, becayse property names can be any string, if you wana access a property named "2" or "john doe" you must use [],
	even tough you know the precise name of the property.
*/

/*
	elements in an array are stored in properties. 	because the name of these properties are numbers and we often need 
	to get their name from a variable, we use the bracket syntax to access them.

	the 'length' property of an array tells us how many elements it contains.
*/

/*	Methods
	
		both strings and array objects containt, in addition to the length property, a number of other properties that
		refer to function values.
*/

var doh ="Doh";
console.log(typeof doh.toUpperCase);
console.log(doh.toUpperCase());

/*
		every string has a toUpperCase property which when called returns a copy of the string all in capital letters
		there is also a toLowerCase.

		even though the call to toUpperCase does not pass any arguments, the function somehow has access to the string "Doh",
		the value whose property we called. 

		properties that containt functions are called 'Methods' of the value they belong to. 
		toUpperCase is a method of a string.

		the following are a few methods array objects have:
*/

var mack=[];
mack.push("Mack");
mack.push("the", "Knife");
console.log(mack);
console.log(mack.join(" "));
console.log(mack.pop());
console.log(mack);

/*
		the 'push' method can be used to add values to the end of an array
		the 'pop' method does the opposite - it removes the value at the end of the array and returns it
		the 'join' method flattens an array of strings into a single string. the argument given to 'join' determines the text that is glued between the array elements
*/

/*	Objects
		
		back to the weresquirrel example - we want to represent daily log entries as an array.
		but they each need to store a list of activities, and a boolean value that indicates wether he turned or not
		ideally, we want to group these values together into a single value and then put these grouped values into an array of log entires

		values of the type "Object" are arbitrary collections of properties, and can add or remove these properties as we please.
		we can create an object by using curly brace notation:
*/

var day1 = {
	squirrel: false,
	events: ["work", "touched tree", "pizza", "running", "television"]
};
console.log(day1.squirrel);
console.log(day1.wolf);
day1.wolf = false;
console.log(day1.wolf);

/*
		inside the {} we give a list of properties seperated by commas.
		each property is written as a name, followed by a colon, followed by an expression that provides a value for the property.
		properties whose names are not valid variable names or valid numbers have to be quoted.
*/

var descriptions = {
	work: "Went to work",
	"touched tree": "Touched a tree"
};

/*
		so {} have 2 roles in javaScript:
			1. at the start of a statement, they start of block of statements
			2. in any other position they describe an object
*/

/*
		reading a property that does not exist will produce a value 'undefined', i.e the 'wolf' property in the above example
		we can asign a value to a property with the '=' operator. this will replace its current value or, if it had no value,
		create a new one.
		

		property bindings are similar to variable bindings - they 'grasp' values, but other variables and properties might 
		be holding onto those same values. you may think of objects as octopuses with any number of tentacles, each has a name
		inscribed on it, each holding a value.

		the 'delete' operator cuts of a tentacle. it is a unary operator that, when applied to a property access expression, 
		will remove the named property from the object.
*/

var anObject = {left: 1, right: 2};
console.log(anObject.left);
delete anObject.left;
console.log(anObject.left);
console.log("left" in anObject);
console.log("right" in anObject);

/*
		the binary 'in' operator, when applied to a string and an object, returns a Boolean value that indicates wether that
		object has that property. the difference between the setting of a property to 'undefined' and actually deleting it is
		that, in the first case the object still has the property, it just doesn't have a value, whereas in the second case
		the property is no longer present and 'in' will return 'false'
*/

/*

	arrays then are just a kind of object specialized for storing sequences of things. if you evalute typeof[1, 2],
	this produces an "object". 

	so now we represent Jacques' journal as an array of objects:
*/

var journal = [
	{events: ["work", "Ttouched tree", "pizza", "running", "television"], squirrel: false},
	{events: ["work", "ice cream", "cauliflower", "lasagna", "touched tree", "brushed teeth"], squirrel: false},
	{events: ["weekend", "cycling", "break", "peanuts", "beer"], squirrel: true},
	//and so on and so forth
];

/*
	Mutability
	
