//------ Declaring global variables here ------
//Score Keeping and Timer
var UserScore = 0;
var quizTime = 60;
var timeLeft = 60;

//Questions Array
var questionNumber = 0
//selected answer
var selectedAnswer;

//highscores
var highScores = JSON.parse(localStorage.getItem("highScores")) || [];

// ------------ Get Elements from HTML -----------------
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
var userScoreLabel = document.getElementById("userScoreLabel");
var resultLabel = document.getElementById("resultLabel");


//endQuiz container form.
var endQuizContainer = document.getElementById("endQuizContainer");
var highscoresHeader = document.getElementById("highscoresHeader");
var youScoredHeader = document.getElementById("youScoredHeader");
var submitHighscores = document.getElementById("submitHighscores");
var HighscoreName = document.getElementById("highscoreName");
var submitScoreBtn = document.getElementById("submitScoreBtn");
var highscoresList = document.getElementById("highscoresList");
var restartQuizBtn = document.getElementById("restartQuizBtn")


// -----------------------functions-----------------------
function startQuiz() {
startQuizBox.style.display ="none"
    questionContainer.style.display = "flex"
    loadQuestions()
    var startTimer = setInterval(function() {
        quizTime--;
        timerText.textContent = "Time left: " + quizTime + " Seconds.";
        if(quizTime <= 0) {
            clearInterval(startTimer);
            endQuiz()
        }
    }, 1000); 
    
}

// Load the questions into the button htmls 
function loadQuestions() {
    questionHead.textContent = questions[questionNumber].question;
    answerBtn1.textContent = questions[questionNumber].answerList[0];
    answerBtn2.textContent = questions[questionNumber].answerList[1];
    answerBtn3.textContent = questions[questionNumber].answerList[2];
    answerBtn4.textContent = questions[questionNumber].answerList[3];
}
// function to gather the selected answer 
function selectedAnswer1() {
    selectedAnswer = 0;
    checkIfCorrect();
   
}
function selectedAnswer2() {
    selectedAnswer = 1;
    checkIfCorrect();
}
function selectedAnswer3() {
    selectedAnswer = 2;
    checkIfCorrect();
}
function selectedAnswer4() {
    selectedAnswer = 3;
    checkIfCorrect();
}

// function to check if the selected answer is correct 
function checkIfCorrect() {

    if (questions[questionNumber].correctAnswer === selectedAnswer && questionNumber < questions.length - 1) {
        resultLabel.textContent = "Correct"
        answerBox.style.backgroundColor = "var(--correct)";
        console.log("correctAnswer")
        questionNumber++;
        UserScore += 10;
        userScoreLabel.textContent = " Question " + (questionNumber + 1) + " of " + (questions.length) + "  Score: " + UserScore
        loadQuestions()
    } else if (questions[questionNumber].correctAnswer !== selectedAnswer) {
        quizTime -= 10
        resultLabel.textContent = "Wrong Answer - 10 Seconds"
        answerBox.style.backgroundColor = "var(--wrong)";
        questionNumber++;
        userScoreLabel.textContent = " Question " + (questionNumber + 1) + " of " + (questions.length) + "  Score: " + UserScore
        loadQuestions()
    } else {
       endQuiz()
    }
}
// function to end the quiz after the time has run out or questions are finished 
function endQuiz() {
    endQuizContainer.style.display = "flex"
    youScoredHeader.textContent = "Congratulations you scored: " + UserScore
    console.log("GAAMEEEE OVERRR")
    questionContainer.style.display = "none"
    
}   
//function to submit user score to a leaderboard at the end of the quiz
submitScoreBtn.addEventListener("click", function (event) {
    event.preventDefault();
    event.stopPropagation();

    var highscoreDetails = {
        Score: UserScore,
        Name: highscoreName.value,
    };
    highScores.push(highscoreDetails);
    highScores.sort((a, b) => {return b.Score - a.Score});
    localStorage.setItem('highScores', JSON.stringify(highScores))
     renderHighscores()
});

// function to diplay the highscores onto the page 


function renderHighscores() {
    highscoresList.innerHTML = ""
    for (var i = 0; i < highScores.length; i++) {
        highscoresList.innerHTML += "<li>" + "Name: " + highScores[i].Name + " Score: " + highScores[i].Score + "</li>";
    }
}

    
//function to restart the quiz when the restart button is clicked at the end.
function restartQuiz() {
    resultLabel.textContent = "Go - The clock has started"
    answerBox.style.backgroundColor = "blue";
    userScoreLabel.textContent = "First Question"
    UserScore = 0;
    quizTime = 60;
    timeLeft = 60;
    questionNumber = 0
    selectedAnswer;
    endQuizContainer.style.display = "none"
startQuiz()   
}


//---------- Event Listeners Here ------------
//Click to start the quiz
startQuizBtn.addEventListener("click", startQuiz)


//Event listeners for the quiz page answer button.
answerBtn1.addEventListener("click", selectedAnswer1)
answerBtn2.addEventListener("click", selectedAnswer2)
answerBtn3.addEventListener("click", selectedAnswer3)
answerBtn4.addEventListener("click", selectedAnswer4)

restartQuizBtn.addEventListener("click", restartQuiz)
