import "./style.css";
import { Player, Computer } from './classes/players.js';
import ui from './UI/UI.js';
import form from './UI/form.js';
import { createBoard, renderBoards } from './UI/renderboards.js'
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";

library.add(faGithub);
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

    renderBoards(player, computer);
  }, 2000);
});