const cells = document.querySelectorAll(".cell");
const messageDisplay = document.getElementById("message");
const resetButton = document.getElementById("reset-button");
let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function handleClick(event) {
  const cellIndex = event.target.dataset.index;

  if (board[cellIndex] !== "" || !gameActive) return;

  board[cellIndex] = currentPlayer;
  event.target.textContent = currentPlayer;

  if (checkWin()) {
    displayMessage(`${currentPlayer} wins!`);
    gameActive = false;
    return;
  }

  if (board.every((cell) => cell !== "")) {
    displayMessage("It's a draw!");
    gameActive = false;
    return;
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function checkWin() {
  return winningConditions.some((condition) => {
    return condition.every((index) => board[index] === currentPlayer);
  });
}

function displayMessage(message) {
  messageDisplay.textContent = message;
}

function resetGame() {
  board = ["", "", "", "", "", "", "", "", ""];
  cells.forEach((cell) => (cell.textContent = ""));
  currentPlayer = "X";
  gameActive = true;
  messageDisplay.textContent = "";
}

cells.forEach((cell) => cell.addEventListener("click", handleClick));
resetButton.addEventListener("click", resetGame);
