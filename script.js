const buttons = document.querySelectorAll("button");
const choices = document.getElementById("choices");
const result = document.getElementById("result");
const score = document.getElementById("score");
const winner = document.getElementById("winner");

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  let choice;

  switch (randomNumber) {
    case 1:
      choice = "rock";
      break;
    case 2:
      choice = "paper";
      break;
    case 3:
      choice = "scissors";
      break;
  }

  return choice;
}

buttons.forEach((button) =>
  button.addEventListener("click", () => {
    const humanChoice = button.id;

    const computerChoice = getComputerChoice();

    choices.textContent = `The human choice is ${humanChoice} and computer choice is ${computerChoice}`;
    playRound(humanChoice, computerChoice);
  }),
);

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "rock" && computerChoice === "rock") {
    result.textContent = "It's a tie!";
  } else if (humanChoice === "paper" && computerChoice === "paper") {
    result.textContent = "It's a tie!";
  } else if (humanChoice === "scissors" && computerChoice === "scissors") {
    result.textContent = "It's a tie!";
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    result.textContent = "You win! Rock crushes Scissors!";
    humanScore += 1;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    result.textContent = "You win! Paper covers Rock!";
    humanScore += 1;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    result.textContent = "You win! Scissors cuts Paper!";
    humanScore += 1;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    result.textContent = "You lose! Rock crushes Scissors!";
    computerScore += 1;
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    result.textContent = "You lose! Paper covers Rock!";
    computerScore += 1;
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    result.textContent = "You lose! Scissors cuts Paper!";
    computerScore += 1;
  }

  score.textContent = `The human score is ${humanScore} and computer score is ${computerScore}`;

  if (humanScore === 5) {
    winner.textContent = "The winner is human!";
  } else if (computerScore === 5) {
    winner.textContent = "The winner is computer!";
  }
}
