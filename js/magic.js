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

// function to get  answer from array & display it
function getAnswer(){

    const min = 0;
    const max = answersArr.length - 1;

    // random int function to get array index of answer
    const randIndex = Math.floor(Math.random() * (max - min + 1)) + min;
    answer.innerHTML = answersArr[randIndex];
}

// click event listener to get answer
ball.addEventListener("click", async function(){

    // get user's question
    const question = document.getElementById("user-question").trim();
    if(!question){
        answer.innerHTML = "you haven't entered a question...";
        return; // exits click function/stops rest of script from executing if no question asked
    }
    
    getAnswer();
});