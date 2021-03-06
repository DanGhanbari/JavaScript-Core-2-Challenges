let randomNumber = Math.floor(Math.random() * 100 + 1);
console.log(randomNumber);
var numberOfTries = 7;

let output = document.querySelector(".Tries-output");
let finalOut = document.querySelector(".final-output");
output.innerText = `Number of tries: ${numberOfTries}`;
function guessNumber() {
  //Collect input from the user
  let guess = document.querySelector(".inputs-Values").value;
  //If the user inputs a bad input ie 0, empty string, number greater that 100, number less than zero Print "Please enter a number between 1 and 100"
  if (guess === "" || guess > 100 || guess == 0) {
    output.innerText = "Please enter a number between 1 and 100";
  } else {
    //If the users guess is higher than the random number print Number is too high, try again (hint use .final-out class to print)
    if (guess > randomNumber) {
      finalOut.innerText = "print Number is too high, try again";
      numberOfTries--;
      output.innerText = `Number of tries: ${numberOfTries}`;
    }
    //If the users guess is lower than the random number print Number is too low, try again  (hint use .final-out class to print)
    if (guess < randomNumber) {
      finalOut.innerText = "print Number is too low, try again";
      numberOfTries--;
      output.innerText = `Number of tries: ${numberOfTries}`;
    }
    if (guess == randomNumber) {
      finalOut.innerText = "Guess is correct. You win!";
      output.innerText = `It took you ${7 - numberOfTries} tries`;
      document.querySelector(".btnGuess").disabled = true;
    }
    //If the user has guessed the random number correctly print out the randomNumber with a message "Guess is correct. You win!"
    if (numberOfTries == 0) {
      if (guess == randomNumber) {
        finalOut.innerText = "Guess is correct. You win!";
        output.innerText = `It took you ${7 - numberOfTries} tries`;
      } else {
        output.innerText = `You Lose, the number was ${randomNumber}`;
        document.querySelector(".btnGuess").disabled = true;
      }
    }
  }
}

// For this task we will be making a "New Game" button function which will reset our game,
// Once the user clicks on this button the user will have new random number to guess
// 1. Reset the values inside the body of the function
// 2. Attach our new game button using an event listener to the .btnNewGame button
function newGame() {
  //Your code here
  document.querySelector(".btnGuess").disabled = false;
  numberOfTries = 7;
  output.innerText = `Number of tries: ${numberOfTries}`;
  //Reset randomNumber
  let newRandomNumber = Math.floor(Math.random() * 100 + 1);
  randomNumber = newRandomNumber;
  //Reset users input field
  document.querySelector(".inputs-Values").value = "";
  //Reset tries, and triesTaken by the user
  finalOut.innerText = "Guess a number between 1 and 100";
}

//keyboard exception
function keyBoardEvents(e) {
  if (e.keyCode === 13) {
    guessNumber();
  }
}

document.querySelector(".btnNewGame").addEventListener("click", newGame);
document.querySelector(".btnGuess").addEventListener("click", guessNumber);
document.addEventListener("keypress", keyBoardEvents);
