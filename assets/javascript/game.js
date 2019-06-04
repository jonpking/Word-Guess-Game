
// variable declarations, random word selection, and splitting of word into letters

const words = ["Aquamarine", "Burgundy", "Periwinkle", "Goldenrod", "Emerald", "Fuchsia"];
const selectedWord = words[Math.floor(Math.random()*words.length)]
const selectedWordArray = selectedWord.split("");
const blanks = selectedWordArray.slice(0).fill("_");
let guessesRemaining = 10;
const lettersGuessed = [];
let wins = 0;
let losses = 0;


console.log("Selected Character")
console.log(selectedWord);
console.log("Length and Split")
console.log(selectedWordArray);
console.log(blanks);

// initial visual elements

document.getElementById("wins").innerHTML = wins;
document.getElementById("losses").innerHTML = losses;
document.getElementById("guessesRemaining").innerHTML = guessesRemaining;
document.getElementById("lettersGuessed").innerHTML = lettersGuessed;
document.getElementById("currentWord").innerHTML = blanks;

// registers key press and reduces number of guesses remaining, if out of guesses remaining it increases loses

document.addEventListener("keyup", function(event){
    lettersGuessed.push(event.key);
    guessesRemaining--;
    document.getElementById("guessesRemaining").innerHTML = guessesRemaining;
    if(guessesRemaining < 1){
        losses++;
        document.getElementById("losses").innerHTML = losses;
    }

// checks if key pressed exists in selected word, if it does it replaces "_" with letter key pressed

    selectedWordArray.forEach(function(letter, index){
        console.log("key press", event.key);
        console.log("letter", letter);
        if(event.key === letter){
            blanks[index] = letter;
            console.log("key press", event.key);
        };
    });



    console.log("blanks", blanks);
    console.log("guessesRemaining", guessesRemaining);
    console.log("lettersGuessed", lettersGuessed);
});

