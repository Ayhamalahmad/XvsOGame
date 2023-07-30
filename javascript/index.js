// get Elements
let boxes = document.querySelectorAll(".box");
const statusText = document.querySelector(".statusText");
let restartBtn = document.querySelector(".restartBtn");

// Define win conditions for the game
const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// Initialize game variables
let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "x";
let start = false;

// Call the initializeGame function to set up event listeners and start the game
initializeGame();

// Function to initialize the game
function initializeGame() {
  // Add click event listeners to all the boxes
  boxes.forEach((box) => box.addEventListener("click", boxClicked));
  // Add click event listener to the restart button
  restartBtn.addEventListener("click", restartGame);
  // Show initial status text with the current player's turn
  statusText.textContent = `${currentPlayer}'s turn`;
  // Set the game status to start (true)
  start = true;
}

// Function called when a box is clicked
function boxClicked() {
  // Get the index of the clicked box
  const boxIndex = this.getAttribute("boxIndex");
  // Check if the box is already filled or the game has not started
  if (options[boxIndex] !== "" || !start) {
    return;
  }
  // Update the box with the current player's symbol
  updateBox(this, boxIndex);
  // Check if there is a winner after the current move
  checkWinner();
}

// Function to update the box with the current player's symbol
function updateBox(box, index) {
  options[index] = currentPlayer;
  box.textContent = currentPlayer;
}

// Function to switch to the next player after each move
function changePlayer() {
  currentPlayer = currentPlayer === "x" ? "o" : "x";
  statusText.textContent = `${currentPlayer}'s turn`;
}

// Function to check if there is a winner or a draw
function checkWinner() {
  let roundWon = false;
  for (let i = 0; i < winConditions.length; i++) {
    const condition = winConditions[i];
    const boxA = options[condition[0]];
    const boxB = options[condition[1]];
    const boxC = options[condition[2]];
    if (boxA === "" || boxB === "" || boxC === "") {
      continue;
    }
    if (boxA === boxB && boxB === boxC) {
      roundWon = true;
      break;
    }
  }

  // If there is a winner, display the winner and end the game
  if (roundWon) {
    statusText.textContent = `${currentPlayer} wins!`;
    start = false;
  }
  // If no winner and no empty box left, it's a draw
  else if (!options.includes("")) {
    statusText.textContent = `Draw`;
    start = false;
  } else {
    // If the game continues, switch to the next player
    changePlayer();
  }
}

// Function to restart the game
function restartGame() {
  // Reset game variables
  currentPlayer = "x";
  options = ["", "", "", "", "", "", "", "", ""];
  // Reset status text and clear the boxes
  statusText.textContent = `${currentPlayer}'s turn`;
  boxes.forEach((box) => (box.textContent = ""));
  // Set the game status to start (true)
  start = true;
}
