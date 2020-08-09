var questions = [
    {
        message: "Inside which HTML element do we put the JavaScript?",
        choices: ["<scripting>", "<js>", "<javascript>", "<script>"],
        answer: "<script>"
    },

    {
        message: "Inside which HTML element do we put the JavaScript?",
        choices: ["Body", "head", "div", "script"],
        answer: "Body"
    },

    {
        message: "Which built-in method returns the length of the string?",
        choices: ["size()", "index()", "length()", "function()"],
        answer: "length()"
    },

    {
        message: "Which of the following function of String object returns the calling string value converted to upper case?",
        choices: ["toLocaleUpperCase()", "toUpperCase", "toString()", "substring()"],
        answer: "toUpperCase"
    },

    {
        message: "Which of the following function of Array object removes the last element from an array and returns that element?",
        choices: ["pop()", "push()", "join()", "map()"],
        answer: "pop()"
    }

];

var questionCounter = 0;
var timer = 60;


var startButton = document.getElementById("start-btn")
var answerButtonsEl = document.getElementById("answer-buttons");
var cardBodyEl = document.querySelector(".card-body")
var questionEl = document.getElementById("questions")

startButton.addEventListener("click", startGame)

function startGame() {
    console.log("started");

    startButton.style.display = "none";

    cardBodyEl.style.display = "none";

    answerButtonsEl.style.display = "block";
    document.getElementById("question-container").removeAttribute("class");

    showQuestion();
};

function showQuestion(questions) {
    questionEl.innerText = questions.message
}


function answerChose() {

}