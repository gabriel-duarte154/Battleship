const Ship = require('./ship.mjs');

describe('hit function', () => {
  test('incresse the hit', () => {
    let myShip = Ship(5);
    myShip.hit();
    expect(myShip.getHits()).toBe(1);
  });

  test("don't incresse the hit after the ship is sunk", () => {
    let myShip = Ship(2);
    myShip.hit();
    myShip.hit();
    myShip.hit();
    expect(myShip.getHits()).toBe(2);
  });
});

describe('sunk function', () => {
  test('when ship is not sunk', () => {
    let myShip = Ship(5);
    myShip.hit();
    expect(myShip.isSunk()).toBeFalsy();
  });

  test('when ship is sunk', () => {
    let myShip = Ship(2);
    myShip.hit();
    myShip.hit();
    expect(myShip.isSunk()).toBeTruthy();
  });
});
