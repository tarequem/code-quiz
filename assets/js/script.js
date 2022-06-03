var introBtn = document.getElementById("btn");
var viewScores = document.getElementById("high-scores");
var intro = document.getElementById("quiz-intro");
var quizContent = document.getElementById("quiz-content");
var questionEl = document.getElementById("question");
var choiceBtnEl = document.getElementById("choice-btn");
var right = document.getElementById("right");
var wrong = document.getElementById("wrong");
var initialsInput = document.querySelector("#name");
var timerEl = document.getElementById("quiz-timer");
var questions = questions;
var questionIndex = 0;
var scoreBtn = document.getElementById("high-scores");
var submitScore = document.getElementById("submit");
var scoreList = document.getElementById("score-list");
var timeLeft = 60;

//function that hides hero at the start to make room for quiz & starts timer
function quizStart() {
    introBtn.classList.add("hide");
    intro.classList.add("hide");
    quizContent.classList.remove("hide");
    quizTimer();
};

//function for loading next question and choices
function nextQuestion() {
    if (quiz.isEnded()) {
        showScores();
    } else {
        // show question
        let questionElement = document.getElementById("question");
        questionElement.innerHTML = quiz.getQuestionIndex().text;

        // show options
        let choices = quiz.getQuestionIndex().choices;
        for (let i = 0; i < choices.length; i++) {
            let choiceElement = document.getElementById("choice" + i);
            choiceElement.innerHTML = choices[i];
            response("btn" + i, choices[i]);
        }
    }
};

//function for user responses
function response (id, response) {
    let button = document.getElementById(id);
    button.onclick = function() {
        quiz.response(response);
        nextQuestion();
    }
};

//function for timer
function quizTimer() {
    var timeInterval = setInterval(function() {
        if (timeLeft > 1) {
            timerEl.textContent = ' Timer: ' + timeLeft;
            timeLeft--;
        } else if (timeLeft === 1) {
            timerEl.textContent = ' Timer: ' + timeLeft;
            timeLeft--;
        } else {
            timerEl.textContent = "";
            clearInterval(timeInterval);
            return showScores();
        } 
    }, 1000);
};

//stops timer, displays score, prompts user to submit initials, returns to beginning of quiz
function showScores() {
    timerEl.classList.add("hide");
    let quizEndHTML = 
    `<h1 class="complete">Quiz Completed</h1>
    <h2 class="score"> You scored: <scan id="score">${timeLeft}</scan></h2>
    <label for="initials" class="label">Enter your initials to save your score:</label>
    <input type="text" placeholder="Your Initials" name="initials" id="initials" class="form-input" maxLength="2"/>
    <button onclick="saveScore()" type="button" class="score-btn" id="submit-btn" value="Submit Initials"><a href="index.html">Submit Score</a></button>
    <div class="quiz-repeat">
        <a href="index.html">Take Quiz Again</a>
    </div>`;
    let quizElement = document.getElementById("quiz-content");
    quizElement.innerHTML = quizEndHTML;
};

//array for scores, loads from array
var scoreArray = JSON.parse(localStorage.getItem("scoreArray")) || [];


//function for storing high scores
function saveScore() {
    //turns initials input and score into values for object
    var initialsVal = document.getElementById("initials").value;
    var scoreVal = document.getElementById("score").textContent;

    //storing initials and score into an object, then pushes into array
    var scoreObj = {initials: initialsVal, score: scoreVal};
    scoreArray.push(scoreObj);
    
    //stores array into local storage
    localStorage.setItem("scoreArray", JSON.stringify(scoreArray));
};

//function that turns initialsVal and scoreVal into li item, before ol around il becomes an object for storage. 
viewScores.addEventListener("click", function() {
    var ol = "<ol>"
    scoreArray.forEach(function (scoreObj) {
        ol += "<li>" + JSON.stringify(scoreObj) + "</li>"
    });
    ol += "</ol>";
    document.getElementById("score-list").innerHTML = ol + "<button onclick='closeScore()' class='hide-list' type='button' id='close-score'>Close Scores</button>";

    scoreList.classList.remove("hide");

});

//hides the scorelist when button is clicked
function closeScore() {
    scoreList.classList.add("hide");
};


//logic for questions and scoring
class Quiz {
    constructor(questions) {
        this.score = 0;
        this.questions = questions;
        this.questionIndex = 0;
    };
    getQuestionIndex () {
        return this.questions[this.questionIndex];
    };

    //adds score if correct
    response(correct) {
        if (this.getQuestionIndex().answerCheck(correct)) {
            this.score++;
            //tells user answer was right
            right.classList.remove("hide-right");
            wrong.classList.add("hide-wrong");
        } else {
            //tells user answer was wrong, takes away 10 seconds
            wrong.classList.remove("hide-wrong");
            right.classList.add("hide-right");
            timeLeft -= 10;
        }
    //adds to question index
        this.questionIndex++;
    };

    isEnded() {
        return this.questionIndex === this.questions.length;
    }
};

//question class
class Question {
    constructor(text, choices, correct) {
        this.text = text;
        this.choices = choices;
        this.correct = correct;
    }
    //checks if correct
    answerCheck(choice) {
        return this.correct === choice;
    } 
};

//array of questions and answers
var questions = [
    new Question (
        "Commonly used data types DO not include:", ["strings", "booleans", "alerts", "numbers"], "alerts"
    ),
    new Question (
        "The condition in an if/else statement is enclosed with _______ :", ["quotes", "curly brackets", "parenthesis", "square brackets"], "parenthesis"
    ),
    new Question (
        "Arrays in JavaScript can be used to store______.:", ["numbers and strings", "other arrays", "booleans", "all of the above"], "numbers and strings"
    ),
    new Question (
        "String values must be enclosed within _____ when being assigned to variables:", ["commas", "curly brackets", "quotes", "parenthesis"], "quotes"
    ),
    new Question (
        "A very useful tool used during development and debugging for printing content to the debugger is:", ["Javascript", "terminal/bash", "for loops", "console.log"], "console.log"
    )
]

let quiz = new Quiz(questions);


nextQuestion();

//hides intro page, loads nextQuestion
introBtn.addEventListener("click", quizStart);