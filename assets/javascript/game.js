
const words = ["Aquamarine", "Burgundy", "Periwinkle", "Goldenrod", "Emerald", "Fuchsia"];
// let selectedWord = [];
const selectedWord = words[Math.floor(Math.random()*words.length)]
const selectedWordArray = selectedWord.split("");
const blanks = selectedWordArray.slice(0).fill("_");
let guessesLeft = 10;
const lettersGuessed = [];

console.log("Selected Character")
console.log(selectedWord);
console.log("Length and Split")
console.log(selectedWordArray);
console.log(blanks);

document.addEventListener("keyup", function(event){
    lettersGuessed.push(event.key);
    guessesLeft--;
    selectedWordArray.forEach(function(letter, index){
        console.log("key press", event.key);
        console.log("letter", letter);
        if(event.key === letter){
            blanks[index] = letter;
            console.log("key press", event.key);
        };
    });
    console.log("blanks", blanks);
    console.log("guessesLeft", guessesLeft);
    console.log("lettersGuessed", lettersGuessed);
});
