import Gameboard from '../classes/gameboard';
import Ship from '../classes/ship';

test('gameboard has 10 rows', () => {
  const gameboard = new Gameboard();
  expect(gameboard.board.length).toEqual(10);
});

test('each gameboard row has 10 columns', () => {
  const gameboard = new Gameboard();
  expect(gameboard.board[4].length).toEqual(10);
});

test('gameboard starts empty', () => {
  const gameboard = new Gameboard();
  expect(gameboard.board[7][2]).toBeUndefined();
});

test('gameboard allows placement of ships', () => {
  const gameboard = new Gameboard();
  gameboard.placeShip(new Ship(3), 2, 2, true);
  expect(gameboard.board[3][2]).not.toBeUndefined();
});

test('gameboard does not allow ship placement out of bounds', () => {
  const gameboard = new Gameboard();
  expect(gameboard.placeShip(new Ship(1), 10, 8, false)).toBeFalsy();
});

test('gameboard does not allow ship placement on non-empty coordinate', () => {
  const gameboard = new Gameboard();
  gameboard.placeShip(new Ship(2), 7, 5, false);
  expect(gameboard.placeShip(new Ship(2), 8, 4, true)).toBeFalsy();
});

test('gameboard allows placement of multiple ships', () => {
  const gameboard = new Gameboard();
  gameboard.placeShip(new Ship(2), 1, 3, true);
  gameboard.placeShip(new Ship(1), 4, 8, false);
  gameboard.placeShip(new Ship(3), 5, 2, false);
  expect(gameboard.board[2][6]).not.toBeUndefined();
});

test('gameboard recognizes own ships', () => {
  const gameboard = new Gameboard();
  expect(gameboard.fleet[4]).not.toBeUndefined();
});

test('attacks are registered on correct ship', () => {
  const gameboard = new Gameboard();
  gameboard.placeShip(gameboard.fleet[4], 7, 4, true);
  gameboard.receiveAttack(7, 5);
  expect(gameboard.fleet[4].hits).toEqual(1);
});

test('keeps track of missed attacks', () => {
  const gameboard = new Gameboard();
  gameboard.receiveAttack(4, 9);
  expect(gameboard.board[9][4]).toBe("Missed Attack");
});

test('gameboard does not allow repeat missed attacks', () => {
  const gameboard = new Gameboard();
  gameboard.receiveAttack(5, 3);
  expect(gameboard.receiveAttack(5, 3)).toBeFalsy();
});

test('gameboard does not allow repeated successful attacks', () => {
  const gameboard = new Gameboard();
  gameboard.placeShip(gameboard.fleet[2], 4, 4, true);
  gameboard.placeShip(gameboard.fleet[3], 6, 8, false);
  gameboard.placeShip(gameboard.fleet[4], 8, 1, true);

  gameboard.receiveAttack(4, 5);
  gameboard.receiveAttack(6, 8);
  gameboard.receiveAttack(8, 8);
  gameboard.receiveAttack(8, 2);
  gameboard.receiveAttack(6, 5);
  gameboard.receiveAttack(2, 0);

  expect(gameboard.receiveAttack(8, 8)).toBeFalsy();
});

test('gameboard reports when all ships are sunk', () => {
  const gameboard = new Gameboard();
  gameboard.fleet[0].hit();
  gameboard.fleet[0].hit();
  gameboard.fleet[0].hit();
  gameboard.fleet[0].hit();
  gameboard.fleet[0].hit();

  gameboard.fleet[1].hit();
  gameboard.fleet[1].hit();
  gameboard.fleet[1].hit();
  gameboard.fleet[1].hit();

  gameboard.fleet[2].hit();
  gameboard.fleet[2].hit();
  gameboard.fleet[2].hit();

  gameboard.fleet[3].hit();
  gameboard.fleet[3].hit();
  gameboard.fleet[3].hit();
  
  gameboard.fleet[4].hit();
  gameboard.fleet[4].hit();

  expect(gameboard.allShipsSunk()).toBeTruthy();
});