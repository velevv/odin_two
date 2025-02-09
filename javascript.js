function getHumanChoice(){
    let humanChoice = prompt("your turn!");
    return humanChoice;
}

function getComputerChoice(){
    let computerChoice;
    let randomNum = Math.random();
    if (randomNum < 1/3){
        computerChoice = "rock";
    } else if (randomNum > 1/3 && randomNum < 2/3){
        computerChoice = "scissors";
    } else {
        computerChoice = "paper";
    }
    return computerChoice;
}

let humanScore = 0;
let computerScore = 0;
let tieScore;

let winMessage = "You win!";
let loseMessage = "You lose!";
let tieMessage = "It's a tie!";

function playRound(){
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    if (humanChoice == computerChoice) {
        console.log(tieMessage);
        tieScore += 1;
    } else if (humanChoice == "rock" && computerChoice == "paper"
        || humanChoice == "scissors" && computerChoice == "rock"
        || humanChoice == "paper" && computerChoice == "scissors"
    ){
        console.log(loseMessage);
        computerScore+=1;
    } else if (humanChoice == "rock" && computerChoice == "scissors"
        || humanChoice == "paper" && computerChoice == "rock"
        || humanChoice == "scissors" && computerChoice == "paper"
    ) {
        console.log(winMessage);
        humanScore+=1;
    }
}

function playGame(){
    while(computerScore < 5 && humanScore < 5){
        playRound();
    }
    if (computerScore == 5){
        console.log("LOSER!");
    } else if (humanScore == 5){
        console.log("WINNER!");
    }
}

playGame();