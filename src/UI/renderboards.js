import typeWriter from "../helpers/typewriter.js";
import fadeTransition from "../helpers/fade.js";

const createBoard = (gameboard, player) => {
  const container = document.createElement("div");
  container.classList.add("board");

  for (let i = 0; i < gameboard.length; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);

    for (let j = 0; j < gameboard[i].length; j++) {
      const cell = document.createElement("div");
      cell.setAttribute("id", `${player.name}-${i}-${j}`);
      cell.classList.add("cell");
      row.appendChild(cell);
    };
  };

  return container;
};

const renderBoards = (player, computer) => {
  const main = document.querySelector(".main");

  while (main.hasChildNodes()) {
    main.removeChild(main.firstChild);
  };

  const container = document.createElement("div");
  container.setAttribute("id", "container");
  container.classList.add("container");
  container.style.flexDirection = "column";
  main.appendChild(container);

  const textContainer = document.createElement("div");
  textContainer.classList.add("text-container");
  textContainer.setAttribute("id", "text-container");
  container.appendChild(textContainer);
  typeWriter("text-container", `Awaiting orders, Captain ${player.name}`, 0);

  const boardContainer = document.createElement("div");
  boardContainer.classList.add("board-container");
  container.appendChild(boardContainer);

  const playerBoardContainer = document.createElement("div");
  playerBoardContainer.classList.add("player-board-container");
  boardContainer.appendChild(playerBoardContainer);

  const playerName = document.createElement("h2");
  playerName.innerText = `${player.name.toUpperCase()}`;
  playerBoardContainer.appendChild(playerName);

  const playerBoard = createBoard(player.gameboard.board, player);
  playerBoard.setAttribute("id", "player-board");
  playerBoardContainer.appendChild(playerBoard);

  const computerBoardContainer = document.createElement("div");
  computerBoardContainer.classList.add("computer-board-container");
  boardContainer.appendChild(computerBoardContainer);

  const computerName = document.createElement("h2");
  computerName.innerText = `${computer.name.toUpperCase()}`;
  computerBoardContainer.appendChild(computerName);

  const computerBoard = createBoard(computer.gameboard.board, computer);
  computerBoard.setAttribute("id", "computer-board");
  computerBoardContainer.appendChild(computerBoard);

  fadeTransition("container", "fadein");
};

export { createBoard, renderBoards };