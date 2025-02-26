import Ship from './classes/ship.js';

it('ships take hits ', () => {
  const ship = new Ship ();
  ship.hit();
  expect(ship.hits).toEqual(1);
});