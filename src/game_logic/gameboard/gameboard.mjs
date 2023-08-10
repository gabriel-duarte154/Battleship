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
  const getCarrier = () => Ship('Carrier', 5);
  const getBattleship = () => Ship('BattleShip', 4);
  const getDestroyer = () => Ship('Destroyer', 3);
  const getSubmarine = () => Ship('Submarine', 3);
  const getPatrolBoat = () => Ship('Patrol Boat', 2);
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

    if (hasShip(coords) || overFlowGameboard(coord, length, isVertical)) {
      return false;
    }

    coords.forEach((coord) => (gameboard[coord[0]][coord[1]].ship = ship));
    ships.push(ship);

    return true;
  };

  const overFlowGameboard = (coord, length, isVertical) => {
    return isVertical === true
      ? coord[0] + length > 10
      : coord[1] + length > 10;
  };

  const hasShip = (coords) => {
    let fillCells = getFillCells();

    for (let i in fillCells) {
      for (let j in coords) {
        if (
          fillCells[i][0] === coords[j][0] &&
          fillCells[i][1] === coords[j][1]
        ) {
          return true;
        }
      }
    }

    return false;
  };

  const getShipCoords = (x, y, length, isVertical) => {
    return isVertical === true
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
    return filter((cell) => cell.ship);
  };

  const getEmptyCells = () => {
    return filter((cell) => (cell.ship === false ? true : false));
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

  const filter = (fun) => {
    let filltred = [];
    for (let i in gameboard) {
      for (let j in gameboard[i])
        if (fun(gameboard[i][j])) filltred.push(gameboard[i][j].position);
    }

    return filltred;
  };

  const setRandomShip = (ship) => {
    const emptyCells = getEmptyCells();

    while (emptyCells.length > 0) {
      const position = Math.floor(Math.random() * (emptyCells.length - 1));
      let assis = Math.floor(Math.random() * 2) === 1 ? true : false;

      if (setShip(emptyCells[position], ship, assis) === false) {
        assis = assis === true ? false : true;

        if (setShip(emptyCells[position], ship, assis) === false) {
          emptyCells.splice(position, 1);
          continue;
        }
      }

      return;
    }
  };

  const log = () => {
    let string = '';

    for (let i in gameboard) {
      string += '\n';
      for (let j in gameboard[i]) {
        if (gameboard[i][j].isHit && gameboard[i][j].ship) {
          string += ' x ';
          continue;
        }
        if (gameboard[i][j].isHit) {
          string += '*';
        }
        if (gameboard[i][j].ship) {
          string += ` ${gameboard[i][j].ship.name[0]} `;
          continue;
        }

        string += ' - ';
      }
    }

    console.log(string);
  };

  return {
    getGameboard,
    getDestroyer,
    getBattleship,
    getCarrier,
    getSubmarine,
    setShip,
    getPatrolBoat,
    receiveAttack,
    getMissedShots,
    allShipsSunk,
    setRandomShip,
    getEmptyCells,
    log,
  };
};

const game = Gameboard();

game.setRandomShip(game.getCarrier());
game.setRandomShip(game.getPatrolBoat());

game.log();

export default Gameboard;
