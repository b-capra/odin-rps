let compScore = 0;
let playerScore = 0;

function getCompChoice() {
    const choices = ["rock", "paper", "scissors"]
    return choices[Math.floor(Math.random()*choices.length)];
}

function addCompScore() {
    compScore++;
}

function addPlayerScore() {
    playerScore++;
}

function playRound(compChoice, playerChoice) {
    if (compChoice === "rock") {
        if (playerChoice === "scissors") {
            addCompScore();
            return "You lose! Rock beats Scissors.";
        } else if (playerChoice === "paper") {
            addPlayerScore();
            return "You win! Paper beats Rock.";
        } else if (playerChoice === "rock") {
            return "It's a tie!";
        }
    } else if (compChoice === "paper") {
        if (playerChoice === "rock") {
            addCompScore();
            return "You lose! Paper beats Rock.";
        } else if (playerChoice === "scissors") {
            addPlayerScore();
            return "You win! Scissors beats Paper.";
        } else if (playerChoice === "paper") {
            return "It's a tie!";
        }
    } else if (compChoice === "scissors") {
        if (playerChoice === "paper") {
            addCompScore();
            return "You lose! Scissors beats Paper.";
        } else if (playerChoice === "rock") {
            addPlayerScore();
            return "You win! Rock beats Scissors.";
        } else if (playerChoice === "scissors") {
            return "It's a tie!";
        }
    }
}

function logWinner() {
    if (playerScore === 3) {
        console.log("Congratulations, you won!")
    } else if (compScore === 3) {
        console.log("Sorry, you lost.")
    }
}

function game() {
    for (let i = 3; playerScore < i && compScore < i;) {
        let compChoice = getCompChoice();
        let playerChoice = prompt("Rock, Paper, or Scissors?:").toLowerCase();
        console.log(playRound(compChoice, playerChoice));
        console.log(`The score is ${playerScore} - ${compScore}`)
    }

    logWinner();
}

game();