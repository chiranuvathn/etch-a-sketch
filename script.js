const gridDiv = document.querySelector('#grid-container');
const squareAmt = 16 * 16; // 16 * 16 grid var for passing to loop //

function drawGrid() {
    for (let i = 0; i < squareAmt; i++) {
        const squareDiv = document.createElement('div');
        squareDiv.classList.add('square-div');
        gridDiv.appendChild(squareDiv);
    }
}

drawGrid();