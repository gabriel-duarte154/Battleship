import Player from '../player/player.mjs';

const AttackTrack = (player, gameboard) => {
  let track = [];

  const fillAttackTrack = (position) => {
    let ship = gameboard.getGameboard()[position[0]][position[1]].ship;
    if (ship) {
      if (ship.isSunk()) {
        track = [];
        return;
      }
    }

    if (player.getLastShot() !== 'hit') return;

    let coords =
      ship.getAxis() === false
        ? getHorizontalCoords(position)
        : getVerticalCoords(position);

    coords = removeOverFlowCoord(coords);
    coords = removeHitCells(coords);

    coords.forEach((cell) => track.push(cell));
  };

  const getHorizontalCoords = (position) => {
    let x = position[0];
    let y = position[1];

    return [
      [x, y + 1],
      [x, y - 1],
    ];
  };

  const getVerticalCoords = (position) => {
    let x = position[0];
    let y = position[1];

    return [
      [x + 1, y],
      [x - 1, y],
    ];
  };

  const removeOverFlowCoord = (arr) => {
    return arr.filter((coord) => {
      return coord[0] < 10 && coord[1] < 10 && coord[0] >= 0 && coord[1] >= 0;
    });
  };

  const removeHitCells = (arr) => {
    return arr.filter((coord) => {
      return gameboard.getGameboard()[coord[0]][coord[1]].isHit === false;
    });
  };

  const getCell = () => {
    if (track.length === 0) return null;
    const index = Math.floor(Math.random() * track.length);
    const cell = track[index];
    remove(index);
    return cell;
  };

  const remove = (index) => {
    track.splice(index, 1);
  };

  return {
    fillAttackTrack,
    getCell,
  };
};

const Ia = (enemy) => {
  const enemyGameboard = enemy.gameboard;
  const iaPlayer = Player('Computer');
  const attackTrack = AttackTrack(iaPlayer, enemyGameboard);
  let hack = true;

  const randomAttack = () => {
    const possibleAttckCell =
      attackTrack.getCell() || hackCells() || getPossibleAttackCell();
    iaPlayer.attack(possibleAttckCell, enemyGameboard);
    attackTrack.fillAttackTrack(possibleAttckCell);
  };

  const hackCells = () => {
    if (!hack) return null;
    const shipCells = enemyGameboard.getShipCells();
    const index = Math.floor(Math.random() * shipCells.length);
    hack = false;
    return shipCells[index];
  };

  const getPossibleAttackCell = () => {
    const emptyCells = enemyGameboard.freeShotCells();
    const index = Math.floor(Math.random() * emptyCells.length);

    return emptyCells[index];
  };

  return {
    gameboard: iaPlayer.gameboard,
    name: iaPlayer.name,
    randomAttack,
    getLastShot: iaPlayer.getLastShot,
  };
};

export default Ia;
