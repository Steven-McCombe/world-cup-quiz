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
//selected answer
var selectedAnswer;


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
var answerBtn1 = document.getElementById("answerBtn1");
var answerBtn2 = document.getElementById("answerBtn2");
var answerBtn3 = document.getElementById("answerBtn3");
var answerBtn4 = document.getElementById("answerBtn4");
var resultLabel = document.getElementById("resultLabel");


function startQuiz() {
startQuizBox.style.display ="none"
    questionContainer.style.display = "flex"
    loadQuestions()
    var startTimer = setInterval(function() {
        quizTime--;
        timerText.textContent = "Time left: " + quizTime + " Seconds.";
        if(quizTime <= 0) {
            clearInterval(startTimer);
            // if (questionIndex < questions.length - 1) {
            // Need to end the game
        }
    }, 1000); 
    
}


function loadQuestions() {
    questionHead.textContent = questions[questionNumber].question;
    answerBtn1.textContent = questions[questionNumber].answerList[0];
    answerBtn2.textContent = questions[questionNumber].answerList[1];
    answerBtn3.textContent = questions[questionNumber].answerList[2];
    answerBtn4.textContent = questions[questionNumber].answerList[3];
}

function selectedAnswer1() {
    selectedAnswer = 0;
    console.log(selectedAnswer);
    checkIfCorrect();
   
}
function selectedAnswer2() {
    selectedAnswer = 1;
    console.log(selectedAnswer);
    checkIfCorrect();
}
function selectedAnswer3() {
    selectedAnswer = 2;
    console.log(selectedAnswer);
    checkIfCorrect();
}
function selectedAnswer4() {
    selectedAnswer = 3;
    console.log(selectedAnswer);
    checkIfCorrect();
}

function checkIfCorrect() {
    if (questions[questionNumber].correctAnswer === selectedAnswer) {
        resultLabel.textContent = "Correct"
        answerBox.style.backgroundColor = "var(--correct)";
        console.log("correctAnswer")
        questionNumber++;
        loadQuestions()
    } else if (questions[questionNumber].correctAnswer !== selectedAnswer) {
        quizTime -= 10
        resultLabel.textContent = "Wrong Answer - 10 Seconds"
        answerBox.style.backgroundColor = "var(--wrong)";
        questionNumber++;
        loadQuestions()
    }
    }

//Click to start the quiz
startQuizBtn.addEventListener("click", startQuiz)


//Event listeners for the answer button.
answerBtn1.addEventListener("click", selectedAnswer1)
answerBtn2.addEventListener("click", selectedAnswer2)
answerBtn3.addEventListener("click", selectedAnswer3)
answerBtn4.addEventListener("click", selectedAnswer4)
