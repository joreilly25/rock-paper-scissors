// function will need to generate a random number out of 3 total options - done
// depending on that number it will assign either rock, paper or scissors and return that value - done
// function will need to take user input of either rock, paper, or scissors anything else should result in a try again
// function will return the user's inputed value
// create a function to take these values and compare them to delcare a winner | this will be each round of the game
// create a function to wrap all of these functions and loop through muiltiple games
// the game function should keep score (5 games) and delcare a winner at the end

function computerPlay() {
    let randNum = Math.floor(Math.random() * 3);
    let compSelection;
    
    if (randNum < 1) {
        compSelection = "rock";
    } else if (randNum == 1) {
        compSelection = "paper" ;
    } else {
        compSelection = "scissors";
    }
    return compSelection;
}
console.log(computerPlay());