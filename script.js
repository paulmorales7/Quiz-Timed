const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const questionCounterText = document.getElementById("questionCounter");
const timeEl = document.getElementById("Time");


let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        choice1: "<scripting>",
        choice2: "<js>",
        choice3: "<javascript>",
        choice4: "<script>",
        answer: 4
    },

    {
        question: "Inside which HTML element do we put the JavaScript?",
        choice1: "Body",
        choice2: "head",
        choice3: "div",
        choice4: "script",
        answer: 1
    },

    {
        question: "Which built-in method returns the length of the string?",
        choice1: "size()",
        choice2: "index()",
        choice3: "length()",
        choice4: "function()",
        answer: 3
    },

    {
        question: "Which of the following function of String object returns the calling string value converted to upper case?",
        choice1: "toLocaleUpperCase()",
        choice2: "toUpperCase",
        choice3: "toString()",
        choice4: "substring()",
        answer: 2
    },

    {
        question: "Which of the following function of Array object removes the last element from an array and returns that element?",
        choice1: "pop()",
        choice2: "push()",
        choice3: "join()",
        choice4: "map()",
        answer: 1
    }

];

const maxQuestions = 5;

function startGame() {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions]

    getNewQuestion();
};

function getNewQuestion() {
    if (availableQuestions.length === 0 || questionCounter >= maxQuestions) {
        localStorage.setItem("mostRecentScore", score);
        return window.location.assign("endpage.html")
    }
    questionCounter++;
    questionCounterText.innerText = questionCounter + "/" + maxQuestions;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];

    question.innerText = currentQuestion.question;

    choices.forEach(function (choice) {
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number];
    });

    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;
};

choices.forEach(function (choice) {
    choice.addEventListener("click", function (e) {
        if (!acceptingAnswers)
            return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];

        const classToApply = selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

        selectedChoice.parentElement.classList.add(classToApply);


        getNewQuestion();
    });
});


startGame();

const userName = document.getElementsById("username")
const submitScoreBtn = document.getElementsById("submitScorebtn");
const mostRecentScore = localStorage.getItem("mostRecentScore");
const finalScore = document.getElementsById("finalScore");

finalScore.innerText = mostRecentScore;

userName.addEventListener("keyup", function () {
    console.log(userName.value);
})

function submitHighScore(e) {
    console.log("clicked the save button");
    e.preventDefault();
}