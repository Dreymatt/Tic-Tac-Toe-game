
// let index = 9;
// let columns = 3;
// let row = Math.floor(index / columns);
// let col = index % columns;
// if(!board[index.value])
//   console.log(row, col);
// function placeMark(index, player){
//   board[index] = player;
// }

const cells = document.querySelectorAll(".cell")
const resetBtn = document.getElementsByTagName("button")
const board = [
  "", "", "", "", "", "", "", "", ""
];
const winPatterns = [
  [0, 1, 2], //a, b, c
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let currentPlayer = "X";

let gameActive = true;

cells.forEach(
  (cell, index) => {
    cell.addEventListener("click", () => {
      if (board[index] !== "")
        return;
      board[index] = currentPlayer;
      cell.textContent = currentPlayer;

      console.log(board);
      computerMove();

      // switchPlayer();


      if (checkDraw()) {
        alert("Draw!")

      }


    });
  }
);

function switchPlayer() {
  if (currentPlayer === "X") {
    currentPlayer = "O";
    document.getElementById("player1").textContent = "Player2";
  } else {
    currentPlayer = "X";
    document.getElementById("player1").textContent = "Player1";
  }
};

function checkWinner() {
  for (let pattern of winPatterns) {
    let a = pattern[0];
    let b = pattern[1];
    let c = pattern[2];
    if (
      board[a] !== "" && board[a] === board[b] && board[a] === board[c]
    ) {
      alert(board[a] + " Wins!")
      reset()
      return true;
    }
  } return false;


}
function checkDraw() {
  if (board.every(cell => cell !== "")) {
    reset()
    return true;
  }
};
function computerMove() {
  const emptySquares = [];
  for (let i = 0; i < board.length; i++) {
    if (board[i] === "") {
      emptySquares.push(i);
    }
  }
  const randomIndex = emptySquares[Math.floor(Math.random() * emptySquares.length)];
  board[randomIndex] = "O";
  renderBoard()
  checkWinner()
}
function renderBoard() {
  cells.forEach((square, index) => {
    square.textContent = board[index]
  })
};
function reset() {
  board.fill("");
  cells.forEach((square) => {
    square.textContent = board[""]
  })
}




