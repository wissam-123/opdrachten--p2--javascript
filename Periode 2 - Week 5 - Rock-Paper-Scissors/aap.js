const computerChoiceElement = document.getElementById('computer-choice');
const playerChoiceElement = document.getElementById('player-choice');
const resultOutputElement = document.getElementById('result');

const possibleChoices = document.querySelectorAll('button');

var player = "";
var computer = "";
var result = "";

possibleChoices.forEach(button => button.addEventListener('click', (e) => {
    player = e.target.id;
    playerChoiceElement.innerHTML = player;
    generateComputerChoice();
    getResult();
}));

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    if (randomNumber === 1) {
        computer = "rock";
    } else if (randomNumber === 2) {
        computer = "paper";
    } else {
        computer = "scissors";
    }

    computerChoiceElement.innerHTML = computer;
}

function getResult() {
    if (computer === player) {
        result = "gelijkspel";
    } else if ((computer === 'rock' && player === 'paper') ||
               (computer === 'paper' && player === 'scissors') ||
               (computer === 'scissors' && player === 'rock')) {
        result = "je hebt gewonnen!";
    } else {
        result = "je hebt verloren!";
    }

    resultOutputElement.innerHTML = result;
}


