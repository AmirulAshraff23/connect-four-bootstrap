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