function submitAnswers() {
	// total # answers
	var total = 5;
	// set score
	var score = 0;
	// get user input value
	var q1 = document.forms["quizForm"]["q1"].value;
	var q2 = document.forms["quizForm"]["q2"].value;
	var q3 = document.forms["quizForm"]["q3"].value;
	var q4 = document.forms["quizForm"]["q4"].value;
	var q5 = document.forms["quizForm"]["q5"].value;
	// (very) basic validation
	for(i=1;i<=total;i++) {
		if(eval('q'+i) === null || eval('q'+i) === "") {
			alert("You missed question " + i);
			return false;
		}
	}
	// set correct answers
	var answers = ['b', 'a', 'd', 'b', 'd'];
	// check the answers
	for(i = 1;i <= total;i++) {
		if(eval('q'+i) === answers[i - 1]) {
			score++;
		}
	}
	// display result
	var results = document.getElementById('results');
	results.innerHTML = '<h3>You scored <span>' + score + '</span> out of <span>' + total + '</span>';
	alert("You scored " + score + " out of" + total);
	return false;
}

// funny comment - after writing the first 11 rows i tested with an alert(q1).
// does not work on edge... not sure why but the alert returns undefined. works on chrome and firefox