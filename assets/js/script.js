var introBtn = document.getElementById("btn");
var intro = document.getElementById("quiz-intro");
var quizContent = document.getElementById("quiz-content");
var questionEl = document.getElementById("question");
var choiceBtnEl = document.getElementById("choice-btn");
var score = 0;
var questions = 0;

function quizStart() {
    introBtn.classList.add("hide");
    intro.classList.add("hide");
    quizContent.classList.remove("hide");
    for(var i=0; i < questions.length; i++) {
        questionEl.innerText = parseInt(questions[i])
     
    }
}




//hides intro page, loads next question
introBtn.addEventListener("click", quizStart);

//array of questions and answers
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