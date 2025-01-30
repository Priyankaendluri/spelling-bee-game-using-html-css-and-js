// script.js

let words = [
    { word: "apple", hint: "_ _ _ _ _" },
    { word: "banana", hint: "_ _ _ _ _ _" },
    { word: "cherry", hint: "_ _ _ _ _ _" },
    { word: "dog", hint: "_ _ _" },
    { word: "elephant", hint: "_ _ _ _ _ _ _ _ _" }
];

let currentWordIndex = 0;
let score = 0;
let currentWord = words[currentWordIndex].word;

document.getElementById("word-to-spell").innerHTML = "Word: " + words[currentWordIndex].hint;

document.getElementById("submit-btn").addEventListener("click", function() {
    let userInput = document.getElementById("user-input").value.toLowerCase().trim();

    if (userInput === currentWord) {
        score++;
        document.getElementById("feedback").innerHTML = "Correct!";
        document.getElementById("feedback").style.color = "green";
    } else {
        document.getElementById("feedback").innerHTML = "Incorrect! The correct word is: " + currentWord;
        document.getElementById("feedback").style.color = "red";
    }

    // Update score
    document.getElementById("score").innerHTML = "Score: " + score;

    // Move to next word or end game
    currentWordIndex++;
    if (currentWordIndex < words.length) {
        currentWord = words[currentWordIndex].word;
        document.getElementById("word-to-spell").innerHTML = "Word: " + words[currentWordIndex].hint;
    } else {
        document.getElementById("feedback").innerHTML = "Game Over! Your final score is: " + score;
        document.getElementById("submit-btn").disabled = true;
    }

    // Clear the input field
    document.getElementById("user-input").value = "";
});

