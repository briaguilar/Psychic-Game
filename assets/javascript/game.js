var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i",
"j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
"u", "v", "w", "x", "y", "z"]

var guesses = 9;
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];

var guess = document.getElementById("guess");
var winsText = document.getElementById("winsText");
var lossesText = document.getElementById("losesText");
var guessesLeftText = document.getElementById("guessesLeftText");
var guessesSoFarText = document.getElementById("guessesSoFarText");

var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];

console.log(computerGuess)

var userGuess = ["a", "b", "c", "d", "e", "f", "g", "h", "i",
    "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
    "u", "v", "w", "x", "y", "z"];

document.onkeyup = function(event) {
    var userGuess = event.key;

    if (computerGuess === userGuess) {
        wins++;
        guessesLeft = 9;
        guessesSoFar = [];
    }
    else {
        guessesLeft--;
    }

    if (guessesLeft === 0) {
        losses--;
        guessesLeft = 9;
        guessesSoFar = [];
    }
}

document.getElementById("winsText").textContent = "Wins: " + wins;
lossesText.textContent = "Losses: " + losses;
guessesLeftText.textContent = "Guesses Left: " + guessesLeft;
guessesSoFarText.textContent = "Guesses So Far: " + guessesSoFar;