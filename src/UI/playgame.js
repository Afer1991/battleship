import renderShip from "./renderships.js";
import typeWriter from "../helpers/typewriter.js";

const playGame = (player, computer) => {
  renderShip(player, player.gameboard.fleet[0], 0, 0, false);
  renderShip(player, player.gameboard.fleet[1], 1, 2, true);
  renderShip(player, player.gameboard.fleet[2], 3, 5, false);
  renderShip(player, player.gameboard.fleet[3], 6, 8, false);
  renderShip(player, player.gameboard.fleet[4], 8, 1, true);

  computer.gameboard.placeShip(computer.gameboard.fleet[0], 1, 1, true);
  computer.gameboard.placeShip(computer.gameboard.fleet[1], 3, 6, false);
  computer.gameboard.placeShip(computer.gameboard.fleet[2], 6, 1, true);
  computer.gameboard.placeShip(computer.gameboard.fleet[3], 7, 9, false);
  computer.gameboard.placeShip(computer.gameboard.fleet[4], 1, 8, false);

  boardEventListeners(player, computer);
};

const boardEventListeners = (player, computer) => {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const cell = document.getElementById(`${computer.name}-${i}-${j}`);
      cell.addEventListener("click", () => {
        playRound(player, computer, cell, j, i);
      });
    };
  };
};

const playRound = (player, computer, square, x, y) => {
  computer.gameboard.receiveAttack(x, y);
  if (computer.gameboard.board[y][x] == "Missed Attack") {
    square.innerHTML = '<i class="fa-solid fa-x"></i>';
  } else {
    square.innerHTML = '<i class="fa-solid fa-x" style="color: #FF0022;"></i>'
  };

  const textContainer = document.getElementById("text-container");
  textContainer.innerHTML = "";
  typeWriter("text-container", "Computer is making a move...", 0);

  setTimeout(() => {
    let computerAttack = computer.makeMove();
    const playerSquare = document.getElementById(`${player.name}-${computerAttack[1]}-${computerAttack[0]}`);

    player.gameboard.receiveAttack(computerAttack[0], computerAttack[1]);

    if (player.gameboard.board[computerAttack[1]][computerAttack[0]] == "Missed Attack") {
      playerSquare.innerHTML = '<i class="fa-solid fa-x"></i>';
    } else {
      playerSquare.innerHTML = '<i class="fa-solid fa-x" style="color: #FF0022;"></i>'
    };

    textContainer.innerHTML = "";
    typeWriter("text-container", `Awaiting orders, Captain ${player.name}`, 0);
  }, 4000);
};

export default playGame;