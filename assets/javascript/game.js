var randomScore = $('#random-score');
var currentScore = $('#current-score');
var randomNumber = 0;
var userScore = 0;
var c1Number = 0;
var c2Number = 0;
var c3Number = 0;
var c4Number = 0;


$(document).ready(function() {

reset();
randomScore.text("Hello World");
currentScore.text("Hello World2");

})

function reset() {
    // Resetting Variables
    userScore = 0;
    randomNumber = getRandomInt(19, 120);
    c1Number = getRandomInt(1,12);
    c2Number = getRandomInt(1,12);
    c3Number = getRandomInt(1,12);
    c4Number = getRandomInt(1,12);
  
}





// Function for randomizing numbers between a range
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
















// var wins1 = document.getElementById("wins");



// wins1.textContent = wins;






















// var wins1 = document.getElementById("wins");
// var losses = document.getElementById("losses");
// var guessRemaining = document.getElementById("guess-remaining");
// var lettersGuessed = document.getElementById("letters-guessed");
// var keyClicked;
// var compChoice;
// var wins = "0";
// var lossCount = 0;
// var guessesRemaining = 9;
// var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// var guessed = [];
// var keyClickedHistory = [];
// var keyGuessed = false;


// // Get game started, show scores at 0 and clear any array data.
// roundReset();

// // Basic set up of game once key is pushed.
// document.onkeyup = function() {
//     // Set variables for testing multiple keys and for key chosen.
//     keyGuessed = false;
//     keyClicked = event.key;
    
//     // for loop to tell if letter has been used before
//     for (i=0; i < keyClickedHistory.length; i++) {

//         if (keyClicked === keyClickedHistory[i]) {
//             keyGuessed = true;
//         }
//     }

//     // if so, don't run game round

//     // otherwise, run game round    
//     if (keyGuessed === false){
//         // Runs a game round pushing the user input as a parameter.
//         decide(event.key);
//     }
     
//   };

//   // Game round function - Main heart of game
//   function decide(a) {

//         // Record letter into history so as to avoid duplicate letters
//         keyClickedHistory.push(a);
//         guessed.push(a);

//         // Logic for if the user choice matches the randomly chosen letter
//         if (a === compChoice) {
//             wins++
//             roundReset();
//         } else {
//             guessesRemaining--;
//         }
//         // Catch for if they run out of guesses.
//         if (guessesRemaining === 0) {
//             lossCount++;
//             roundReset();
//         }
        
//         // Print latest scores and guesses remaining.
//         guessRemaining.textContent = guessesRemaining;
//         wins1.textContent = wins;
//         losses.textContent = lossCount;
//         lettersGuessed.textContent = guessed;

//   }

//   function roundReset() {
//     //Resets all arrays storing user data and prints out current scores at 0
//     guessed = [];
//     keyClickedHistory = [];
//     compChoice = alpha[Math.floor((Math.random() * alpha.length))];
//     guessesRemaining = 9;
//     guessRemaining.textContent = guessesRemaining;
//     wins1.textContent = wins;
//     losses.textContent = lossCount;
//     lettersGuessed.textContent = guessed;
//   }