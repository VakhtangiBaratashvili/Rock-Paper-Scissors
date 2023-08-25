"use strict";

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const player = document.querySelector("#playerChoice");
const computer = document.querySelector("#computerChoice");
const result = document.querySelector("#result");
const score = document.querySelector("#score");
var playerScore = 0;
var computerScore = 0;
game();

function game() {
    rock.addEventListener("click", chooseRock);
    paper.addEventListener("click", choosePaper);
    scissors.addEventListener("click", chooseScissors);
}

function chooseRock() {
    player.src = "rock.png";
    player.style.visibility = "visible";
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    switch (computerChoice) {
        case 1:
            computer.src = "rock.png";
            computer.style.visibility = "visible";
            result.textContent = "Draw!";
            break;
        case 2:
            computer.src = "paper.png";
            computer.style.visibility = "visible";
            computerScore++;
            result.textContent = "Computer won!";
            score.textContent = `${playerScore}-${computerScore}`;
            break;
        case 3:
            computer.src = "scissors.png";
            computer.style.visibility = "visible";
            playerScore++;
            result.textContent = "You won!";
            score.textContent = `${playerScore}-${computerScore}`;
            break;
    }
}

function choosePaper() {
    player.src = "paper.png";
    player.style.visibility = "visible";
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    switch (computerChoice) {
        case 1:
            computer.src = "rock.png";
            computer.style.visibility = "visible";
            playerScore++;
            result.textContent = "You won!";
            score.textContent = `${playerScore}-${computerScore}`;
            break;
        case 2:
            computer.src = "paper.png";
            computer.style.visibility = "visible";
            result.textContent = "Draw!";
            break;
        case 3:
            computer.src = "scissors.png";
            computer.style.visibility = "visible";
            computerScore++;
            result.textContent = "Computer won!";
            score.textContent = `${playerScore}-${computerScore}`;
            break;
    }
}

function chooseScissors() {
    player.src = "scissors.png";
    player.style.visibility = "visible";
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    switch (computerChoice) {
        case 1:
            computer.src = "rock.png";
            computer.style.visibility = "visible";
            computerScore++;
            result.textContent = "Computer won!";
            score.textContent = `${playerScore}-${computerScore}`;
            break;
        case 2:
            computer.src = "paper.png";
            computer.style.visibility = "visible";
            playerScore++;
            result.textContent = "You won!";
            score.textContent = `${playerScore}-${computerScore}`;
            break;
        case 3:
            computer.src = "scissors.png";
            computer.style.visibility = "visible";
            result.textContent = "Draw!";
            break;
    }
}
