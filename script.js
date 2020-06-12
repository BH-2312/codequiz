var startquiz = document.getElementById("startquiz");
var firstScreen = document.getElementById("firstScreen");
var timeEl = document.querySelector(".time");
var secondsLeft = 30;
//var question1 = ["1910", "1920", "1930", "1940"];
//var question2 = ["John", "Paul", "Ringo", "George"]
var answers = document.getElementById("answers");
//var test = document.getElementById("test");
//var answer1 = document.getElementById("answer1");
//var answer2 = document.getElementById("answer2");
//var answer3 = document.getElementById("answer3");
//var answer4 = document.getElementById("answer4");
var questionNo = document.getElementById("questionNo");
var quiz = document.getElementById("quizBody");
var yesNo = document.getElementById("yesNo");
var ask = ["What yr was HTML invented", " What does var mean in javascript", "What does CSS stand for?", "What is a stylesheet?"]
var question = document.getElementById("question");
var isCorrect = ["Yes that is correct", "No, you got that wrong!"]
var newQuestion = [
	{
		question: "What yr was HTML invented",
		choice1: "1910",
		choice2: "1920",
		choice3: "1930",
		choice4: "1940",
		correct: "1",
	},
	{
		question: "What does var mean in javascript",
		choice1: "John",
		choice2: "Paul",
		choice3: "Ringo",
		choice4: "George",
		correct: "2",
	},
	{
		question: "hello team",
		choice1: "Wayne",
		choice2: "Paul",
		choice3: "Ringo",
		choice4: "Kim",
		correct: "4",
	}]
var lastQuestionIndex = newQuestion.length - 1;
var runningQuestionIndex = 0;
var scoreboard = document.getElementById("scoreboard");



// start button to begin quiz
startquiz.addEventListener("click", function (event) {
	// Removes button and first heading
	firstScreen.parentNode.removeChild(firstScreen)
	//sets timer
	setTime();
	//start the quiz
	quizStart()
	//run render question function
	renderQuestion();
	//check answer
	checkAnswer(answer);
	//run scoreboard
	scoreboard();
	

});
//ask question 1
//questionAsker1();
//is it correct?
//checkAnswer1();
//ask question 2
//questionAsker2();
//is it correct?
//checkAnswer2()


function setTime() {
	var timerInterval = setInterval(function () {
		secondsLeft--;
		timeEl.textContent = secondsLeft + " seconds left";

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
//new function to ask questions
function renderQuestion() {
	var q = newQuestion[runningQuestionIndex];
	question.innerHTML = q.question;
	answer1.innerHTML = q.choice1;
	answer2.innerHTML = q.choice2;
	answer3.innerHTML = q.choice3;
	answer4.innerHTML = q.choice4;
}
//function to check answer and then progress quiz
function checkAnswer(answer) {
	if (newQuestion[runningQuestionIndex].correct == answer) {
		yesNo.innerText = isCorrect[0];
	}else{ yesNo.innerText = isCorrect[1];
		timeoff();

	}
	if(runningQuestionIndex < lastQuestionIndex) {
		runningQuestionIndex++;
		renderQuestion();

	} else{
		score();
		
	}
}

function score(){
	quiz.parentNode.removeChild(quiz);
	scoreboard.style.visibility = "visible";

}
function timeoff(){
	secondsLeft - 10
}
// ask 1st quiz question
/* function questionAsker1() {
	question.innerText = ask[0];
	answer1.innerText = question1[0];
	answer2.innerText = question1[1];
	answer3.innerText = question1[2];
	answer4.innerText = question1[3];
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

	question.innerText = ask[1];
	answer1.innerText = question2[0];
	answer2.innerText = question2[1];
	answer3.innerText = question2[2];
	answer4.innerText = question2[3];

}
//check is answer is correct
function checkAnswer2(event) {
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







*/
