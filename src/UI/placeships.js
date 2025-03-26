import { createBoard, renderBoards } from "./renderboards";
import renderShip from "./renderships";
import Gameboard from "../classes/gameboard";
import playGame from "./playgame";

const placeShipsBoard = (player, computer) => {
  const main = document.querySelector(".main");

  while (main.hasChildNodes()) {
    main.removeChild(main.firstChild);
  };

  const container = document.createElement("div");
  container.setAttribute("id", "container");
  container.classList.add("container");
  container.style.flexDirection = "column";
  main.appendChild(container);

  const placeShipText = document.createElement("h1");
  placeShipText.classList.add("place-ships-text");
  placeShipText.innerText = `${player.name.toUpperCase()}, PLACE YOUR SHIPS`;
  container.appendChild(placeShipText);

  const btnContainer = document.createElement("div");
  btnContainer.classList.add("btn-container");
  container.appendChild(btnContainer);

  const reshuffleBtn = document.createElement("button");
  reshuffleBtn.setAttribute("id", "reshuffle");
  reshuffleBtn.innerText = "RESHUFFLE";
  btnContainer.appendChild(reshuffleBtn);

  const startBtn = document.createElement("button");
  startBtn.setAttribute("id", "start-game");
  startBtn.innerText = "START GAME";
  btnContainer.appendChild(startBtn);

  const playerBoard = createBoard(player.gameboard.board, player);
  playerBoard.setAttribute("id", "place-ships");
  container.appendChild(playerBoard);

  pickRandomPlacement(player);
  computerPlacement(computer);

  reshuffleBtn.addEventListener("click", () => {
    reshuffle(player);
  });

  startBtn.addEventListener("click", () => {
    renderBoards(player, computer);
    playGame(player, computer);
  });
};

const pickRandomPlacement = (player) => {
  const possiblePlacements = [
    [
      [1, 1, true], [4, 1, false], [5, 4, true], [7, 9, false], [2, 8, false]
    ],
    [
      [8, 4, true], [4, 0, true], [1, 5, false], [4, 8, false], [7, 2, false]
    ],
    [
      [3, 5, false], [6, 8, false], [6, 2, false], [3, 1, true], [0, 0, true]
    ],
    [
      [4, 1, false], [2, 6, false], [1, 8, false], [8, 5, true], [2, 2, true]
    ],
    [
      [4, 8, false], [5, 2, true], [0, 6, true], [1, 1, false], [7, 1, true]
    ],
    [
      [1, 5, true], [5, 5, false], [3, 2, true], [6, 8, false], [7, 1, true]
    ],
    [
      [1, 1, false], [5, 8, false], [8, 3, true], [1, 4, false], [1, 7, false]
    ],
    [
      [4, 4, true], [5, 1, false], [2, 1, true], [9, 5, true], [1, 6, false]
    ],
    [
      [2, 4, false], [4, 6, true], [2, 2, false], [6, 7, false], [8, 3, true]
    ],
    [
      [8, 4, true], [1, 5, true], [0, 0, false], [5, 3, true], [3, 9, false]
    ]
  ];

  const randomNumber = Math.floor(Math.random() * possiblePlacements.length);

  renderShip(player, player.gameboard.fleet[0], possiblePlacements[randomNumber][0][0], possiblePlacements[randomNumber][0][1], possiblePlacements[randomNumber][0][2]);
  renderShip(player, player.gameboard.fleet[1], possiblePlacements[randomNumber][1][0], possiblePlacements[randomNumber][1][1], possiblePlacements[randomNumber][1][2]);
  renderShip(player, player.gameboard.fleet[2], possiblePlacements[randomNumber][2][0], possiblePlacements[randomNumber][2][1], possiblePlacements[randomNumber][2][2]);
  renderShip(player, player.gameboard.fleet[3], possiblePlacements[randomNumber][3][0], possiblePlacements[randomNumber][3][1], possiblePlacements[randomNumber][3][2]);
  renderShip(player, player.gameboard.fleet[4], possiblePlacements[randomNumber][4][0], possiblePlacements[randomNumber][4][1], possiblePlacements[randomNumber][4][2]);
};

const computerPlacement = (computer) => {
  const possiblePlacements = [
    [
      [1, 1, true], [4, 1, false], [5, 4, true], [7, 9, false], [2, 8, false]
    ],
    [
      [8, 4, true], [4, 0, true], [1, 5, false], [4, 8, false], [7, 2, false]
    ],
    [
      [3, 5, false], [6, 8, false], [6, 2, false], [3, 1, true], [0, 0, true]
    ],
    [
      [4, 1, false], [2, 6, false], [1, 8, false], [8, 5, true], [2, 2, true]
    ],
    [
      [4, 8, false], [5, 2, true], [0, 6, true], [1, 1, false], [7, 1, true]
    ],
    [
      [1, 5, true], [5, 5, false], [3, 2, true], [6, 8, false], [7, 1, true]
    ],
    [
      [1, 1, false], [5, 8, false], [8, 3, true], [1, 4, false], [1, 7, false]
    ],
    [
      [4, 4, true], [5, 1, false], [2, 1, true], [9, 5, true], [1, 6, false]
    ],
    [
      [2, 4, false], [4, 6, true], [2, 2, false], [6, 7, false], [8, 3, true]
    ],
    [
      [8, 4, true], [1, 5, true], [0, 0, false], [5, 3, true], [3, 9, false]
    ]
  ];

  const randomNumber = Math.floor(Math.random() * possiblePlacements.length);

  computer.gameboard.placeShip(computer.gameboard.fleet[0], possiblePlacements[randomNumber][0][0], possiblePlacements[randomNumber][0][1], possiblePlacements[randomNumber][0][2]);
  computer.gameboard.placeShip(computer.gameboard.fleet[1], possiblePlacements[randomNumber][1][0], possiblePlacements[randomNumber][1][1], possiblePlacements[randomNumber][1][2]);
  computer.gameboard.placeShip(computer.gameboard.fleet[2], possiblePlacements[randomNumber][2][0], possiblePlacements[randomNumber][2][1], possiblePlacements[randomNumber][2][2]);
  computer.gameboard.placeShip(computer.gameboard.fleet[3], possiblePlacements[randomNumber][3][0], possiblePlacements[randomNumber][3][1], possiblePlacements[randomNumber][3][2]);
  computer.gameboard.placeShip(computer.gameboard.fleet[4], possiblePlacements[randomNumber][4][0], possiblePlacements[randomNumber][4][1], possiblePlacements[randomNumber][4][2]);
};

const reshuffle = (player) => {
  player.gameboard = new Gameboard();
  
  const container = document.getElementById("container");
  const oldPlayerBoard = document.getElementById("place-ships");
  oldPlayerBoard.remove();

  const newPlayerBoard = createBoard(player.gameboard.board, player);
  newPlayerBoard.setAttribute("id", "place-ships"); 
  container.appendChild(newPlayerBoard);
  
  pickRandomPlacement(player);
};

export default placeShipsBoard;