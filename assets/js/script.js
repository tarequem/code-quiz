//array to hold answers picked
var userAnswers = [];

//array to hold high scores
var saveScore = [];

//variables 
var timerStart = 75;
var timer = 75;
var quizScore = 0;
var questionNumber = 0;

var timer = document.getElementById("time");
var intro = document.getElementById("quiz-intro");
var introBtn = document.getElementById("btn");
var quizContent = document.getElementById("quiz-content")

//list of questions and answers
var questions = [
    {
        question: "Commonly used data types DO not include:",
        answers: [ 
            {text: "1. strings", answers: false},
            {text: "2. booleans", answers: true},
            {text: "3. alerts", answers: false},
            {text: "4. numbers", answers: false}
        ]
    },
    {
        question: "The condition in an if/else statement is enclosed with _______ :",
        answers: [ 
            {text: "1. quotes", answers: false},
            {text: "2. curly brackets", answers: false},
            {text: "3. parenthesis", answers: true},
            {text: "4. square brackets", answers: false}
        ]
    },
    {
        question: "Arrays in JavaScript can be used to store______.:",
        answers: [ 
            {text: "1. numbers and strings", answers: false},
            {text: "2. other arrays", answers: false},
            {text: "3. booleans", answers: false},
            {text: "4. all of the above", answers: true}
        ]
    },
    {
        question: "String values must be enclosed within _____ when being assigned to variables:",
        answers: [ 
            {text: "1. commas", answers: false},
            {text: "2. curly brackets", answers: true},
            {text: "3. quotes", answers: false},
            {text: "4. parenthesis", answers: false}
        ]
    },
    {
        question: "String values must be enclosed within _____ when being assigned to variables:",
        answers: [ 
            {text: "1. commas", answers: false},
            {text: "2. curly brackets", answers: false},
            {text: "3. for loops", answers: true},
            {text: "4. parenthesis", answers: false}
        ]
    }
]

//function that starts quiz
function quizStart(Event) {
    introBtn.classList.add("hide");
    intro.classList.add("hide");
    
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

}

//function that will end the quiz if the timer reaches 0/ alert("You've reached the time limit")

//function that tallies score based on correct answers
function choiceAnswer () {

}

//function: "your score. Return to beginning + see high scores"



//clears quiz content, loads in first question
introBtn.addEventListener("click", quizStart);