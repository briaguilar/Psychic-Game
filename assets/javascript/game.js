var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i",
"j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
"u", "v", "w", "x", "y", "z"]

var wins = 0;
var loses = 0;

var guess = document.getElementById("guess");
var winsText = document.getElementById("wins-text");
var losesText = document.getElementById("loses-text");
var guessesLeftText = document.getElementById("guessesLeft-text");
var guessesSoFarText = document.getElementById("guessesSoFar-text");

document.onkeyup = function(event) {
    var userGuess = event.key;

    var computerGuess = computerChoices(Math.floor(Math.random() * computerChoices.length));

    if (userGuess === )
    //(userGuess === computerGuess) {
        //wins++;
    }
}