// Generate choice for computer
// Prompt user for choice
// Play round by comparing choices
// Tally score of overall match
// Return string declaring round winner and match score
// Repeat for 5 rounds (or until one player reaches 3?)

function getCompChoice() {
    const choices = ["Rock", "Paper", "Scissors"]
    return choices[Math.floor(Math.random()*choices.length)];
}