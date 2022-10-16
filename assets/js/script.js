// Start button code. 
//when i click the start button: 
    //i want the startQuizBox to hide and the questionContainer to Display. document.getElementById("element").style.display = "none";
    //I want the timer to start at 60 seconds and decrement
    //I want the questionContainer to populate with the questions and answers.
    //When i click an answer i want to evaluate if the answer was correct or wrong.
        //On correct:
            //Move to the next question
            //display correct in the resultsBox
            //add 1 to the users score
        //on Wrong.
            //Move to the next question
            //display wrong in the resultsbox
            //dont add to user score
            //deduct 10 seconds from the timer

//Score Keeping and Timer
var UserScore = 0;
var quizTime = 60;
var timeLeft = 60;

//Questions Array
var questionNumber = 0

// Get Elements from HTML
//start quiz form.
var startQuizBox = document.getElementById("startQuizBox");
var startQuizHeader = document.getElementById("startQuizHeader");
var startQuizRules = document.getElementById("quizRules");
var startQuizBtn = document.getElementById("startQuizBtn");

//question container form.
var questionContainer = document.getElementById("questionContainer");
var timer = document.getElementById("timerText");
var questionHead = document.getElementById("questionHead");
var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");
var answer4 = document.getElementById("answer4");
var resultLabel = document.getElementById("resultLabel");


function startQuiz() {
startQuizBox.style.display ="none"
    questionContainer.style.display = "flex"
    startQuestions()
    var startTimer = setInterval(function() {
        quizTime--;
        timerText.textContent = "Time left: " + quizTime + " Seconds.";
        if(quizTime <= 0) {
            clearInterval(startTimer);
            // if (questionIndex < questions.length - 1) {
            //     gameOver();
            // }
        }
    }, 1000); 
    
}

function startQuestions() {
    questionHead.textContent = questions[questionNumber].question;
    answer1.textContent = questions[questionNumber].answerList[0];
    answer2.textContent = questions[questionNumber].answerList[1];
    answer3.textContent = questions[questionNumber].answerList[2];
    answer4.textContent = questions[questionNumber].answerList[3];
}



startQuizBtn.addEventListener("click", startQuiz)
