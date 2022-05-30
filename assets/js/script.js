//array to hold answers picked
var userAnswers = [];

//array to hold high scores
var saveScore = [];

//variables 
var timerStart = 75;
var timer = 75;
var quizScore = 0;
var currentQuestion = 0;

var timer = document.getElementById("time");
var intro = document.getElementById("quiz-intro");
var introBtn = document.getElementById("btn");
var quizContent = document.getElementById("quiz-content")
var questionEl = document.getElementById("question");
var choiceBtnEl = document.getElementById("choice-btn");

var questionArray, currentQuestion

//list of questions and answers
var questions = [
    {
        question: "Commonly used data types DO not include:",
        answer: [ 
            {text: "1. strings", answer: false},
            {text: "2. booleans", answer: true},
            {text: "3. alerts", answer: false},
            {text: "4. numbers", answer: false}
        ]
    },
    {
        question: "The condition in an if/else statement is enclosed with _______ :",
        answer: [ 
            {text: "1. quotes", answer: false},
            {text: "2. curly brackets", answer: false},
            {text: "3. parenthesis", answer: true},
            {text: "4. square brackets", answer: false}
        ]
    },
    {
        question: "Arrays in JavaScript can be used to store______.:",
        answer: [ 
            {text: "1. numbers and strings", answer: false},
            {text: "2. other arrays", answer: false},
            {text: "3. booleans", answer: false},
            {text: "4. all of the above", answer: true}
        ]
    },
    {
        question: "String values must be enclosed within _____ when being assigned to variables:",
        answer: [ 
            {text: "1. commas", answer: false},
            {text: "2. curly brackets", answer: true},
            {text: "3. quotes", answer: false},
            {text: "4. parenthesis", answer: false}
        ]
    },
    {
        question: "String values must be enclosed within _____ when being assigned to variables:",
        answer: [ 
            {text: "1. commas", answer: false},
            {text: "2. curly brackets", answer: false},
            {text: "3. for loops", answer: true},
            {text: "4. parenthesis", answer: false}
        ]
    }
]

function showQuestion(question) {
    questionEl.innerText = question.question
}

//function that starts quiz
function quizStart() {
    introBtn.classList.add("hide");
    intro.classList.add("hide");
    currentQuestion = 0;
    quizContent.classList.remove("hide");
    nextQuestion();
//function that starts the timer

}

//function for timer
/*
var quizTimer() {
    let counter = 75
    setInterval(() => {
        counter--
        timer.innerHTML(counter)
    }, 1000);
    nextQuestion();
}
*/
//function that loads in next question and alerts if they picked the right or wrong answer.
function nextQuestion () {
    showQuestion(questionArray[currentQuestion]);
}

function showQuestion(question) {
    questionEl.innerText = question.question
    question.answers.array.forEach(answer => {
        var button = document.createElement("button")
        button.innerText = answer.text
    });
}

//function that will end the quiz if the timer reaches 0/ alert("You've reached the time limit")

//function that tallies score based on correct answers
function choiceAnswer () {

}

//function: "your score. Return to beginning + see high scores"



//clears quiz content, loads in first question
introBtn.addEventListener("click", quizStart);