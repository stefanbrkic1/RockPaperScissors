document.addEventListener("DOMContentLoaded", function () {

    let userChoice;
    let computerChoice;
  
  
    let playerScore = 0;
    let computerScore = 0;
  
    
    const btnBox1 = document.getElementById("btn-box1");
    const btnBox2 = document.getElementById("btn-box2");
    const btnBox3 = document.getElementById("btn-box3");
    const scoreNumber1 = document.querySelector(".score-number:first-of-type");
    const scoreNumber2 = document.querySelector(".score-number:last-of-type");
    const resultText = document.querySelector(".result-text");
  
    
    function getComputerChoice() {
      const choices = ["rock", "paper", "scissors"];
      const randomNumber = Math.floor(Math.random() * 3);
      return choices[randomNumber];
    }
  
    
    function updateScore(result) {
      if (result === "win") {
        playerScore++;
        scoreNumber1.textContent = playerScore;
        resultText.textContent = "You WON";
      } else if (result === "lose") {
        computerScore++;
        scoreNumber2.textContent = computerScore;
        resultText.textContent = "You LOST";
      } else {
        resultText.textContent = "It's a TIE";
      }
    }
  
  
    function checkWin(userChoice, computerChoice) {
      if (userChoice === computerChoice) {
        updateScore("tie");
      } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
      ) {
        updateScore("win");
      } else {
        updateScore("lose");
      }
    }
  
    
    btnBox1.addEventListener("click", function () {
      userChoice = "rock";
      computerChoice = getComputerChoice();
      checkWin(userChoice, computerChoice);
    });
  
    btnBox2.addEventListener("click", function () {
      userChoice = "paper";
      computerChoice = getComputerChoice();
      checkWin(userChoice, computerChoice);
    });
  
    btnBox3.addEventListener("click", function () {
      userChoice = "scissors";
      computerChoice = getComputerChoice();
      checkWin(userChoice, computerChoice);
    });
  });
  