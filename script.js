var startquiz = document.getElementById("startquiz");
var firstScreen = document.getElementById("firstScreen");
var timeEl = document.querySelector(".time");
var secondsLeft = 20;
var question1 = ["1910", "1920", "1930", "1940"];
var question2 = ["John", "Paul", "Ringo", "George"]
var answers = document.getElementById("answers");
var test = document.getElementById("test");
var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");
var answer4 = document.getElementById("answer4");
var questionNo = document.getElementById("questionNo");
var quiz = document.getElementById("quizBody");
var yesNo = document.getElementById("yesNo");
var ask = ["What yr was HTML invented", " What does var mean in javascript", "What does CSS stand for?", "What is a stylesheet?"]
var question = document.getElementById("question");
var isCorrect = ["Yes that is correct", "No, you got that wrong!"]


// start button to begin quiz
startquiz.addEventListener("click", function (event) {
	// Removes button and first heading
	firstScreen.parentNode.removeChild(firstScreen);
	//sets timer
	setTime();
	//start the quiz
	quizStart();
	//ask question 1
	questionAsker1();
	//is it correct?
	checkAnswer1();
	//ask question 2
	questionAsker2();
	//is it correct?
	checkAnswer2()
});

function setTime() {
	var timerInterval = setInterval(function () {
		secondsLeft--;
		timeEl.textContent = secondsLeft + " seconds left";

		if (yesNo.innerText = isCorrect[1]) { 
			secondsLeft - 10;
		}

		if (secondsLeft === 0) {
			clearInterval(timerInterval);
			sendMessage();
		}

	}, 1000);
}

//message when time expires
function sendMessage() {
	timeEl.textContent = "Time up champion ";
}

//establish quiz questions
function quizStart() {
	quiz.style.visibility = "visible";
}

// different quiz questions using for loop
function questionAsker1() {
	for (var i = 0; i < ask.length; i++) {
		question.innerText = ask[0];
	}
	for (var i = 0; i < question1.length; i++) {
		answer1.innerText = question1[0];
		answer2.innerText = question1[1];
		answer3.innerText = question1[2];
		answer4.innerText = question1[3];
	}
}
//check is answer is correct
function checkAnswer1() {
	answer1.addEventListener("click", function () {
		yesNo.innerText = isCorrect[0]
	})
	answer2.addEventListener("click", function () {
		yesNo.innerText = isCorrect[1];
	})
}

function nextQuestion() {
	if (yesNo = isCorrect[0] || isCorrect[1]) { questionAsker2() }

}

// ask question 2
function questionAsker2() {
	for (var i = 0; i < ask.length; i++) {
		question.innerText = ask[1];
	}
	for (var i = 0; i < question1.length; i++) {
		answer1.innerText = question2[0];
		answer2.innerText = question2[1];
		answer3.innerText = question2[2];
		answer4.innerText = question2[3];
	}
}
//check is answer is correct
function checkAnswer2() {
	answer2.addEventListener("click", function () {
		yesNo.innerText = isCorrect[0]
	})
	answer1.addEventListener("click", function () {
		yesNo.innerText = isCorrect[1];
	})
	answer3.addEventListener("click", function () {
		yesNo.innerText = isCorrect[1];
	})
	answer4.addEventListener("click", function () {
		yesNo.innerText = isCorrect[1];
	})
}








