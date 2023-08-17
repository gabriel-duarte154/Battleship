import Player from '../player/player.mjs';

const AttackTrack = (player, gameboard) => {
  const track = [];

  const fillAttackTrack = (position) => {
    if (player.getLastShot() !== 'hit') return;
    let x = position[0];
    let y = position[1];

    let arr = [
      [x + 1, y],
      [x - 1, y],
      [x, y - 1],
      [x, y + 1],
    ];

    arr = removeOverFlowCoord(arr);
    arr = removeHitCells(arr);

    arr.forEach((cell) => track.push(cell));
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
