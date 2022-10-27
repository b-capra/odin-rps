let compScore = 0;
let playerScore = 0;

function addCompScore() {
    compScore++;
}

function addPlayerScore() {
    playerScore++;
}

const scoreDisplay = document.querySelector('.score');

function updateScoreDisplay() {
    scoreDisplay.textContent = `${playerScore} - ${compScore}`;
}

let finished = false;

function checkWinner() {
    if (playerScore === 5) {
        textDisplay.textContent = "Congratulations, you won!";
        finished = true;
    } else if (compScore === 5) {
        textDisplay.textContent = "Sorry, you lost.";
        finished = true;
    }
}

function getCompChoice() {
    const choices = ["rock", "paper", "scissors"]
    return choices[Math.floor(Math.random()*choices.length)];
}

const textDisplay = document.querySelector('.text');

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

rock.addEventListener('click', () => {
    if (finished) {
        playerScore = 0;
        compScore = 0;
        finished = false;
    }
    let compChoice = getCompChoice();
    textDisplay.textContent = playRound(compChoice, 'rock');
    updateScoreDisplay();
    checkWinner();
});

paper.addEventListener('click', () => {
    if (finished) {
        playerScore = 0;
        compScore = 0;
        finished = false;
    }
    let compChoice = getCompChoice();
    textDisplay.textContent = playRound(compChoice, 'paper');
    updateScoreDisplay();
    checkWinner();
});

scissors.addEventListener('click', () => {
    if (finished) {
        playerScore = 0;
        compScore = 0;
        finished = false;
    }
    let compChoice = getCompChoice();
    textDisplay.textContent = playRound(compChoice, 'scissors');
    updateScoreDisplay();
    checkWinner();
});

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