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

  validPlacement(ship, x, y, isvertical) {
    if (!this.board[y][x]) {
      if (isvertical) {
        for (let i = 0; i < ship.length; i++) {
          if (this.board[y + i][x] !== undefined || y + i >= 10 || x >= 10) {
            return false;
          };
        };

        return true;
      } else {
        for (let i = 0; i < ship.length; i++) {
          if (this.board[y][x + i] !== undefined || x + i >= 10 || y >= 10) {
            return false;
          };
        };

        return true;
      }
    } else {
      return false;
    }
  }

  placeShip(ship, x, y, isvertical) {
    if (!this.validPlacement(ship, x, y, isvertical)) {
      return false;
    };

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