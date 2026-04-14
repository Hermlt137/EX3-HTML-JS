
const words = [
    { original: "luffy", scrambled: "flyfu", img: "assets/luffy.png" },
    { original: "doraemon", scrambled: "erooanmd", img: "assets/doraemon.jpg" },
    { original: "shinchan", scrambled: "behsinan", img: "assets/shinchan.webp" }
];

let currentWordIndex = 0;


const resultText = document.getElementById("result-text");
const wordImage = document.getElementById("word-image");
const userGuessInput = document.getElementById("user-guess");
const scrambledWordElement = document.getElementById("scrambled-word");


document.getElementById("check-btn").onclick = function() {
    const userGuess = userGuessInput.value.toLowerCase();
    const correctAnswer = words[currentWordIndex].original;

    if (userGuess === correctAnswer) {

        resultText.innerHTML = "Correct! Well Done!";
        resultText.style.color = "green";

        wordImage.src = words[currentWordIndex].img;
        wordImage.style.display = "block"; 
    } else {
        resultText.innerHTML = "Try Again!";
        resultText.style.color = "red";
        wordImage.style.display = "none";
    }
};


document.getElementById("new-word-btn").onclick = function() {

    currentWordIndex = Math.floor(Math.random() * words.length);
    
    scrambledWordElement.innerHTML = words[currentWordIndex].scrambled;
    userGuessInput.value = "";
    resultText.innerHTML = "";
    wordImage.style.display = "none";
};