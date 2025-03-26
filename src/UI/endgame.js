import form from "./form";
import { Player, Computer } from '../classes/players.js';
import placeShipsBoard from "./placeships.js";
import fadeTransition from "../helpers/fade.js";

const endGame = (player) => {
  const main = document.querySelector(".main");

  while (main.hasChildNodes()) {
    main.removeChild(main.firstChild);
  };

  const container = document.createElement("div");
  container.setAttribute("id", "container");
  container.classList.add("container");
  main.appendChild(container);

  const winnerAnnouncer = document.createElement("div");
  winnerAnnouncer.classList.add("winner-container");
  container.appendChild(winnerAnnouncer);

  const winnerText = document.createElement("h1");
  winnerText.classList.add("winner-text");
  winnerText.innerText = "THE WINNER IS:";
  winnerAnnouncer.appendChild(winnerText);

  const winner = document.createElement("h1");
  winner.classList.add("winner");
  winner.innerText = `${player.name}`;
  winnerAnnouncer.appendChild(winner);

  const btnContainer = document.createElement("div");
  btnContainer.classList.add("btn-container");
  winnerAnnouncer.appendChild(btnContainer);

  const btn = document.createElement("button");
  btn.setAttribute("id", "restart-btn");
  btn.innerText = "PLAY AGAIN";
  btnContainer.appendChild(btn);

  btn.addEventListener("click", () => {
    fadeTransition("container", "fadein");
    
    setTimeout(() => {
      form();
      const playerName = document.getElementById("name");
      const formContainer = document.getElementById("form-container");
      const playerForm = document.querySelector("form");

      playerForm.addEventListener("submit", (e) => {
        e.preventDefault();
        formContainer.classList.toggle("fade");

        setTimeout(() => {
          const player = new Player(playerName.value);
          const computer = new Computer();

          placeShipsBoard(player, computer);
        }, 2000);
      });
    }, 2000);
  });

  fadeTransition("container", "fadein");
};

export default endGame; 