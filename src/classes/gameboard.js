export default class Gameboard {
  constructor() {
    this.board = new Array(new Array(10), new Array(10), new Array(10), new Array(10), new Array(10), new Array(10), new Array(10), new Array(10), new Array(10), new Array(10));
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