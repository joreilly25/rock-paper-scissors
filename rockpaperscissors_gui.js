// function will need to generate a random number out of 3 total options - done
// depending on that number it will assign either rock, paper or scissors and return that value - done
// function will need to take user input of either rock, paper, or scissors anything else should result in a try again
// function will return the user's inputed value - needed?
// create a function to take these values and compare them to delcare a winner | this will be each round of the game - done
// create a function to wrap all of these functions and loop through muiltiple games - done
// the game function should keep score (5 games) and delcare a winner at the end - done
// Rock beats Scissors, Scissors beats Paper, Paper beats Rock

let playerScore = 0;
let compScore = 0;
const selections = document.querySelectorAll("button");
const results = document.querySelector("#results");
const played = document.querySelector("#played");
const scoreboard = document.querySelector("#scoreboard");
let gamesPlayed = 0;

selections.forEach((button) => {
  button.addEventListener("click", () => {
    let playerSelection = button.id;
    // const selection = document.createElement('h3');
    // selection.textContent = `You selected: ${playerSelection.toUpperCase()} and Computer Selected: ${randCompSelector.toUpperCase()}`
    // played.appendChild(selection);
    console.log(`You selected: ${playerSelection.toUpperCase()}`);
    computerPlay();
    playRound(playerSelection, randCompSelector);
    scoreboard.textContent = `Player: ${playerScore} Computer: ${compScore}`;
    if (gamesPlayed == 5) {
      checkWinner();
    }
  });
});

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function computerPlay() {
  let compSelector = ["rock", "paper", "scissors"];
  randCompSelector = compSelector[Math.floor(Math.random() * compSelector.length)];
  // const compSelection = document.createElement('h3');
  // compSelection.textContent = `Computer Selected: ${randCompSelector.toUpperCase()}`
  // played.appendChild(compSelection);
  console.log(`Computer Selected: ${randCompSelector}`);
  return randCompSelector;
}

function userPlay(btnClicked) {
  let playerSelection = btnClicked;
  return playerSelection;
}

// rock.addEventListener('click', userPlay);

function playRound(playerSelection, compSelection) {
  removeAllChildNodes(played);
  removeAllChildNodes(results);
  const selection = document.createElement("h3");
  selection.textContent = `${playerSelection.toUpperCase()} vs ${randCompSelector.toUpperCase()}`;
  played.appendChild(selection);
  const roundResultsWin = document.createElement("h4");
  const roundResultsLose = document.createElement("h4");
  const roundResultsDraw = document.createElement("h4");
  roundResultsWin.textContent = `You Win! ${playerSelection.toUpperCase()} beats ${compSelection.toUpperCase()}`;
  roundResultsLose.textContent = `You Lose! ${playerSelection.toUpperCase()} is beaten by ${compSelection.toUpperCase()}`;
  roundResultsDraw.textContent = `Draw! ${playerSelection.toUpperCase()} vs ${compSelection.toUpperCase()}`;
  gamesPlayed++;
  if (playerSelection == "rock" && compSelection == "scissors") {
    playerScore++;
    return results.appendChild(roundResultsWin);
  } else if (playerSelection == "scissors" && compSelection == "rock") {
    compScore++;
    return results.appendChild(roundResultsLose);
  } else if (playerSelection == "rock" && compSelection == "paper") {
    compScore++;
    return results.appendChild(roundResultsLose);
  } else if (playerSelection == "paper" && compSelection == "rock") {
    playerScore++;
    return results.appendChild(roundResultsWin);
  } else if (playerSelection == "paper" && compSelection == "scissors") {
    compScore++;
    return results.appendChild(roundResultsLose);
  } else if (playerSelection == "scissors" && compSelection == "paper") {
    playerScore++;
    return results.appendChild(roundResultsWin);
  } else {
    return results.appendChild(roundResultsDraw);
  }
}

function checkWinner() {
  if (playerScore > compScore) {
    alert(`Congratulations YOU WIN!`);
  } else if (compScore > playerScore) {
    alert("You Lose, better luck next time!");
  } else {
    alert("We have a DRAW!");
  }
  location.reload();
}

// playRound(playerSelection, compSelection);

// function game() {
//   for (let i = 0; i < 5; i++) {
//     const compSelection = computerPlay();
//     const playerSelection = userPlay();
//     playRound(playerSelection, compSelection);
//     console.log("Score is:\n" + "Player: " + playerScore + "\n" + "Computer: " + compScore + "\n");
//   }

//   if (playerScore > compScore) {
//     console.log("\nCongratulations! You beat the computer in Rock, Paper, Scissors!");
//   } else if (playerScore < compScore) {
//     console.log("\nOh no! Better luck next time!");
//   } else {
//     console.log("\nLooks like we got ourselves a draw!");
//   }
//   // console.log("computer: " + compSelection);
//   // console.log("player: " + playerSelection);
// }

// game();
