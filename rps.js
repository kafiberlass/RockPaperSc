function getComputerChoice() {
    let result = Math.round(Math.random() * (2 - 0) + 0);
    switch (result) {
        case 0:
        return "rock";
        break;

        case 1:
            return "paper";
        break;

        case 2:
            return "scissors";
        break;
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == "rock" && computerSelection == "rock") {
        return "Draw";
    }
    if (playerSelection.toLowerCase() == "rock" && computerSelection == "paper") {
        return "You lose! Paper beats Rock";
    }
    if (playerSelection.toLowerCase() == "rock" && computerSelection == "scissors") {
        return "You win! Rock beats Scissors";
    }
    if (playerSelection.toLowerCase() == "paper" && computerSelection == "rock") {
        return "You win! Paper beats Rock";
    }
    if (playerSelection.toLowerCase() == "paper" && computerSelection == "paper") {
        return "Draw";
    }
    if (playerSelection.toLowerCase() == "paper" && computerSelection == "scissors") {
        return "You lose! Scissors beats Paper";
    }
    if (playerSelection.toLowerCase() == "scissors" && computerSelection == "rock") {
        return "You lose! Rock beats Scissors!";
    }
    if (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper") {
        return "You lose! Scissors beats Paper";
    }
    if (playerSelection.toLowerCase() == "scissors" && computerSelection == "scissors") {
        return "Draw";
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        alert(playRound(prompt("enter your weapon"), getComputerChoice()));
    }
}

game();