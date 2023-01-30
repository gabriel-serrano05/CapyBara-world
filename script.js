
let titleScreen = document.querySelector(".title-screen")
let startButton = document.querySelector(".start-button")
let screenOne = document.querySelector(".screen-one")
let nextButton = document.querySelector(".next-button")
let innerText = document.querySelector(".inner-text")
let screenTwo = document.querySelector(".screen-two")
let nextTwo = document.querySelector(".next-button-two")
let screenThree = document.querySelector(".screen-three")
let throwUpButton = document.querySelector(".throw-up")
let gameOverScreen = document.querySelector(".game-over-screen")
let gameOverText = document.querySelector(".game-over-text")
let testCase = document.querySelector(".img-one")
let imgTwo = document.querySelector(".img-two")
let restartButton = document.querySelector(".restart-button")
let screenFour = document.querySelector(".screen-four")
let nextButtonThree = document.querySelector(".next-button-three")
let greet = document.querySelector(".greet")
let screenFive = document.querySelector(".screen-five")
let insult = document.querySelector(".insult")
let compliment = document.querySelector(".compliment")
let screenSix = document.querySelector(".screen-six")
let nextButtonFour = document.querySelector(".next-button-four")
let winScreen = document.querySelector(".win-screen")
let restartButtonTwo = document.querySelector(".restart-button-two")

startButton.onclick = function() {
  screenOne.style.display = "block";
  titleScreen.style.display = "none";
};

nextButton.onclick = function() {
  screenOne.style.display = "none";
  screenTwo.style.display = "block";
}

restartButtonTwo.onclick = function() {
  winScreen.style.display = "block";
  titleScreen.style.display = "none";
}


