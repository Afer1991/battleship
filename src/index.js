import "./style.css";
import { Player, Computer } from './classes/players.js';
import ui from './UI/UI.js';
import form from './UI/form.js';
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";

library.add(faGithub);
dom.watch();

ui();
form();