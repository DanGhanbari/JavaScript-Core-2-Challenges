// selecting elements
const inputEl = document.getElementById("input");
const buttonEl = document.getElementById("button");
const content = document.querySelector(".content");
const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");
const winner = document.createElement("p");
winner.style.fontSize = "2em";
const winnerDiv = document.getElementById("winner");
winnerDiv.appendChild(winner);
// players
let player1Score = 0;
let player2Score = 0;

// game status
let gameStarted = false;

// Event listeners
inputEl.addEventListener("click", reset);
document.addEventListener("keypress", foul);
buttonEl.addEventListener("click", startGame);
document.addEventListener("keypress", keyBoardEvents);

//reset function
function reset() {
  p1.innerText = 0;
  p2.innerText = 0;
  player1Score = 0;
  player2Score = 0;
  winner.innerText = "";
  buttonEl.disabled = false;
}
//foul function
function foul(event) {
  if (event.keyCode === 115) {
    alert("Player 1, Do not Cheat!! The game has not started yet!");
  } else if (event.keyCode === 108) {
    alert("Player 2, Do not Cheat!! The game has not started yet!");
  }
}

// start function
function startGame() {
  buttonEl.disabled = true;
  startCounter();
  document.removeEventListener("keypress", foul);
  let startPiont = inputEl.value * 1000;
  setTimer(startPiont);
  gameStarted = true;
}

function setTimer(time) {
  setTimeout(function () {
    gameStarted = false;
    endOfGame();
  }, time + 1000);
}

//game result
function endOfGame() {
  if (player1Score > player2Score) {
    winner.innerText = `Player 1 won!! congratulations`;
    inputEl.value = "";
  } else if (player1Score < player2Score) {
    winner.innerText = `Player 2 won!! congratulations`;
    inputEl.value = "";
  } else if (player1Score === player2Score) {
    winner.innerText = `You are tied!! Try again`;
    inputEl.value = "";
  }
  // celebrations
  myConfetti();
  setTimeout(() => {
    myConfetti();
  }, 500);
  setTimeout(() => {
    myConfetti();
  }, 750);
  setTimeout(() => {
    myConfetti();
  }, 1000);
  pTime.style.color = "red";
}

function keyBoardEvents(e) {
  if (gameStarted) {
    if (e.keyCode === 115) {
      // On 'S' Pressed
      player1Score++;
    } else if (e.keyCode === 108) {
      // On 'L' Pressed
      player2Score++;
    }
    p1.innerText = player1Score;
    p2.innerText = player2Score;
  }
}
// confetti canvas
var myCanvas = document.createElement("canvas");
content.appendChild(myCanvas);
var myConfetti = confetti.create(myCanvas);

//***************** */

let mySeconds = 0;
let intervalHandle;
function resetPage() {}
const timeDisplay = document.getElementById("time");
const pTime = document.createElement("p");
pTime.style.fontSize = "3em";
pTime.style.color = "black";
timeDisplay.appendChild(pTime);
pTime.innerText = "00:00";
function tick() {
  let min = Math.floor(mySeconds / 60);
  let sec = mySeconds - min * 60;
  if (sec < 10) {
    sec = "0" + sec;
  }
  if (min < 10) {
    min = "0" + min;
  }
  if (mySeconds === 0) {
    clearInterval(intervalHandle);
    resetPage();
  }

  pTime.innerText = min + ":" + sec;
  pTime.style.color = "#40b1ab";
  mySeconds--;
}

function startCounter() {
  mySeconds = inputEl.value;
  intervalHandle = setInterval(tick, 1000);
}
