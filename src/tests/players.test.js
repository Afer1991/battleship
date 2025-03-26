import { Computer } from '../classes/players';

test('Computer does not make invalid moves', () => {
  const computer = new Computer();
  const computerAttack = computer.makeMove();

  expect(computerAttack[0]).toBeLessThanOrEqual(9);
});

test('Computer registers all potential moves', () => {
  const computer = new Computer();
  expect(computer.opponentBoard.length).toBe(100);
});

test('Computer detects coordinates for potential moves', () => {
  const computer = new Computer();
  expect(computer.opponentBoard[9][1]).toBe(9);
});

test('Computer does not repeat attacks', () => {
  const computer = new Computer();

  computer.makeMove();
  computer.makeMove();
  computer.makeMove();

  expect(computer.opponentBoard.length).toBe(97);
});
