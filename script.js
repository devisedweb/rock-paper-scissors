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

function getHumanChoice() {
  let choice = prompt("What is your choice?").toLowerCase();

  return choice;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    console.log(humanChoice, computerChoice);

    if (humanChoice === "rock" && computerChoice === "rock") {
      console.log("It's a tie!");
    } else if (humanChoice === "paper" && computerChoice === "paper") {
      console.log("It's a tie!");
    } else if (humanChoice === "scissors" && computerChoice === "scissors") {
      console.log("It's a tie!");
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      console.log("You win! Rock crushes Scissors!");
      humanScore += 1;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      console.log("You win! Paper covers Rock!");
      humanScore += 1;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      console.log("You win! Scissors cuts Paper!");
      humanScore += 1;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
      console.log("You lose! Rock crushes Scissors!");
      computerScore += 1;
    } else if (humanChoice === "rock" && computerChoice === "paper") {
      console.log("You lose! Paper covers Rock!");
      computerScore += 1;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
      console.log("You lose! Scissors cuts Paper!");
      computerScore += 1;
    }

    console.log(humanScore, computerScore);
  }

  for (let i = 1; i <= 5; i++) {
    playRound(getHumanChoice(), getComputerChoice());
  }
}

playGame();
