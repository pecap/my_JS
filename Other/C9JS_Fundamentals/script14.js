/*
why Jquery?
it has 5 main concerns:
DOM
ajax
events
effects

the DOM ->
Jquery provides a cross browser way of working with the DOM
provides a simplified technique for accessing elements in the DOM using CSS selectors

ajax ->
several simple methods to exchange data with the web server using ajax + easy ways to work with the data being returned via the ajax call

Events ->
solves DOM ready vs. window.onload dilemma

supports a simplified event handling model -- easily add and remove multiple event handlers to a single DOM element event

Effects ->
has built in effects and animations

also allows using plugins for aditional effects + a wide array of other Jquery based functionality packaged for re userAgent
*/

//jQuery function that introduces the selector expression
// .ready = evaluating when the entire DOM is ready
//when jQuery finds the DOM ready, it runs the function
//jQuery = $

/*
$(document).ready(function(){
	start up code goes here
	alert("this works!");
	}
);

//the ready method lets us run our JS once the DOM is ready and by that save the wasted time Delta between DOM ready and onload
//$ tests the DOM to see if its ready by use of the "ready" method

*/
//we can replace all this syntax by another shortcut - $(function(){});

$(function(){
	//alert("this works!");
	//# symbol represents id
	//$("#title").text("Yay, I can now get at the H1 immediately!");
	
	//this time we are adding some html
	//$("#first").html("<h2>Great quotes</h2>");
	
	//prepend attaches it right before
	//append attaches right after
	//they both work INSIDE the given selection
	//before, after, insertBefore, insertAfter work OUTSIDE the given selection
	
	//$("#first").prepend("<h2>Great Quotes</h2>");
	//$("#first").append("<h3>...For you to ponder...</h3>");
	
	//$(#myAnchor).attr("href", "http://channel9.msdn.com");
	
	$("#title").addClass("standout");
	
});

//full explanations in the API jQuery section of their webpage
/*
$('.importantText')
$('#myFirstParagraph')
$('p').fadeOut();
*/
//the last example asks to call all paragraphs and then fade them out

//the above are different CSS selectors that we are passing in
//whenever we pass a selector to jQuery itll pass back a jQuery object

//the jQuery object is an array like structure and so in $('p') we say "find all paragraphs"

//$(document).ready() asks when all elements in the document are ready

//we can create HTML on the fly and attach it to the DOM using jQuery like so
/*

jQuery('<div id="badge">img src="badge.gif" alt="Badge earned for achievement"</div>');

$.myCustomeMethod = function() {alert('Hi');};
$.listBox = {
	show: function() {},
	hide: function() {},
	position: function() {},
	initite: function() {}
};

//we took all how declerations out of the global space and into the local space using jQuery

*/
/*
$(function(){
	alert("this works1!");
});
$(function(){
	alert("this works2!");
});
$(function(){
	alert("this works3!");
});

//the ready metod will attach your orders in a queing fashion to run the moment the DOM is ready so we can keep using it
*/

jQuery('#myFirstParagraph').fadeOut(500).fadeIn(500);

//the first part returns a jQuery object and then call the fade out which in turn calls the fade In
