const WORDS = ["apple", "grape", "pearl", "chair", "table", "flame", "bread", "house", "light", "dream"];

// Solution must be let so it can be replaced on restart
let solution = WORDS[Math.floor(Math.random() * WORDS.length)];
console.log("Solution:", solution);

const board = document.getElementById("board");
const keyboard = document.getElementById("keyboard");

let currentRow = 0;
let currentCol = 0;
const maxRows = 6;
const wordLength = 5;

const grid = [];

// ------------------------------
// Create the board tiles
// ------------------------------
function createBoard() {
  for (let i = 0; i < maxRows; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    const rowTiles = [];

    for (let j = 0; j < wordLength; j++) {
      const tile = document.createElement("div");
      tile.classList.add("tile");
      row.appendChild(tile);
      rowTiles.push(tile);
    }

    board.appendChild(row);
    grid.push(rowTiles);
  }
}

// ------------------------------
// Create keyboard
// ------------------------------
function createKeyboard() {
  const keyRows = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"];

  keyRows.forEach(row => {
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("keyboard-row");

    row.split("").forEach(letter => {
      const key = document.createElement("button");
      key.classList.add("key", "letter-key");
      key.dataset.letter = letter;
      key.textContent = letter;
      key.addEventListener("click", () => handleKey(letter));
      rowDiv.appendChild(key);
    });

    keyboard.appendChild(rowDiv);
  });

  // ENTER key
  const enter = document.createElement("button");
  enter.textContent = "Enter";
  enter.classList.add("key", "action-key");
  enter.addEventListener("click", submitWord);
  keyboard.appendChild(enter);

  // BACKSPACE key
  const back = document.createElement("button");
  back.textContent = "←";
  back.classList.add("key", "action-key");
  back.addEventListener("click", deleteLetter);
  keyboard.appendChild(back);
}

// ------------------------------
// Add letter to board
// ------------------------------
function handleKey(letter) {
  if (currentCol < wordLength && currentRow < maxRows) {
    grid[currentRow][currentCol].textContent = letter.toUpperCase();
    currentCol++;
  }
}

// ------------------------------
// Delete last letter
// ------------------------------
function deleteLetter() {
  if (currentCol > 0) {
    currentCol--;
    grid[currentRow][currentCol].textContent = "";
  }
}

// ------------------------------
// Submit a guess
// ------------------------------
function submitWord() {
  if (currentCol !== wordLength) {
    alert("Not enough letters!");
    return;
  }

  let guess = "";
  for (let i = 0; i < wordLength; i++) {
    guess += grid[currentRow][i].textContent.toLowerCase();
  }

  // Check each letter
  for (let i = 0; i < wordLength; i++) {
    const letter = guess[i];
    const tile = grid[currentRow][i];

    const keyButton = document.querySelector(
      `.letter-key[data-letter="${letter.toUpperCase()}"]`
    );

    if (solution[i] === letter) {
      tile.classList.add("correct"); // Green
      if (keyButton) keyButton.classList.add("correct");
    } else if (solution.includes(letter)) {
      tile.classList.add("present"); // Yellow
      if (keyButton && !keyButton.classList.contains("correct")) {
        keyButton.classList.add("present");
      }
    } else {
      tile.classList.add("absent"); // Gray
      if (
        keyButton &&
        !keyButton.classList.contains("correct") &&
        !keyButton.classList.contains("present")
      ) {
        keyButton.classList.add("absent");
      }
    }
  }

  // WIN check
  if (guess === solution) {
    setTimeout(() => alert("Congratulations! You guessed the word!"), 100);
  } else if (currentRow === maxRows - 1) {
    setTimeout(() => alert(`Game Over! The word was "${solution.toUpperCase()}"`), 100);
  }

  currentRow++;
  currentCol = 0;
}

// ------------------------------
// Restart game
// ------------------------------
const restartBtn = document.getElementById("restart-btn");

restartBtn.addEventListener("click", restartGame);

function restartGame() {
  // Clear tiles
  grid.forEach(row =>
    row.forEach(tile => {
      tile.textContent = "";
      tile.classList.remove("correct", "present", "absent");
    })
  );

  // Reset keyboard
  document.querySelectorAll(".letter-key").forEach(key => {
    key.classList.remove("correct", "present", "absent");
  });

  // Reset state
  currentRow = 0;
  currentCol = 0;

  // New solution
  solution = WORDS[Math.floor(Math.random() * WORDS.length)];
  console.log("New Solution:", solution);
}

// Initialize
createBoard();
createKeyboard();
