const WORDS = ["apple", "grape", "pearl", "chair", "table", "flame", "bread", "house", "light", "dream"];
const solution = WORDS[Math.floor(Math.random() * WORDS.length)];
console.log('Solution:', solution); // For testing

const board = document.getElementById('board');
const keyboard = document.getElementById('keyboard');

let currentRow = 0;
let currentCol = 0;
const maxRows = 6;
const wordLength = 5;

const grid = [];

// Create the game board
function createBoard() {
  for (let i = 0; i < maxRows; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    const rowTiles = [];
    for (let j = 0; j < wordLength; j++) {
      const tile = document.createElement('div');
      tile.classList.add('tile');
      row.appendChild(tile);
      rowTiles.push(tile);
    }
    board.appendChild(row);
    grid.push(rowTiles);
  }
}

// Create the on-screen keyboard
function createKeyboard() {
  const keys = 'QWERTYUIOPASDFGHJKLZXCVBNM';
  keys.split('').forEach(letter => {
    const key = document.createElement('button');
    key.classList.add('key');
    key.textContent = letter;
    key.addEventListener('click', () => handleKey(letter));
    keyboard.appendChild(key);
  });

  const enter = document.createElement('button');
  enter.textContent = 'Enter';
  enter.classList.add('key');
  enter.addEventListener('click', submitWord);
  keyboard.appendChild(enter);

  const back = document.createElement('button');
  back.textContent = '←';
  back.classList.add('key');
  back.addEventListener('click', deleteLetter);
  keyboard.appendChild(back);
}

// Handle typing a letter
function handleKey(letter) {
  if (currentCol < wordLength && currentRow < maxRows) {
    grid[currentRow][currentCol].textContent = letter.toUpperCase();
    currentCol++;
  }
}

// Handle deleting a letter
function deleteLetter() {
  if (currentCol > 0) {
    currentCol--;
    grid[currentRow][currentCol].textContent = '';
  }
}

// Handle submitting a guess
function submitWord() {
  if (currentCol !== wordLength) {
    alert("Not enough letters!");
    return;
  }

  let guess = '';
  for (let i = 0; i < wordLength; i++) {
    guess += grid[currentRow][i].textContent.toLowerCase();
  }

  // Color tiles and keyboard
  for (let i = 0; i < wordLength; i++) {
    const letter = guess[i];
    const tile = grid[currentRow][i];

    // Find corresponding key button
    const keyButton = Array.from(document.querySelectorAll('.key')).find(
      k => k.textContent === letter.toUpperCase()
    );

    if (solution[i] === letter) {
      tile.classList.add('correct'); // green
      if (keyButton) keyButton.classList.add('correct');
    } else if (solution.includes(letter)) {
      tile.classList.add('present'); // yellow
      if (keyButton && !keyButton.classList.contains('correct')) keyButton.classList.add('present');
    } else {
      tile.classList.add('absent'); // gray
      if (keyButton && !keyButton.classList.contains('correct') && !keyButton.classList.contains('present')) keyButton.classList.add('absent');
    }
  }

  // Check for win
  if (guess === solution) {
    setTimeout(() => alert("Congratulations! You guessed the word!"), 100);
  } else if (currentRow === maxRows - 1) {
    setTimeout(() => alert(`Game Over! The word was "${solution.toUpperCase()}"`), 100);
  }

  currentRow++;
  currentCol = 0;
}

// Initialize game
createBoard();
createKeyboard();
const restartBtn = document.getElementById('restart-btn');

restartBtn.addEventListener('click', restartGame);

function restartGame() {
  // Reset board tiles
  for (let i = 0; i < maxRows; i++) {
    for (let j = 0; j < wordLength; j++) {
      grid[i][j].textContent = '';
      grid[i][j].classList.remove('correct', 'present', 'absent');
    }
  }

  // Reset keyboard keys
  document.querySelectorAll('.key').forEach(key => {
    key.classList.remove('correct', 'present', 'absent');
  });

  // Reset variables
  currentRow = 0;
  currentCol = 0;

  // Pick a new random word
  solution = WORDS[Math.floor(Math.random() * WORDS.length)];
  console.log('New Solution:', solution); // For testing
}
