import Gameboard from './gameboard';

class Player {
  constructor(name) {
    this.name = name;
    this.gameboard = new Gameboard();
  }
}

class Computer {
  constructor() {
    this.name = "Computer";
    this.gameboard = new Gameboard();
  }
}

export { Player, Computer };