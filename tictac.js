let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newbtn = document.querySelector("#newbtn");
let msg = document.querySelector("#msg");

let turn0 = true; // true for 'O' and false for 'X'
let gameActive = true;

const winningPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const checkWinner = () => {
  for (let pattern of winningPatterns) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    if (pos1 !== "" && pos1 === pos2 && pos2 === pos3) {
      gameActive = false;
      msg.innerText = `Winner: ${pos1}`;
      return;
    }
  }

  // Check if the board is full for a draw
  if ([...boxes].every((box) => box.innerText !== "")) {
    msg.innerText = "It's a Draw!";
    gameActive = false;
  }
};

const resetGame = () => {
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
  });
  msg.innerText = "New Game Started!";
  turn0 = true;
  gameActive = true;
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (gameActive) {
      box.innerText = turn0 ? "O" : "X";
      box.disabled = true;
      turn0 = !turn0;
      checkWinner();
    }
  });
});

reset.addEventListener("click", resetGame);
newbtn.addEventListener("click", resetGame);
