const headerGridContainer = document.querySelector('#header-container');
const itemGridContainer = document.querySelector('#grid-container');

function askSquareAmount() {
    itemGridContainer.innerHTML = '';

    let squareLength = parseInt(prompt("Input Square Length", "0"), 10);
    let squareWidth = parseInt(prompt("Input Square Width", "0"), 10);
    
    let cellWidth = `${100 / squareWidth}%`;
    itemGridContainer.style.setProperty('--cell-width', cellWidth);
    
    let squareAmount = squareLength * squareWidth;

    return squareAmount
}

function drawGrid() {
    const button = document.createElement('button');
    button.classList.add('generate-grid-button');
    button.textContent = 'Generate Grid';

    headerGridContainer.appendChild(button);

    button.addEventListener("click", () => {
        let getSquareAmount = askSquareAmount();

        for (let i = 0; i < getSquareAmount; i++) {
            const square = document.createElement('div');
            square.classList.add('square-div');
            itemGridContainer.appendChild(square);
        
            square.addEventListener("mouseover", () => {
                square.style.background = "black"
            })
        
            square.addEventListener("mouseleave", () => {
                square.style.backgroundColor = 'white';
            })
        }
    });
}

drawGrid();