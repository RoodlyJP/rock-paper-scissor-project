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

function showWinner(){
    const message = document.querySelector("#message");
    if(humanScore > computerScore){
        message.textContent = "CONGRATULATIONS YOU ARE THE WINNER!";
    } else {
        message.textContent = "YOU LOSE!";
    }
}

function showRoundResult(result) {
    const listRoundResult = document.querySelector("#roundResult");
    const roundResult = document.createElement("p");
    roundResult.classList.add = "roundResultHistory";
    roundResult.textContent = result;
    listRoundResult.appendChild(roundResult);
}


function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    let endPart = false;

    function showScore() {
        const hScore = document.querySelector("#hScore");
        hScore.textContent = humanScore;
        const cScore = document.querySelector("#cScore");
        cScore.textContent = computerScore;
    }

    function showWinner(){
        const message = document.querySelector("#message");
        if(humanScore > computerScore){
            message.textContent = "CONGRATULATIONS YOU ARE THE WINNER!";
        } else {
            message.textContent = "YOU LOSE!";
        }
    }

    function reset() {
        humanScore = 0;
        computerScore = 0;
        const roundResult = document.querySelector("#roundResult");
        roundResult.replaceChildren();
        const message = document.querySelector("#message");
        message.textContent = "";
        endPart = false;
    }
    
    function playRound(humanChoice, computerChoice){  
        if(endPart) {
            reset();
        }
        
        if(humanChoice == computerChoice){
            showRoundResult("It is a draw!");
        } else if(humanChoice == "rock" && computerChoice == "scissor"){
            showRoundResult("You win! Rock beats Scissor.");
            humanScore++;
        } else if(humanChoice == "rock" && computerChoice == "paper"){
            showRoundResult("You lose! Paper beats Rock.");
            computerScore++;
        } else if(humanChoice == "scissor" && computerChoice == "paper"){
            showRoundResult("You win! Scissor beats Paper.");
            humanScore++;
        } else if(humanChoice == "scissor" && computerChoice == "rock"){
            showRoundResult("You lose! Rock beats Scissor.");
            computerScore++;
        } else if(humanChoice == "paper" && computerChoice == "rock"){
            showRoundResult("You win! Paper beats Rock.");
            humanScore++;
        } else if(humanChoice == "paper" && computerChoice == "scissor"){
            showRoundResult("You lose! Scissor beats Paper.");
            computerScore++;
        } else {
            alert("Something went wrong!");
        }
        showScore();
        

        if(humanScore == 5 || computerScore == 5) {
            showWinner();
            endPart = true;
        }
    }

    const rockBtn = document.querySelector("#rock");
    rockBtn.addEventListener("click", () => { playRound("rock", getComputerChoice())});

    const paperBtn = document.querySelector("#paper");
    paperBtn.addEventListener("click", () => {playRound("paper", getComputerChoice())});

    const scissorBtn = document.querySelector("#scissor");
    scissorBtn.addEventListener("click", () => {playRound("scissor", getComputerChoice())});

    
}

playGame();



