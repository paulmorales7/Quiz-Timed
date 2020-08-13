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