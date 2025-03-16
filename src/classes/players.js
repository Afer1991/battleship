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
    this.opponentBoard = this.detectOpponentBoard();
  }

  detectOpponentBoard() {
    const opponentBoard = new Array();

    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        opponentBoard.push([i, j]);
      };
    };

    return opponentBoard;
  }

  makeMove() {
    const randomCoordinate = Math.floor(Math.random() * this.opponentBoard.length);
    const coordinateAttacked = this.opponentBoard[randomCoordinate];
    this.opponentBoard.splice(randomCoordinate, 1);
    
    return coordinateAttacked;
  }
}

export { Player, Computer };