const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorsBtn = document.getElementById("scissorsBtn");
const playerScoreDiv = document.getElementById("playerScore");
const computerScoreDiv = document.getElementById("computerScore");
const playerSign = document.getElementById("playerSign");
const computerSign = document.getElementById("computerSign");
const scorePara = document.getElementById("scorePara");
const endgameModal = document.getElementById("endgameModal");
const endgameMsg = document.getElementById("endgameMsg");
const overlay = document.getElementById("overlay");
const restartBtn = document.getElementById("restartBtn");
const playerSignImg = document.getElementById("playerSignImg");
const computerSignImg = document.getElementById("computerSignImg");

let playerScore = 0;
let computerScore = 0;
let roundWinner = "";

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    roundWinner = "Tie";
  } else if (
    (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
    (playerSelection === "PAPER" && computerSelection === "ROCK") ||
    (playerSelection === "SCISSORS" && computerSelection === "PAPER")
  ) {
    playerScore++;
    roundWinner = `Player`;
  } else {
    computerScore++;
    roundWinner = `Computer`;
  }
}

function getComputerChoice() {
  let randomChoice;
  const randomNumber = Math.floor(Math.random() * 3);

  switch (randomNumber) {
    case 0:
      randomChoice = "ROCK";
      break;
    case 1:
      randomChoice = "PAPER";
      break;
    case 2:
      randomChoice = "SCISSORS";
      break;
  }

  return randomChoice;
}

function isGameOver() {
  return playerScore === 5 || computerScore === 5;
}

rockBtn.addEventListener("click", () => handleClick("ROCK"));
paperBtn.addEventListener("click", () => handleClick("PAPER"));
scissorsBtn.addEventListener("click", () => handleClick("SCISSORS"));
restartBtn.addEventListener("click", restartGame);

function handleClick(playerSelection) {
  if (isGameOver()) {
    alert(`--- GAME OVER--- ${roundWinner} WON!`);
    restartGame();
    return;
  }

  const computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
  updateChoices(playerSelection, computerSelection);
  updateScore();
}

function updateChoices(playerSelection, computerSelection) {
  switch (playerSelection) {
    case "ROCK":
      playerSignImg.src = "./img/Asset 1.png";
      break;
    case "PAPER":
      playerSignImg.src = "./img/Asset 2.png";
      break;
    case "SCISSORS":
      playerSignImg.src = "./img/Asset 3.png";
      break;
  }

  switch (computerSelection) {
    case "ROCK":
      computerSignImg.src = "./img/Asset 1.png";
      break;
    case "PAPER":
      computerSignImg.src = "./img/Asset 2.png";
      break;
    case "SCISSORS":
      computerSignImg.src = "./img/Asset 3.png";
      break;
  }
}

function updateScore() {
  if (roundWinner === "Tie") {
    scorePara.textContent = "It's a TIE!";
  } else if (roundWinner === "Player") {
    scorePara.textContent = "You WON!";
  } else if (roundWinner === "Computer") {
    scorePara.textContent = "You LOST!";
  }

  playerScoreDiv.textContent = `${playerScore}`;
  computerScoreDiv.textContent = `${computerScore}`;
}

function restartGame() {
  playerScore = 0;
  computerScore = 0;
  playerScoreDiv.textContent = "0";
  computerScoreDiv.textContent = "0";
  playerSignImg.src = "./img/question.png";
  computerSignImg.src = "./img/question.png";
  endgameModal.classList.remove("active");
  overlay.classList.remove("active");
}
