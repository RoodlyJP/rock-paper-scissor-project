//My script for the rock-paper-scissor game
function getComputerChoice(){
    let choice = null;

    let randomNumber = parseInt(Math.random() * 10);

    if(randomNumber % 2 == 0){
        choice = "rock";
    } else if (randomNumber == 5 || randomNumber == 7){
        choice = "paper";
    } else {
        choice = "scissor";
    }

    return choice;
}

function getHumanChoice(){
    let choice = prompt("Enter your choice 'Rock', 'Paper' or 'Scissor': ");
    choice = choice.trim();
    choice = choice.toLowerCase();
    return choice;
}



function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice){
        if(humanChoice == computerChoice){
            console.log("It is a draw!");
        } else if(humanChoice == "rock" && computerChoice == "scissor"){
            console.log("You win! Rock beats Scissor.");
            humanScore++;
        } else if(humanChoice == "rock" && computerChoice == "paper"){
            console.log("You lose! Paper beats Rock.");
            computerScore++;
        } else if(humanChoice == "scissor" && computerChoice == "paper"){
            console.log("You win! Scissor beats Paper.");
            humanScore++;
        } else if(humanChoice == "scissor" && computerChoice == "rock"){
            console.log("You lose! Rock beats Scissor.");
            computerScore++;
        } else if(humanChoice == "paper" && computerChoice == "rock"){
            console.log("You win! Paper beats Rock.");
            humanScore++;
        } else if(humanChoice == "paper" && computerChoice == "scissor"){
            console.log("You lose! Scissor beats Paper.");
            computerScore++;
        } else {
            console.log("Something went wrong!");
        }
    }
    for(let i = 0; i < 5; i++){
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
    
        playRound(humanChoice, computerChoice);
    }
    console.log("Human: " + humanScore + "|" + "Computer: " + computerScore);
    if(humanScore > computerScore){
        console.log("CONGRATULATIONS YOU ARE THE WINNER!");
    } else if(humanScore == computerScore){
        console.log("IT IS A DRAW!");
    } else {
        console.log("YOU LOSE!");
    }
}

playGame();



