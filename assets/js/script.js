var savedScoreArray = [];
var introBtn = document.getElementById("btn");
var intro = document.getElementById("quiz-intro");
var quizContent = document.getElementById("quiz-content");
var questionEl = document.getElementById("question");
var choiceBtnEl = document.getElementById("choice-btn");
var right = document.getElementById("right");
var wrong = document.getElementById("wrong");
var submitScore = document.getElementById("submit");
var scoreList = document.getElementById("score-list");
var initialsInput = document.querySelector("#name");
var timerEl = document.getElementById("quiz-timer");
var questions = questions;
var questionIndex = 0;

function quizStart() {
    introBtn.classList.add("hide");
    intro.classList.add("hide");
    quizContent.classList.remove("hide");
    quizTimer();
};

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
    var timeLeft = 60;
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
            alert("You've ran out of time");
            return showScores();
        } 
    }, 1000);
};

//stops timer, displays score, prompts user to submit initials, returns to beginning of quiz
function showScores() {
    timerEl.classList.add("hide");
    let quizEndHTML = 
    `<h1 class="complete">Quiz Completed</h1>
    <h2 class="score" id='score'> You scored: ${quiz.score} of ${quiz.questions.length}</h2>
    <label for="name" class="label">Enter your initials to save your score:</label>
    <input type="text" placeholder="Your Initials" name="name" id="name" class="form-input" />
    <a href="index.html"><button type="submit" id="submit">Submit Score</button></a>
    <div class="quiz-repeat">
        <a href="index.html">Take Quiz Again</a>
    </div>`;
    let quizElement = document.getElementById("quiz-content");
    quizElement.innerHTML = quizEndHTML;
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
            //add this after pushing quiz feature
            right.classList.remove("hide-right");
            wrong.classList.add("hide-wrong");
        } else {
            wrong.classList.remove("hide-wrong");
            right.classList.add("hide-right");
            //add this after pushing quiz feature
        }
    //move onto next question
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
        "The condition in an if/else statement is enclosed with _______ :", ["quotes", "curly brackets", "parenthesis", "square brackets"], "paranthesis"
    ),
    new Question (
        "Arrays in JavaScript can be used to store______.:", ["numbers and strings", "other arrays", "booleans", "all of the above"], "numbers and strings"
    ),
    new Question (
        "String values must be enclosed within _____ when being assigned to variables:", ["commas", "curly brackets", "quotes", "parenthesis"], "paranthesis"
    ),
    new Question (
        "A very useful tool used during development and debugging for printing content to the debugger is:", ["Javascript", "terminal/bash", "for loops", "console.log"], "console.log"
    )
]

let quiz = new Quiz(questions);

//display the questions
nextQuestion();

//hides intro page, loads nextQuestion
introBtn.addEventListener("click", quizStart);