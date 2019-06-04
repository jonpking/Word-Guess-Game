
const words = ["Aquamarine", "Burgundy", "Periwinkle", "Goldenrod", "Emerald", "Fuchsia"];
const selectedWord = words[Math.floor(Math.random()*words.length)]
const selectedWordArray = selectedWord.split("");
const blanks = selectedWordArray.slice(0).fill("_");
let guessesRemaining = 10;
const lettersGuessed = [];
let wins = 0;
let loses = 0;


console.log("Selected Character")
console.log(selectedWord);
console.log("Length and Split")
console.log(selectedWordArray);
console.log(blanks);

document.getElementById("wins").innerHTML = wins;
document.getElementById("loses").innerHTML = loses;
document.getElementById("guessesRemaining").innerHTML = guessesRemaining;
document.getElementById("lettersGuessed").innerHTML = lettersGuessed;
document.getElementById("currentWord").innerHTML = blanks;

document.addEventListener("keyup", function(event){
    lettersGuessed.push(event.key);
    guessesRemaining--;

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

