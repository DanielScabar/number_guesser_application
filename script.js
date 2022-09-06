let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => Math.floor(Math.random() * 10);

const userGuessRange = (userGuess) => {
  if (userGuess < 0 || userGuess > 10){
    window.alert('Number out of range');
  }
};

// Calculate distance from the guess to the target
const getAbsoluteDistance = (guess, secretTarget) =>
  guess > secretTarget ? guess - secretTarget : secretTarget - guess;

const compareGuesses = (humanGuess, computerGuess, secretTarget) => {
  userGuessRange(humanGuess);
  if (
    getAbsoluteDistance(humanGuess, secretTarget) <=
    getAbsoluteDistance(computerGuess, secretTarget)
  ) {
    return true;
  } else {
    return false;
  }
};

const updateScore = (winner) => {
  if (winner === "human") {
    humanScore++;
  }
  if (winner === "computer") {
    computerScore++;
  }
};

const advanceRound = () => currentRoundNumber++;

