var startquiz = document.getElementById("startquiz")
var firstScreen = document.getElementById("firstScreen")
var timeEl = document.querySelector(".time");
var secondsLeft = 3;
//
startquiz.addEventListener("click",
	function removeElement(start) {
		// Removes button and first heading
		firstScreen.parentNode.removeChild(firstScreen);
//sets timer
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

		function sendMessage() {
			timeEl.textContent = "Time up champion ";
		}
		setTime();
	}
	

)

//establish quiz questions
function quizStart (){
	var quiz = document.getElementById("#quizBody");
	var questionOne = document.createElement ("P");
	questionOne.innerText = "What does HTML stand for?";
	quiz.appendChild(questionOne);
	}







