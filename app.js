// Generate choice for computer
// Prompt user for choice
// Play round by comparing choices
// Tally score of overall match
// Return string declaring round winner and match score
// Repeat for 5 rounds (or until one player reaches 3?)

function getCompChoice() {
    const choices = ["rock", "paper", "scissors"]
    return choices[Math.floor(Math.random()*choices.length)];
}

let compChoice = getCompChoice();

let playerChoice = toLowerCase.prompt("Rock, Paper, or Scissors?:")

function playRound(compChoice, playerChoice) {
    if (compChoice === "rock") {
        if (playerChoice === "scissors") {
            return "You lose! Rock beats Scissors.";
        } else if (playerChoice === "paper") {
            return "You win! Paper beats Rock.";
        } else if (playerChoice === "rock") {
            return "It's a tie!";
        }
    } else if (compChoice === "paper") {
        if (playerChoice === "rock") {
            return "You lose! Paper beats Rock.";
        } else if (playerChoice === "scissors") {
            return "You win! Scissors beats Paper.";
        } else if (playerChoice === "paper") {
            return "It's a tie!";
        }
    } else if (compChoice === "scissors") {
        if (playerChoice === "paper") {
            return "You lose! Scissors beats Paper.";
        } else if (playerChoice === "rock") {
            return "You win! Rock beats Scissors.";
        } else if (playerChoice === "scissors") {
            return "It's a tie!";
        }
    }
}



console.log(compChoice);
console.log(playerChoice);
console.log(playRound(compChoice, playerChoice));