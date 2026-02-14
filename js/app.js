const cells = document.querySelectorAll(".cell")

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

const board = [
  "", "", "", "", "", "", "", "", ""
]
let currentPlayer = "X";

let gameActive = true;

cells.forEach(
  (cell, index) => {
    cell.addEventListener("click", () => {
      if (board[index] !== "")
        return;
      board[index] = currentPlayer;
      cell.textContent = currentPlayer;

      if (checkWinner())
      return;
      switchPlayer();

      if ( checkDraw()){

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
      console.log(board[a] + " wins!");
      return true;
    }
  } return false;
}
 function checkDraw(){
  if (board.every(cell => cell !== "")) {
    alert("Draw!")
    return true;
  }
    }
