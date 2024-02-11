// Function to handle player move
function handlePlayerMove(column) {
    // Find the first empty row in the selected column
    for (let row = board.length - 1; row >= 0; row--) {
        if (board[row][column] === 0) {
            // Update the array with the player's move
            board[row][column] = currentPlayer;

            // Add logic to check for a win or draw
            checkForWin();
            checkForDraw();

            // Switch to the next player
            switchPlayer();

            // Update the HTML representation of the board
            updateBoardHTML();

            // Break out of the loop since the move has been made
            break;
        }
    }
}

// Function to switch player
function switchPlayer() {
    currentPlayer = currentPlayer === 1 ? 2 : 1;
}

// Function to update HTML representation of the board
function updateBoardHTML() {
    const columns = document.querySelectorAll('.connect-four-column');

    for (let col = 0; col < board[0].length; col++) {
        for (let row = 0; row < board.length; row++) {
            const index = row * board[row].length + col;
            const checker = columns[index];

            if (board[row][col] === 1) {
                checker.style.backgroundColor = 'red';
            } else if (board[row][col] === 2) {
                checker.style.backgroundColor = 'yellow';
            } else {
                checker.style.backgroundColor = '#f0f0f0';
            }
        }
    }
}

// Sample event listener for a column click
document.getElementById('connectFourBoard').addEventListener('click', function (event) {
    // Check if the clicked element has the class "connect-four-column"
    if (event.target.classList.contains('connect-four-column')) {
        // Get the index of the clicked column
        const columnIndex = Array.from(event.target.parentNode.children).indexOf(event.target);

        // Call the handlePlayerMove function with the column index
        handlePlayerMove(columnIndex);
    }
});
