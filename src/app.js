function generateBoardRecursive(container, rows, cols) {
    if (rows === 0) {
        return; // Base case: stop recursion when rows are exhausted
    }

    let row = document.createElement('div');
    row.className = 'connect-four-row';

    for (let j = 0; j < cols; j++) {
        let column = document.createElement('div');
        column.className = 'connect-four-column';
        row.appendChild(column);
    }

    container.prepend(row); // Use prepend instead of append to add the row at the beginning
    container.prepend(document.createElement('br')); // Add line break after each row

    // Recursive call for the next row
    generateBoardRecursive(container, rows - 1, cols);
}

// Find the board container by ID
const boardContainer = document.getElementById('connectFourBoard');

// Call the recursive function to generate a 6x7 board
generateBoardRecursive(boardContainer, 7, 6); // Modified the rows and cols parameter values

/*// Select all connect-four-columns inside the static board
const staticColumns = document.querySelectorAll('.connect-four-board .connect-four-column');

// Add event listener to staticColumns
staticColumns.forEach((column, columnIndex) => {
    column.addEventListener('click', function () {
        // Call the handlePlayerMove function with the column index
        handlePlayerMove(columnIndex);
    });
}); */

/*// Add event listeners to columns inside the boardContainer
boardContainer.addEventListener('click', function (event) {
    // Check if the clicked element has the class "connect-four-column"
    if (event.target.classList.contains('connect-four-column')) {
        // Get the index of the clicked column
        const columnIndex = Array.from(event.target.parentNode.children).indexOf(event.target);

        // Call the handlePlayerMove function with the column index
        handlePlayerMove(columnIndex);
    }
});*/

// Assume board is a 2D array representing the game board
const boardOld = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
];

const board = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0]
];


/*// Sample event listener for a column click
document.getElementById('connectFourBoard').addEventListener('click', function (event) {
    // Check if it's the current player's turn
    if (currentPlayer === 1 || currentPlayer === 2) {
        // Check if the clicked element has the class "connect-four-column"
        if (event.target.classList.contains('connect-four-column')) {
            // Get the index of the clicked column
            const columnIndex = Array.from(event.target.parentNode.children).indexOf(event.target);

            // Call the handlePlayerMove function with the column index
            handlePlayerMove(columnIndex);
        }
    }
});*/



document.getElementById('connectFourBoard').addEventListener('click', function (event) {
    // Check if it's the current player's turn
    if (currentPlayer === 1 || currentPlayer === 2) {
        // Check if the clicked element has the class "connect-four-row"
        if (event.target.classList.contains('connect-four-column')) {
            // Get the index of the clicked column
            const columnIndex = Array.from(event.target.parentNode.children).indexOf(event.target);

            // Call the handlePlayerMove function with the column index
            handlePlayerMove(columnIndex);
        }
    }
});


function handlePlayerMove(row) {
    console.log('Handling player move for row:', row);

    // Find the first empty column in the selected row from left to right
    for (let col = 0; col < board[row].length; col++) {
        if (board[row][col] === 0) {
            // Update the array with the player's move
            board[row][col] = currentPlayer;

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

    // Debugging information
    console.log('Updated board:', board);
    console.log('Current player:', currentPlayer);
}





let currentPlayer = 1;

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

            // Set border radius to make it a circle
            checker.style.borderRadius = '50%';
        }
    }
}





// Define the checkForWin function
function checkForWin() {
    // Implement logic to check if the current player has won
}

// Define the checkForDraw function
function checkForDraw() {
    // Implement logic to check if the game is a draw
}

// Function to switch player
function switchPlayer() {
    currentPlayer = currentPlayer === 1 ? 2 : 1;
    updateTurnIndicator()
}

function updateTurnIndicator() {
    const turnIndicator = document.getElementById('turnIndicator');
    turnIndicator.textContent = currentPlayer === 1 ? "Red's Turn" : "Yellow's Turn";
}

// Find the reset button by ID
const resetButton = document.getElementById('resetButton');

// Add a click event listener to the reset button
resetButton.addEventListener('click', function () {
    // Reset the board array
    resetBoard();

    // Reset the HTML representation of the board
    updateBoardHTML();

    // Reset the turn indicator
    resetTurnIndicator();
});

// Define the resetBoard function to clear the board array
function resetBoard() {
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[row].length; col++) {
            board[row][col] = 0;
        }
    }
}

// Define the resetTurnIndicator function to set it back to Red's Turn
function resetTurnIndicator() {
    currentPlayer = 1;
    updateTurnIndicator();
}


