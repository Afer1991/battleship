export default class Gameboard {
  constructor() {
    this.board = this.buildBoard();
  }

  buildBoard() {
    const board = new Array(10);

    for(let i = 0; i < board.length; i++) {
      board[i] = new Array(10);
    };

    return board;
  }

  placeShip(ship, x, y, isvertical) {
    if (isvertical) {
      for (let i = 0; i < ship.length; i++) {
        this.board[y + i][x] = ship;
      };
    } else {
      for (let i = 0; i < ship.length; i++) {
        this.board[y][x + i] = ship;
      };
    }
  } 
}