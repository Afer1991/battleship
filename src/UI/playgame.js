import renderShip from "./renderships.js";
import typeWriter from "../helpers/typewriter.js";
import endGame from "./endgame.js";
import fadeTransition from "../helpers/fade.js";

const playGame = (player, computer) => {
  renderShip(player, player.gameboard.fleet[0], player.gameboard.fleet[0].coordinates[0]["x"], player.gameboard.fleet[0].coordinates[0]["y"], player.gameboard.fleet[0].coordinates[0]["isVertical"]);
  renderShip(player, player.gameboard.fleet[1], player.gameboard.fleet[1].coordinates[0]["x"], player.gameboard.fleet[1].coordinates[0]["y"], player.gameboard.fleet[1].coordinates[0]["isVertical"]);
  renderShip(player, player.gameboard.fleet[2], player.gameboard.fleet[2].coordinates[0]["x"], player.gameboard.fleet[2].coordinates[0]["y"], player.gameboard.fleet[2].coordinates[0]["isVertical"]);
  renderShip(player, player.gameboard.fleet[3], player.gameboard.fleet[3].coordinates[0]["x"], player.gameboard.fleet[3].coordinates[0]["y"], player.gameboard.fleet[3].coordinates[0]["isVertical"]);
  renderShip(player, player.gameboard.fleet[4], player.gameboard.fleet[4].coordinates[0]["x"], player.gameboard.fleet[4].coordinates[0]["y"], player.gameboard.fleet[4].coordinates[0]["isVertical"]);

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
  if (!computer.turn) {
    computer.gameboard.receiveAttack(x, y);
    if (computer.gameboard.board[y][x] == "Missed Attack") {
      square.innerHTML = '<i class="fa-solid fa-x"></i>';
    } else {
      square.innerHTML = '<i class="fa-solid fa-x" style="color: #FF0022;"></i>'
    };

    computer.turn = true;

    if (computer.gameboard.allShipsSunk()) {
      fadeTransition("container", "fadein");

      setTimeout(() => {
        endGame(player);
      }, 2000);
      return;
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

      if (player.gameboard.allShipsSunk()) {
        fadeTransition("container", "fadein");

        setTimeout(() => {
          endGame(computer);
        }, 2000);
        return;
      };

      textContainer.innerHTML = "";
      typeWriter("text-container", `Awaiting orders, Captain ${player.name}`, 0);

      setTimeout(() => {
        computer.turn = false;
      }, 2000);
    }, 4000);
  };  
};

export default playGame;