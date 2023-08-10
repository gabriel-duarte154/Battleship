import Gameboard from './gameboard.mjs';

describe('initial test', () => {
  test('gameboard', () => {
    let gameboard = Gameboard();
    expect(gameboard.getGameboard().length).toBe(10);
    gameboard.getGameboard().forEach((row) => {
      expect(row.length).toBe(10);
    });
  });
});

describe('setship function', () => {
  test('place a ship', () => {
    let gameboard = Gameboard();
    let ship = gameboard.getDestroyer();
    gameboard.setShip([0, 0], ship);

    expect(gameboard.getGameboard()[0][0].ship).toBeTruthy();
    expect(gameboard.getGameboard()[0][1].ship).toBeTruthy();
    expect(gameboard.getGameboard()[0][2].ship).toBeTruthy();
  });

  test("don't exceed the gameboard", () => {
    let gameboard = Gameboard();
    let ship = gameboard.getDestroyer();
    gameboard.setShip([0, 9], ship);

    expect(gameboard.getGameboard()[0][9].ship).toBeFalsy();
  });

  test("don't overlap a ship", () => {
    let gameboard = Gameboard();
    let ship1 = gameboard.getDestroyer();
    let ship2 = gameboard.getPatrolBoat();

    gameboard.setShip([0, 0], ship1);
    gameboard.setShip([0, 0], ship2);

    expect(ship1).not.toEqual(ship2);

    expect(gameboard.getGameboard()[0][0].ship).toEqual(ship1);
    expect(gameboard.getGameboard()[0][1].ship).toEqual(ship1);
    expect(gameboard.getGameboard()[0][2].ship).toEqual(ship1);
  });

  test('place ship in assis y', () => {
    let game = Gameboard();
    let ship = game.getDestroyer();
    game.setShip([0, 0], ship, true);

    expect(game.getGameboard()[0][0].ship).toBeTruthy();
    expect(game.getGameboard()[1][0].ship).toBeTruthy();
    expect(game.getGameboard()[2][0].ship).toBeTruthy();
  });
});

describe('reveiceAttck function', () => {
  test('keep track of missig shots', () => {
    let game = Gameboard();
    game.receiveAttack([0, 0]);
    game.receiveAttack([0, 9]);

    expect(game.getMissedShots()[0]).toEqual([0, 0]);
    expect(game.getMissedShots()[1]).toEqual([0, 9]);
  });

  test('if cell has a ship, hit the ship', () => {
    let game = Gameboard();
    let ship = game.getDestroyer();
    game.setShip([0, 0], ship);
    game.receiveAttack([0, 0]);

    expect(game.getMissedShots().length).toBe(0);
    expect(game.getGameboard()[0][0].ship.getHits()).toBe(1);
  });

  test("if cell was already been attacked, don't attack it again", () => {
    let game = Gameboard();
    game.receiveAttack([0, 0]);
    game.receiveAttack([0, 0]);
    game.receiveAttack([0, 0]);

    expect(game.getMissedShots().length).toBe(1);
  });

  test("if the cell has a ship and it has already been attacked, don't hit the ship again", () => {
    let game = Gameboard();
    let ship = game.getDestroyer();
    game.setShip([0, 0], ship);

    game.receiveAttack([0, 0]);
    game.receiveAttack([0, 2]);
    game.receiveAttack([0, 0]);

    expect(ship.getHits()).toBe(2);
  });
});

describe('When ot not all ships were sunk', () => {
  let game = Gameboard();
  let ship1 = game.getDestroyer();
  let ship2 = game.getPatrolBoat();
  game.setShip([0, 0], ship1);
  game.setShip([5, 0], ship2);

  test('Not all ships', () => {
    game.receiveAttack([0, 0]);
    game.receiveAttack([0, 1]);
    game.receiveAttack([0, 2]);

    expect(game.allShipsSunk()).toBeFalsy();
  });

  test('All ships', () => {
    game.receiveAttack([5, 0]);
    game.receiveAttack([5, 1]);

    expect(game.allShipsSunk()).toBeTruthy();
  });
});
