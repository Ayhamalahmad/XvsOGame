# [X and O Game](https://ayhamalahmad.github.io/XvsOGame/)

This is a simple implementation of the classic Tic-Tac-Toe game in JavaScript. It allows two players to take turns and compete against each other to win the game.

## Game Rules

1. The game is played on a 3x3 grid.
2. Players take turns to place their symbols on the board. The first player uses "X", and the second player uses "O".
3. The goal is to get three of the same symbols in a row, either horizontally, vertically, or diagonally, to win the game.
4. If all the cells on the board are filled, and there is no winner, the game ends in a draw.

## How to Play

1. Open the [X and O Game](https://ayhamalahmad.github.io/XvsOGame/) in your web browser.
2. The game board will be displayed, showing a 3x3 grid.
3. Player 1 (X) starts the game. Click on an empty cell in the grid to place an "X".
4. Player 2 (O) takes the next turn. Click on another empty cell to place an "O".
5. Continue taking turns until one player wins or the game ends in a draw.
6. To restart the game, click the "Restart" button.

## Code Overview

The JavaScript code (`script.js`) contains the following functions:

1. `initializeGame`: Initializes the game by setting up event listeners for the game board cells and the restart button.
2. `boxClicked`: Handles the logic when a cell on the game board is clicked. It updates the board and checks for a winner or a draw.
3. `updateBox`: Updates the board with the current player's symbol (X or O).
4. `changePlayer`: Switches to the next player after each move.
5. `checkWinner`: Checks if there is a winner or a draw based on the current board status.
6. `restartGame`: Restarts the game by resetting variables and clearing the board.
