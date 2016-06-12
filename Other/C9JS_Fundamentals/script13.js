//the DOM a simplified explanation

/*
browser recieves html
browser parses the html code and access all the outside files (CSS, Js etc)
the parsers main job is to turn the recognizable objects into a tree of related objects
the DOM takes this tree and knows where to put what on the webpage by the relations between the objects
with java
*/


/*
this is the tree for the C9JS_13 web page example.

window
	document
		H1#title
		div#main
			p#first
				text "first paragraph"
			p#second
				strong
					text "second paragraph"
			p#third
				text "third paragraph
		div#form
			input#clickMe

top lvl objects can access any element in the DOM
*/
/*
we want to attach an event handler to the click me
we want to attach the runtheExample function to the onclick event.
*/
/*
var clickMeButton = document.getElementById('clickMe');
clickMeButton.onclick = runTheExample;

function runTheExample() {
	alert('running the example');
}


//we need to slow things down. 
//windows.onload that fires only after everything finished downloading so 100% DOM availability at the cost of loading times
/*

windows.onload = function() {
}

	function runTheExample() {
		alert('running the example');
	}
*/	
/*
window.onload = function() {
	//var clickMyButton = document.getElementById('clickMe');
	//clickMyButton.onclick = runTheExample;
	
	document.getElementById('clickMe').onclick = runTheExample;
	
}

function runTheExample() {
	alert('running the example');

}
*/
/*
function runTheExample() {
	var myElement = document.getElementById('second');
	
	var myNodeName = myElement.nodeName;
	//alert(myNodeName);
	/*
	if(myElement != null){
		alert(myElement.innerHTML);
		using inner HTML has years of browser support but untill html5 spec came out it was never a standard
		Jquery will smooth over these browser differences
		using inner html is problematic, try to avoid
	}
	
	//this is the inner html code - document.getElementById('second').innerHTML = "See how I set the text here?";
	var listOfParagraphs = document.getElementsByTagName('p');
	//alert(listOfParagraphs.length);
	
	var secondParagraph = listOfParagraphs[1];
	alert(secondParagraph.innerHTML);
	*/
	/*
	myElement - document.getElementById('second');
	alert(myElement.parentNode.nodeName);
	
	
	myElement.childNodes[0];
	myElement.firstChild;
	myElement.lastChild;
	
	myElement.nextSibling;
	myElement.previousSibling;
	
	var anchor = document.getElementById('myAnchor');
	//var anchorDestination = anchor.href;
		//alert(anchorDestination);
		
		//anchor.href = "http://www.learnvisualstudio.net";
	
	//older browsers
	//anchor.setAttribute('href', 'http://www.learnvisualstudio.net');
	//anchot.getAttribute('href');
	
}
*/

windows.onload = function() {
	document.getElementById('clickMe').onclick = runTheExample;
}

function runTheExample() {
	alert('running the example');
}










