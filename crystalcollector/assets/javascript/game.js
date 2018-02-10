var randomScore = $('#random-score');
var currentScore = $('#current-score');
var winsElement = $('#wins');
var lossesElement = $('#losses');
var promptMessage = $('#prompt');
var randomNumber;
var userScore = 0;
var wins = 0;
var losses = 0;



$(document).ready(function() {

reset();
randomScore.text(randomNumber);
currentScore.text(userScore);
winsElement.text(wins);
lossesElement.text(losses);


  // Next we create a for loop to create crystals for every numberOption.
  for (var i = 0; i < 4; i++) {

    // For each iteration, we will create an imageCrystal
    var imageCrystal = $("<img>");

    // First each crystal will be given the class ".crystal-image".
    // This will allow the CSS to take effect.
    imageCrystal.addClass("crystal-image");

    imageCrystal.attr("id", "crystal" + i);

    // Each imageCrystal will be given a src link to the crystal image
    imageCrystal.attr("src", "assets/images/crystal" + (i + 1) + ".jpg");

    // Each imageCrystal will be given a data attribute called data-crystalValue.
    // This data attribute will be set equal to a random number between 1 and 12.
    imageCrystal.attr("data-crystalvalue", getRandomInt(1,12));

    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
    $("#crystals").append(imageCrystal);
  }

  // On click function to calculate value of image clicked as well as processing logic for winning/losing sequence.
  $('.crystal-image').on("click", function () {

    // Reseting prompt message to blank once a user clicks on a new crystal
    promptMessage.text("");
    // Creating var to capture value of picture clicked
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    userScore += crystalValue;
    // Print updated data to screen.
    printData();


    // If userScore is higher than randomNumber, they loose a round and it starts again
    if (userScore > randomNumber) {
        promptMessage.text("You lost...");
        losses ++;
        reset();

    }
    // If userScore is equal to randomNumber then the user gets a win and the round starts again
    if (userScore === randomNumber) {
        promptMessage.text("You Won!!!");
        wins ++;
        reset();

    }


  })

})








function reset() {
    // Resetting Variables
    userScore = 0;
    randomNumber = getRandomInt(19, 120);
  

    for (i=0; i < 4; i++) {

         // Each imageCrystal will be given a data attribute called data-crystalValue.
    // This data attribute will be set equal to a random number between 1 and 12.
    $("#crystal"+i).attr("data-crystalvalue", getRandomInt(1,12));

    }
   
    printData();




}

    function printData() {

        // Printing out recent Data
        randomScore.text(randomNumber);
        currentScore.text(userScore);
        winsElement.text(wins);
        lossesElement.text(losses);
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