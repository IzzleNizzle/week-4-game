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


  // Next we create a for loop to create characters for every.
  for (var i = 0; i < 4; i++) {

    var imageCharOutline = $('<div>');
    // For each iteration, we will create an imageCharacter
    var imageCharacter = $("<img>");
    var imageSpan = $('<span>');

    // First each crystal will be given the class ".character-image".
    // This will allow the CSS to take effect.
    imageCharacter.addClass("character-image");
    imageCharOutline.addClass("character-outline");

    imageCharacter.attr("id", "character" + (i + 1));
    imageCharOutline.attr("id", "char" + (i + 1));
    imageSpan.attr("id", "holder" + (i + 1));


    //testing element manipulation
    imageCharOutline.text("hello world");
    // var character1 = "hello world" + imageSpan + "test123";

    console.log(imageCharOutline);

    // Each imageCharacter will be given a src link to the crystal image
    imageCharacter.attr("src", "assets/images/spaceballs" + (i + 1) + ".jpg");

    // Each imageCharacter will be given a data attribute called data-charactervalue.
    // This data attribute will be set equal to a random number between 1 and 12.
    imageCharacter.attr("data-charactervalue", getRandomInt(1,12));
  
    
    imageCharOutline.html(imageSpan);

    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
    $("#characters").append(imageCharOutline);
    // $('#char' + (i + 1)).html(imageSpan);
    // $("#holder" + (i+1)).html(imageCharacter);
    
  }

  

  $('#test').on("click", function () {
console.log("testing button");
    for (i=0;i<4;i++){

        
        $("#crystals").append($('#char'+(i+1)));
        



    }

  })

  // On click function to calculate value of image clicked as well as processing logic for winning/losing sequence.
  $('.character-image').on("click", function () {

    // Reseting prompt message to blank once a user clicks on a new crystal
    promptMessage.text("");
    // Creating var to capture value of picture clicked
    var characterValue = ($(this).attr("data-charactervalue"));
    characterValue = parseInt(characterValue);
    userScore += characterValue;
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

         // Each imageCrystal will be given a data attribute called data-charactervalue.
    // This data attribute will be set equal to a random number between 1 and 12.
    $("#character"+(i+1)).attr("data-charactervalue", getRandomInt(1,12));

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