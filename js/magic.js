const ball = document.getElementById("8-ball-img");
const answer = document.getElementById("magic-answer");

// array of possible answers
const answersArr = [
    "yes!",
    "no.",
    "perhaps...",
    "ask again later.",
    "the answer is unclear...",
    "hell no!",
    "don't count on it",
    "wait and see."
];

// function to get & display answer
function getAnswer(){

    const min = 0;
    const max = answersArr.length - 1;

    // random int function to get index of answer
    const randIndex = Math.floor(Math.random() * (max - min + 1)) + min;
    answer.innerHTML = answersArr[randIndex];
}

// click event listener to get answer
ball.addEventListener("click", function(){
    getAnswer();
});