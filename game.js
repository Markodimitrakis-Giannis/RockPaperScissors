const startButton = (document.getElementById("start-game").onclick = playGame);
const endButton = (document.getElementById("new-game").onclick = resetScore);
let playerScore = 0;
let computerScore = 0;
const playerBox = document.querySelector(".player-stats .player h2");
const computerBox = document.querySelector(".player-stats .computer h2");
const playerSel = document.querySelector(".player-selections .player-sel h2");
const computerSel = document.querySelector(
  ".player-selections .computer-sel h2"
);

function resetScore() {
  playerScore = 0;
  playerBox.innerHTML = 0;
  playerSel.innerHTML = "";
  computerScore = 0;
  computerBox.innerHTML = 0;
  computerSel.innerHTML = "";
}

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const playerSelection = () => {
  const randChoice = randomInteger(0, 2);
  const option = ["rock", "paper", "scissor"];
  return option[randChoice];
};

const computerSelection = () => {
  const randChoice = randomInteger(0, 2);
  const option = ["rock", "paper", "scissor"];
  return option[randChoice];
};

function playGame() {
  const playerChoice = playerSelection();
  playerSel.innerHTML = playerChoice;
  const computerChoice = computerSelection();
  computerSel.innerHTML = computerChoice;

  checkWinner(playerChoice, computerChoice, playerBox, computerBox);
}

function checkWinner(playerChoice, computerChoice, player, computer) {
  if (
    (playerChoice == "rock" && computerChoice == "scissor") ||
    (playerChoice == "scissor" && computerChoice == "paper") ||
    (playerChoice == "paper" && computerChoice == "rock")
  ) {
    console.log(playerChoice, computerChoice);
    playerScore++;
    player.innerHTML = playerScore;
  } else if (
    (playerChoice == "rock" && computerChoice == "paper") ||
    (playerChoice == "scissor" && computerChoice == "rock") ||
    (playerChoice == "paper" && computerChoice == "scissor")
  ) {
    console.log(playerChoice, computerChoice);
    computerScore++;
    computer.innerHTML = computerScore;
  } else {
    console.log(playerChoice, computerChoice);
    //player.innerHTML = "Draw";
    //computer.innerHTML = "Draw";
  }
}
