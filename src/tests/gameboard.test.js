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