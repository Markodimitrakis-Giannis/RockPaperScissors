const startButton = (document.getElementById("start-game").onclick = playGame);

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const playerSelection = () => {
  return "rock";
};

const computerSelection = () => {
  const randChoice = randomInteger(1, 3);
  const option = ["rock", "paper", "scissor"];
  return option[randChoice];
};

function playGame() {
  console.log("Hello!");
  const playerChoice = playerSelection();
  const computerChoice = computerSelection();

  const player = document.querySelector(".player-stats .player");

  if (playerChoice == "rock" && computerChoice == "scissor") {
    player.innerHTML("Player Won");
  } else if (playerChoice == "rock" && computerChoice == "paper") {
    console.log("Game Ended! Computer Won");
  } else {
    console.log("Game Ended! No Player Won");
  }
}
