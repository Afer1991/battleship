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