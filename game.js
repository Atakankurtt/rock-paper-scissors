const MOVES = ["ROCK", "PAPER", "SCISSCORS"];

let playerScore = 0;
let computerScore = 0;

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");



function computerPlay() {
  let randomNumber = Math.floor(Math.random() * 3);
  return MOVES[randomNumber];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toUpperCase();
  if (playerSelection == "ROCK" && computerSelection == "PAPER") {
    return "You Lose! Paper beats Rock";
  }
  else if (playerSelection == "ROCK" && computerSelection == "SCISSCORS") {
    return "You Win! Rock beats Scissors";
  }
  else if (playerSelection == "PAPER" && computerSelection == "ROCK") {
    return "You Win! Paper beats Rock";
  }
  else if (playerSelection == "PAPER" && computerSelection == "SCISSCORS") {
    return "You Lose! Scisscors beats paper";
  }
  else if (playerSelection == "SCISSCORS" && computerSelection == "PAPER") {
    return "You Win! Scisscors beats paper";
  }
  else if (playerSelection == "SCISSCORS" && computerSelection == "ROCK") {
    return "You Lose! Rock beats Scisscors";
  }
  else if (playerSelection == computerSelection) {
    return "Draw!";
  }
  else {
    return "Error";
  }
}

function game(choice) {
  const playerSelection = choice;
  const computerSelection = computerPlay();
  let round = playRound(playerSelection, computerSelection);
  if (playRound(playerSelection, computerSelection).includes("You Win!")) {
    playerScore++;
    }
  else if (round.includes("You Lose!")) {
    computerScore++;
    }
}

function win() {
  if (playerScore === 5){
    document.getElementById('player-score').innerHTML = "PLAYER WON!";
    document.getElementById('player-score').style.color = "red";
  }
  else if (computerScore === 5){
    document.getElementById('computer-score').innerHTML = "COMPUTER WON!";
    document.getElementById('computer-score').style.color = "red";
  }
}
rock.addEventListener("click", () => {
  let choice = rock.getAttribute('id');
  game(choice);
  document.getElementById('player-score').innerHTML = playerScore;
  document.getElementById('computer-score').innerHTML = computerScore;
  win()
});

paper.addEventListener("click", () => {
  let choice = paper.getAttribute('id');
  game(choice);
  document.getElementById('player-score').innerHTML = playerScore;
  document.getElementById('computer-score').innerHTML = computerScore;
  win()
});

scissors.addEventListener("click", () => {
  let choice = scissors.getAttribute('id');
  game(choice);
  document.getElementById('player-score').innerHTML = playerScore;
  document.getElementById('computer-score').innerHTML = computerScore;
  win()
});