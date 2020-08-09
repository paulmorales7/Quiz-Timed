const question = document.getElementById("question");
console.log(question);
const choices = Array.from(document.getElementsByClassName("choice-text"));

let currentQuestion = {};
let acceptingAnswers = true;
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
console.log(questions);
const maxQuestions = 5;

function startGame() {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions]

    getNewQuestion();
};
console.log(currentQuestion)
function getNewQuestion() {
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];

    question.innerText = currentQuestion.question;

}

startGame();