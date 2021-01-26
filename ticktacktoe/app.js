document.addEventListener("DOMContentLoaded", () => {
  const squares = document.querySelectorAll(".grid div");
  const playerDisplay = document.querySelector("#player");

  let currentPlayer = "PlayerX";

  squares.forEach((square) => {
    square.addEventListener("click", clickOutcome);
  });

  function clickOutcome(e) {
    const squaresArray = Array.from(squares);
    const index = squaresArray.indexOf(e.target);
    console.log(index);
    playerDisplay.innerHTML = currentPlayer;

    if (currentPlayer === "PlayerX") {
      squares[index].classList.add("playerX");
      currentPlayer = "player 0";
    } else {
      currentPlayer = "PlayerX";

      squares[index].classList.add("playerO");
    }
  }
});
