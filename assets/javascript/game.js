
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i",
    "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
    "u", "v", "w", "x", "y", "z"]

// Setting all to default numbers
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];


// Sets computerGuess variable equal to random choice from computerChoices array

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log(computerGuess)
// This code works so far ^^


document.onkeyup = function(event) {
    var userGuess = event.key;

    var newLetter = function() {
        computerGuess;
    };
    
    var soFar = function() {
        document.getElementById("userGuesses").innerHTML = "Guesses So Far: " + guessesSoFar;
    };
    
    var left = function() {
        document.getElementById("guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
    }
    
    var newGame = function() {
        guessesSoFar = [];
        guessesLeft = 9;
        newLetter();
        left();
        soFar();
    }

    guessesSoFar.push(userGuess);
    soFar();
    left();

    if (userGuess === computerGuess) {
        wins++;
        document.getElementById("wins").innerHTML = "Wins: " + wins;
        newGame();
    }

    if (userGuess != computerGuess) {
        guessesLeft--;
        document.getElementById("guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
    }

    if (guessesLeft === 0) {
        losses++;
        document.getElementById("losses").innerHTML = "Losses: " + losses;
        newGame();
    }
}