
let gameChoices = ['Rock', 'Paper', 'Scissors'];
let gameChoicesLower = ['rock', 'paper', 'scissors'];



function getComputerChoice() {
    
    let randomNum = Math.floor(Math.random() * gameChoices.length);
    return gameChoices[randomNum];
}



// the input for this function will always be lowercase
function roundDecide(player, computer) {
    
    let playerIndex = gameChoicesLower.indexOf(player);
    let computerIndex = gameChoicesLower.indexOf(computer);

    if (player == computer) {
        return `Draw! You both picked ${gameChoices[playerIndex]}`;
    } else if ((player == 'rock' && computer == 'scissors') || (player == 'paper' && computer == 'rock') || (player == 'scissors' && computer == 'paper')) {
        return `You Win! ${gameChoices[playerIndex]} beats ${gameChoices[computerIndex]}!`
    } else {
        return `You Lose! ${gameChoices[playerIndex]} loses to ${gameChoices[computerIndex]}!`
    }
}



function playRound(playerSelection, computerSelection) {

    let playSelectLower = playerSelection.toLowerCase()
    let compSelectLower = computerSelection.toLowerCase()
    
    return roundDecide(playSelectLower, compSelectLower);
}

    
let ps = 'rock'
let cs = getComputerChoice();
console.log(cs);
console.log(playRound(ps, cs));

function game() {
    let userChoice;
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        userChoice = prompt('Pick Rock, Paper, or Scissors!');

        while (!(gameChoicesLower.includes(userChoice.toLowerCase()))) {
            userChoice = prompt('Please pick Rock, Paper, or Scissors!');
        }

        result = playRound(userChoice, getComputerChoice());
        
        if (result.includes('Win')) {
            playerScore += 1
        } else if (result.includes('Lose')) {
            computerScore += 1
        }

        console.log(result);
    }

    if (playerScore > computerScore) {
        return `You Win! Game ends at ${playerScore} - ${computerScore}!`
    } else if (playerScore < computerScore) {
        return `You Lose! Game ends at ${playerScore} - ${computerScore}!`
    } else {
        return `Draw Game! Game ends at ${playerScore} - ${computerScore}!`
    }
}