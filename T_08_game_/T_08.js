let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoreBoard = document.querySelector("#user-score");
const compScoreBoard = document.querySelector("#comp-score");



const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () =>{
    // console.log("Game was draw.");
    msg.innerText = "Game was draw! Play again";
    // msg.classList.add("draw");
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        userScore++;
        userScoreBoard.innerText = userScore;
        // console.log("You win");
        msg.innerText = `You Win! your ${userChoice} beats ${compChoice}`;
        // msg.classList.add("win");
        msg.style.backgroundColor = "Green";
        
    }
    else{
        compScore++;
        compScoreBoard.innerText = compScore;
        // console.log("You lost");
        msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
        // msg.classList.add("lose");
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);

    if(userChoice === compChoice){
        drawGame();
    }
    else {
        let userWin = "true";
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }
        else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
    
};

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        // console.log("Choice was Clicked",userChoice);
        playGame(userChoice);
    });
});