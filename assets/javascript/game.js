var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var wins = 0;
var loses = 0;
var guessesLeft, guessedLetters, computerGuesses;

resetGame();
display();

document.onkeyup = function (event) {
    var yourGuesses = event.key;
    if (yourGuesses === computerGuesses) {
        win();
    } else if (guessesLeft - 1 === 0) {
        lost();
    } else {
        fail(yourGuesses);
    }

    display();
}

function display() {
    var winsSpan = document.getElementById("wins");
    var losesSpan = document.getElementById("loses");
    var guessLeft = document.getElementById("guessLeft");
    var letterGuessed = document.getElementById("yourGuessed");
    winsSpan.innerHTML = wins;
    losesSpan.innerHTML = loses;
    guessLeft.innerHTML = guessesLeft;
    letterGuessed.innerHTML = guessedLetters.join(',');
}

function win() {
    wins++;
    resetGame();
}

function lost() {
    loses++;
    resetGame();
}

function fail(letter) {
    guessesLeft--;
    guessedLetters.push(letter);
}

function resetGame() {
    guessesLeft = 9;
    guessedLetters = [];
    computerGuesses = letters[Math.floor(Math.random() * letters.length)];
}