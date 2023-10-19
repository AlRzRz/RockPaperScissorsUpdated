
// Start Screen
let startScreenDisplay = document.querySelector('.start-screen');
let mainGameDisplay = document.querySelector('.main-game');
let startButton = document.querySelector('.startButton');

startButton.addEventListener('click', () => {
    startScreenDisplay.style.display = 'none';
    mainGameDisplay.style.display = 'flex';
})



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


let pselectimg = document.querySelector('.playerselectionimg');
let cselectimg = document.querySelector('.compselectionimg');


function imageChange(pselect, cselect) {
    
    if (pselect === 'rock') {
        pselectimg.src = 'rock.png';
    } else if (pselect === 'paper') {
        pselectimg.src = 'paper.png';
    } else {
        pselectimg.src = 'scissors.png';
    }

    if (cselect === 'rock') {
        cselectimg.src = 'rock.png';
    } else if (cselect === 'paper') {
        cselectimg.src = 'paper.png';
    } else {
        cselectimg.src = 'scissors.png';
    }
}



function playRound(playerSelection, computerSelection) {

    let playSelectLower = playerSelection.toLowerCase()
    let compSelectLower = computerSelection.toLowerCase()

    imageChange(playSelectLower, compSelectLower);
    
    return roundDecide(playSelectLower, compSelectLower);
}



let buttonrock = document.querySelector('.rock');
let buttonpaper = document.querySelector('.paper');
let buttonscissors = document.querySelector('.scissors');
let roundresult = '';
let resultDisplay = document.querySelector('.roundtext');
let p1 = document.querySelector('.p1');
let p2 = document.querySelector('.p2');


buttonrock.addEventListener('click', () => {
    roundresult = playRound('rock', getComputerChoice())
    resultDisplay.textContent = roundresult;
    p1.textContent = 'Game in Progress';
    p2.textContent = '';
    p1.style.fontSize = '26px';
    scoreTracker(roundresult);
});

buttonpaper.addEventListener('click', () => {
    roundresult = playRound('paper', getComputerChoice())
    resultDisplay.textContent = roundresult;
    p1.textContent = 'Game in Progress';
    p2.textContent = '';
    p1.style.fontSize = '26px';
    scoreTracker(roundresult);
});

buttonscissors.addEventListener('click', () => {
    roundresult = playRound('scissors', getComputerChoice())
    resultDisplay.textContent = roundresult;
    p1.textContent = 'Game in Progress';
    p2.textContent = '';
    p1.style.fontSize = '26px';
    scoreTracker(roundresult);
});


// SCORE TRACKER BELOW

let pscore = document.querySelector('.playerscore');
let cscore = document.querySelector('.compscore');
let dscore;
let roundArray = [0, 0];

let gameEndScreen = document.querySelector('.game-end-screen');
let winnerFinalize = document.querySelector('.winnerFinalize');
let restartButton = document.querySelector('.restartButton');
let homeButton = document.querySelector('.homeButton') 


function checkGameOver() {
    if (roundArray.includes(5)) {
        mainGameDisplay.style.display = 'none';
        gameEndScreen.style.display = 'flex';

        if (roundArray[0] > roundArray[1]) {
            winnerFinalize.textContent = `You Win! Game ends at ${roundArray[0]} - ${roundArray[1]}!`
        } else {
            winnerFinalize.textContent = `You Lose! Game ends at ${roundArray[0]} - ${roundArray[1]}!`
        }

        pscore.textContent = '0';
        cscore.textContent = '0';
        pselectimg.src = 'questionmark.png';
        cselectimg.src = 'questionmark.png';
        resultDisplay.textContent = '';
        roundArray = [0, 0];
        p1.textContent = 'Welcome to the Game!';
        p1.style.fontSize = '20px';
        p2.textContent = 'Pick Either Rock, Paper, or Scissors Below!';
    }
}

restartButton.addEventListener('click', () => {
    mainGameDisplay.style.display = 'flex';
    gameEndScreen.style.display = 'none';
})

homeButton.addEventListener('click', () => {
    startScreenDisplay.style.display = 'flex';
    gameEndScreen.style.display = 'none';
})

function scoreTracker(aResult) {
    let placeholder;

    if (aResult.includes('Win')) {
        placeholder = Number(pscore.textContent);
        placeholder += 1;
        roundArray[0] = placeholder;
        pscore.textContent = placeholder.toString();
        checkGameOver();
    } else if (aResult.includes('Lose')) {
        placeholder = Number(cscore.textContent);
        placeholder += 1;
        roundArray[1] = placeholder;
        cscore.textContent = placeholder.toString();
        checkGameOver();
    } else {
        dscore += 1
    }
}


