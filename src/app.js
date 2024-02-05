// Function to generate the Connect Four board
function generateBoard(rows, cols) {
    let boardContainer = document.getElementById('connectFourBoard');

    for (let i = 0; i < rows; i++) {
        let row = document.createElement('div');
        row.className = 'connect-four-row row';

        for (let j = 0; j < cols; j++) {
            let column = document.createElement('div');
            column.className = 'connect-four-column col';
            row.appendChild(column);
        }

        boardContainer.appendChild(row);
    }
}

// Call the function to generate a 6x7 board
generateBoard(6, 7);

// Assuming your boardContainer has an ID, let's say "boardContainer"
const boardContainer = document.getElementById('boardContainer');

// Add event listeners to columns inside the boardContainer
boardContainer.addEventListener('click', function(event) {
  // Check if the clicked element has the class "connect-four-column"
  if (event.target.classList.contains('connect-four-column')) {
    // Get the index of the clicked column
    const columnIndex = Array.from(event.target.parentNode.children).indexOf(event.target);

    // Call the handlePlayerMove function with the column index
    handlePlayerMove(columnIndex);
  }
});

// Assume board is a 2D array representing the game board
const board = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
  ];
  
 

  boardContainer.addEventListener('click', function(event) {
    // Check if the clicked element has the class "connect-four-column"
    if (event.target.classList.contains('connect-four-column')) {
      // Get the index of the clicked column
      const columnIndex = Array.from(event.target.parentNode.children).indexOf(event.target);
  
      // Call the handlePlayerMove function with the column index
      handlePlayerMove(columnIndex);
    }
  });
  
  // Define the handlePlayerMove function
  function handlePlayerMove(column) {
    // Find the first empty row in the selected column
    for (let row = board.length - 1; row >= 0; row--) {
      if (board[row][column] === 0) {
        // Update the array with the player's move
        board[row][column] = currentPlayer; // Assume currentPlayer is a global variable representing the current player (1 or 2)
        
        // Update the HTML representation of the board
        updateBoardHTML();
        
        // Add logic to check for a win or draw
        checkForWin();
        checkForDraw();
        
        // Switch to the next player
        switchPlayer();
        
        // Break out of the loop since the move has been made
        break;
      }
    }
  }
  
  // Define the updateBoardHTML function
  function updateBoardHTML() {
    // Implement logic to update the HTML representation of the board based on the current state of the array
    // This involves iterating through the 2D array and updating the corresponding HTML elements
    // You may use a nested loop to achieve this
  }
  
  // Define the checkForWin function
  function checkForWin() {
    // Implement logic to check if the current player has won
  }
  
  // Define the checkForDraw function
  function checkForDraw() {
    // Implement logic to check if the game is a draw
  }
  
  // Define the switchPlayer function
  function switchPlayer() {
    // Implement logic to switch to the next player
  }
  
