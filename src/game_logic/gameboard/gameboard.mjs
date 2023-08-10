import Ship from '../ship/ship.mjs';

const Cell = (position) => {
  return {
    position,
    isHit: false,
    ship: false,
  };
};

const Gameboard = () => {
  const missedShoots = [];
  const ships = [];
  const getMissedShots = () => missedShoots;
  const getCarrier = () => Ship(5);
  const getBattleship = () => Ship(4);
  const getDestroyer = () => Ship(3);
  const getSubmarine = () => Ship(3);
  const getPatrolBoat = () => Ship(2);
  const allShipsSunk = () => ships.every((ship) => ship.isSunk() === true);
  const makeGameboard = () => {
    let gameboard = [];

    for (let i = 0; i < 10; i++) {
      let row = [];
      for (let j = 0; j < 10; j++) {
        row.push(Cell([i, j]));
      }
      gameboard.push(row);
    }

    return gameboard;
  };

  const gameboard = makeGameboard();
  const getGameboard = () => gameboard;

  const setShip = (coord, ship, isVertical = false) => {
    let length = ship.getShipLength();
    let coords = getShipCoords(coord[0], coord[1], length, isVertical);

    if (hasShip(coords)) return;
    if (overFlowGameboard(coord, length)) return;

    coords.forEach((coord) => (gameboard[coord[0]][coord[1]].ship = ship));
    ships.push(ship);
  };

  const overFlowGameboard = (coord, length) => {
    return coord[0] + length > 9 || coord[1] + length > 9;
  };

  const hasShip = (coords) => {
    let fillCells = getFillCells();

    for (let i in fillCells) {
      for (let j in coords) {
        if (
          fillCells[i][0] === coords[j][0] &&
          fillCells[i][1] === coords[j][i]
        ) {
          return true;
        }
      }
    }

    return false;
  };

  const getShipCoords = (x, y, length, isVertical) => {
    return isVertical
      ? getVerticalPosition(x, y, length)
      : getHorizontalPosition(x, y, length);
  };

  const getVerticalPosition = (x, y, length) => {
    let coords = [];

    for (let i = x; i < x + length; i++) {
      coords.push([i, y]);
    }

    return coords;
  };

  const getHorizontalPosition = (x, y, length) => {
    let coords = [];

    for (let i = y; i < y + length; i++) {
      coords.push([x, i]);
    }

    return coords;
  };

  const getFillCells = () => {
    let fillCells = [];

    for (let i in gameboard) {
      for (let j in gameboard[i]) {
        if (gameboard[i][j].ship) {
          fillCells.push(gameboard[i][j].position);
        }
      }
    }

    return fillCells;
  };

  const receiveAttack = (coord) => {
    const cell = gameboard[coord[0]][coord[1]];

    if (cell.isHit) return;

    cell.isHit = true;

    if (!cell.ship) {
      missedShoots.push(coord);
      return;
    }

    cell.ship.hit();
  };

  return {
    getGameboard,
    getDestroyer,
    getBattleship,
    getCarrier,
    getSubmarine,
    setShip,
    getPatrolBoat,
    getFillCells,
    receiveAttack,
    getMissedShots,
    allShipsSunk,
  };
};

export default Gameboard;
