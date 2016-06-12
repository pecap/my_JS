/*

var batwing = {
	
	//one property -> the status
	
	status: "Ready",

	//one method -> rescue batman

	rescueBatman: function() {
		document.write("Locating his transponder ... initiating launch...");
	}
}

	//the . notation is an access operator

if(batwing.status === "Ready") {
	batwing.rescueBatman();
}
*/
/*
var batwing = {
	status: "Ready",
	rescueBatman: function() {
		document.write("Locating his transponder ... initiating launch...");
	}
}



var utilities = {
	printAllMembers: function(targetObject) { 
		for (i in targetObject) {
			document.write("<br />" + targetObject[i]);
		}

	}
}

//utilities.printAllMembers(batwing);


var i_am_empty = { };

utilities.printAllMembers(i_am_empty);

*/

var planet = {
	id: 34,
	name: "Imtempesta Nox",
	faction: {
		factionId: 2,
		name: "nex",
		notification: function() {
			document.write("Next alliance ... unite!");
		}

	},
	cities: [
		{ locationId: 15, name: "gladius" },
		{ locationId: 16, name: "Chalybs" },
		{ locationId: 17, name: "Ensis" }
	]

};

//planet.faction.notification();
//document.write(planet.cities[1].name);

/*
document.write("<br/>" + planet.name);
planet.name = "vultus";
document.write("<br/>" + planet.name);


//passing objects around by references
*/
//var z = planet;
//document.write(z.name);

//adding more attributes to an object literal post creation
/*
if (typeof planet.defense === "undefined") {
	planet.defense = " Ion Canon";
}
*/
//document.write(planet.defense);
//document.write(z.defense);


/*
for (member in planet)
{
	document.write("<br/>" + member + " ==> " + planet[member]);
}
*/

//will use object literals alot while using JS libraries like Jquery tools (see flowplayer example)

//a constructor function defines a new key word that represents and object literal with certain qualities.
//the new operator can then be used to call upon the constructor to create iterations of it

function car(make, model, year) {
	this.make = make;
	this.model = model;
	this.year = year;
}

var myCar = new car("Eagle", "talon TSi", 1993);
var myOtherCar = new car ("Dodge", "Dart", 1971);

alert(myCar.model);
alert(myOtherCar.model);


