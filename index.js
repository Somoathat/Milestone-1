const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector("#statusText");
const restartBttn = document.querySelector("#restartBttn");
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let running = false;

initializeGame();

function initializeGame() {
    cells.forEach((cell, index) => cell.addEventListener('click', cellClicked.bind(null,index)))
    restartBttn.addEventListener('click', restartGame);
    statusText.textContent = `${currentPlayer}'s turn`;
    running = true;
}

function cellClicked(...args) {
    const cellIndex = args[0];

    if (options[cellIndex] == "" && running) {
        updateCell(cellIndex)
        checkWinner();
    }
}

function updateCell(index) {
    options[index] = currentPlayer;
    cells[index].textContent = currentPlayer;
}

function changePlayer() {
    currentPlayer = (currentPlayer == 'X') ? "O" : "X"
    statusText.textContent = `${currentPlayer}'s turn`;


}

function checkWinner() {
    let roundWon = false;

    for (let i = 0; i < winConditions.length; i++) {
        const condition = winConditions[i];
        const cellA = options[condition[0]];
        const cellB = options[condition[1]];
        const cellC = options[condition[2]];
        if (allBlank(cellA, cellB, cellC)){
            continue;
        }
        if (cellA == cellB && cellB == cellC) {
            roundWon = true;
            break;
        }
    }
    if (roundWon) {
        statusText.textContent = `${currentPlayer} wins!`
        running = false;
    }
    else if (!options.includes("")) {
        statusText.textContent = 'Draw!'
        running = false;
    }
    else {
        changePlayer();
    }
}

function allBlank(a,b,c) {
    return a=="" && b=="" && c==""; 
}

function restartGame() {
    currentPlayer = "X";
    options = ["", "", "", "", "", "", "", "", ""];
    statusText.textContent = `${currentPlayer}'s turn`;
    cells.forEach(cell => cell.textContent = "")
    running = true;
}
