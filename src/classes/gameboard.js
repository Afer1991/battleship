import Ship from './ship';

export default class Gameboard {
  constructor() {
    this.board = this.buildBoard();
    this.fleet = [
      new Ship(5), 
      new Ship(4), 
      new Ship(3), 
      new Ship(3), 
      new Ship(2)
    ];
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
        ship.setCoordinates(x, y + i, isvertical);
      };
    } else {
      for (let i = 0; i < ship.length; i++) {
        this.board[y][x + i] = ship;
        ship.setCoordinates(x + i, y, isvertical);
      };
    }
  }
  
  receiveAttack(x, y) {
    if (this.board[y][x] && this.board[y][x] !== "Missed Attack") {
      if(!this.board[y][x].isCoordinateHit(x, y)) {
        this.board[y][x].hit();
        this.board[y][x].hitCoordinates(x, y);
        return;
      };

      return false;
    } else if (this.board[y][x] == "Missed Attack") {
      return false;
    } else {
      this.board[y][x] = "Missed Attack";
      return;
    };
  }
  
  allShipsSunk() {
    const areAllShipsSunk = this.fleet.every(ship => ship.isSunk());
    return areAllShipsSunk;
  }
}