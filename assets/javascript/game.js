
// variable declarations, random word selection, and splitting of word into letters

const words = ["aquamarine", "burgundy", "periwinkle", "goldenrod", "emerald", "fuchsia"];
let selectedWord = words[Math.floor(Math.random() * words.length)];
let selectedWordArray = selectedWord.split("");
let blanks = selectedWordArray.slice(0).fill("_");
let guessesRemaining = 10;
let lettersGuessed = [];
let wins = 0;
let losses = 0;

// initial visual elements

document.getElementById("wins").innerHTML = wins;
document.getElementById("losses").innerHTML = losses;
document.getElementById("guessesRemaining").innerHTML = guessesRemaining;
document.getElementById("lettersGuessed").innerHTML = lettersGuessed;
document.getElementById("currentWord").innerHTML = blanks.join(" ");

// registers key press and reduces number of guesses remaining, if out of guesses remaining it increases loses, 
// adds letters to list of letters guessed, checks if letter has already been guessed and prevents duplication,
// checks if key pressed exists in selected word, if it does it replaces "_" with letter key pressed

document.addEventListener("keyup", function (event) {
    if (event.keyCode < 65 || event.keyCode > 90) {
        return;
    }
    if (lettersGuessed.includes(event.key)) {
        return;
    }
    selectedWordArray.forEach(function (letter, index) {
        if (event.key === letter) {
            blanks[index] = letter;
        };
    });
    lettersGuessed.push(event.key);
    document.getElementById("currentWord").innerHTML = blanks.join(" ");
    document.getElementById("lettersGuessed").innerHTML = lettersGuessed;
    if (blanks.toString() == selectedWordArray.toString()) {
        wins++;
        document.getElementById("wins").innerHTML = wins;
        setTimeout(function () {
             alert("YOU WIN!") 
             lettersGuessed = [];
             document.getElementById("lettersGuessed").innerHTML = lettersGuessed;
             guessesRemaining = 10;
             document.getElementById("guessesRemaining").innerHTML = guessesRemaining;
             selectedWord = words[Math.floor(Math.random() * words.length)];
             selectedWordArray = selectedWord.split("");
             blanks = selectedWordArray.slice(0).fill("_");
             document.getElementById("currentWord").innerHTML = blanks.join(" ");
            }, 1);
        
        return;
    }
    guessesRemaining--;
    document.getElementById("guessesRemaining").innerHTML = guessesRemaining;
    if (guessesRemaining < 1) {
        losses++;
        document.getElementById("losses").innerHTML = losses;
        setTimeout(function () { alert("YOU LOSE") }, 1);
        lettersGuessed = [];
        document.getElementById("lettersGuessed").innerHTML = lettersGuessed;
        guessesRemaining = 10;
        document.getElementById("guessesRemaining").innerHTML = guessesRemaining;
        selectedWord = words[Math.floor(Math.random() * words.length)];
        selectedWordArray = selectedWord.split("");
        blanks = selectedWordArray.slice(0).fill("_");
        document.getElementById("currentWord").innerHTML = blanks.join(" ");
        return;
    }
});
