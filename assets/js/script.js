var scoreSavedArray = [];

var introBtn = document.getElementById("btn");
var intro = document.getElementById("quiz-intro");
var quizContent = document.getElementById("quiz-content");
var questionEl = document.getElementById("question");
var choiceBtnEl = document.getElementById("choice-btn");
var score = 0;
var questions = questions;
var questionIndex = 0;

function quizStart() {
    introBtn.classList.add("hide");
    intro.classList.add("hide");
    quizContent.classList.remove("hide");
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

//function that calculates scores at end of quiz and creates html to let you try again, repeats back to original state.
function showScores() {
    let quizEndHTML = 
    `<h1>Quiz Completed</h1>
    <h2 id='score'> Your scored: ${quiz.score} of ${quiz.questions.length}</h2>
    <div class="quiz-repeat">
        <a href="index.html">Take Quiz Again</a>
    </div>`;
    let quizElement = document.getElementById("quiz-content");
    quizElement.innerHTML = quizEndHTML;

    //calls saveScore function
    saveScore();
};

//save score function
function saveScore () {
    window.prompt("Enter your initials to save your score.");
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