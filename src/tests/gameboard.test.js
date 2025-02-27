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