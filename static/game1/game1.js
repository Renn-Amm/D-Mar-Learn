// Selecting DOM elements
const wordDisplay = document.querySelector(".word-display");
const guessesText = document.querySelector(".guesses-text b");
const keyboardDiv = document.querySelector(".keyboard");
const hangmanImage = document.querySelector(".hangman-box img");
const gameModal = document.querySelector(".game-modal");
const playAgainBtn = gameModal.querySelector("button");
const exitButton = document.querySelector(".return-main a");  // Select the exit button

// Initializing game variables
let currentWord, correctLetters, wrongGuessCount;
const maxGuesses = 6;

// Function to reset the game
const resetGame = () => {
    correctLetters = [];
    wrongGuessCount = 0;
    hangmanImage.src = `${staticBaseUrl}hangman-0.svg`;  // Setting the initial hangman image
    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;
    wordDisplay.innerHTML = currentWord.split("").map(() => `<li class="letter"></li>`).join("");
    keyboardDiv.querySelectorAll("button").forEach(btn => btn.disabled = false);
    gameModal.classList.remove("show");  // Ensure the modal is hidden when the game starts
};

// Function to select a random word and reset the game
const getRandomWord = () => {
    const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
    currentWord = word;  // Setting the current word
    document.querySelector(".hint-text b").innerText = hint;
    resetGame();
};

// Function to handle game over scenarios
const gameOver = (isVictory) => {
    const modalText = isVictory ? `You found the word:` : 'The correct word was:';
    gameModal.querySelector("img").src = `${staticBaseUrl}${isVictory ? 'victory.gif' : 'lost.gif'}`;
    gameModal.querySelector("h4").innerText = isVictory ? 'Congrats!' : 'Game Over!';
    gameModal.querySelector("p").innerHTML = `${modalText} <b>${currentWord}</b>`;
    gameModal.classList.add("show");
};

// Function to initialize the game upon clicking a letter
const initGame = (button, clickedLetter) => {
    if(currentWord.includes(clickedLetter)) {
        [...currentWord].forEach((letter, index) => {
            if(letter === clickedLetter) {
                correctLetters.push(letter);
                wordDisplay.querySelectorAll("li")[index].innerText = letter;
                wordDisplay.querySelectorAll("li")[index].classList.add("guessed");
            }
        });
    } else {
        wrongGuessCount++;
        hangmanImage.src = `${staticBaseUrl}hangman-${wrongGuessCount}.svg`;
    }
    button.disabled = true;  // Disabling the clicked button
    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;

    // Checking if the game is over
    if(wrongGuessCount === maxGuesses) return gameOver(false);
    if(correctLetters.length === currentWord.length) return gameOver(true);
};

// Function to handle exit button click
const handleExitClick = (event) => {
    event.preventDefault();  // Prevent the default behavior
    window.location.href = event.currentTarget.href;  // Force navigate to the specified href
};

// Creating keyboard buttons and adding event listeners
for (let i = 97; i <= 122; i++) {
    const button = document.createElement("button");
    button.innerText = String.fromCharCode(i);
    keyboardDiv.appendChild(button);
    button.addEventListener("click", (e) => initGame(e.target, String.fromCharCode(i)));
}

// Starting the game
getRandomWord();  // This will start the game when the page loads
playAgainBtn.addEventListener("click", getRandomWord);
exitButton.addEventListener("click", handleExitClick);  // Add event listener for the exit button
