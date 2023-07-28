const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector("statusText");
const restartBttn = document.querySelectorAll("restartBttn");
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

function initializeGame(){
    cells.forEach(cell.addEventListener('click', cellClicked))
    restartBttn.addEventListener('click', restartGame);
    statusText.textContent = ${currentPlayer}'s turn';
    running = true;

}

function cellClicked(){
    const cellIndex = this.getAttribute(cellIndex);

    if(options[cellIndex] != "" || !running){

    }

    updateCell(this, cellIndex)
    checkWinner();

}
 function updateCell(){
    options[index] = currentPlayer;
    cell.textContent = currentPlayer;

 }

 function changePlayer(){
     currentPlayer = (currentPlayer == 'X') ? "O" : "X"
     statusText.textContent = ${currentPlayer}'s turn';


}

 function checkWinner(){

 }

 function restartGame(){

 }