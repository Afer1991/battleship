import Ship from '../classes/ship';

test('ships take hits ', () => {
  const ship = new Ship (4);
  ship.hit();
  ship.hit();
  expect(ship.hits).toEqual(2);
});

test('ship sinks when hit enough times', () => {
  const ship = new Ship (3);
  ship.hit();
  ship.hit();
  ship.hit();
  expect(ship.isSunk()).toBeTruthy();
});

test('ship not considered sunk when not hit enough times', () => {
  const ship = new Ship (2);
  ship.hit();
  expect(ship.isSunk()).toBeFalsy();
});

test('ship is enabled to recognize coordinates', () => {
  const ship = new Ship (2);
  ship.setCoordinates(4, 5);
  expect(ship.coordinates[0].x).toBe(4);
});

test('ship informs what coordinates have been hit', () => {
  const ship = new Ship (1);
  ship.setCoordinates(1, 8);
  ship.hitCoordinates(1, 8);
  expect(ship.coordinates[0].hit).toBeTruthy();
});

test('ship informs if given coordinate has been hit already', () => {
  const ship = new Ship (1);
  ship.setCoordinates(3, 6);
  ship.hitCoordinates(3, 6);
  expect(ship.isCoordinateHit(3, 6)).toBeTruthy();
});