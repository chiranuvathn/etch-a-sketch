const itemGridContainer = document.querySelector('#grid-container');
const squareAmount = 16 * 16; // total number of squares for the grid layout

function drawGrid() {
    for (let i = 0; i < squareAmount; i++) {
        const square = document.createElement('div');
        square.classList.add('square-div');
        itemGridContainer.appendChild(square);
    }
}

drawGrid();