import "./style.css";
import { Player, Computer } from './classes/players.js';
import ui from './UI/UI.js';
import form from './UI/form.js';
import placeShipsBoard from "./UI/placeships.js";
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faX } from "@fortawesome/free-solid-svg-icons/faX";

library.add(faGithub);
library.add(faX);
dom.watch();

ui();
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
