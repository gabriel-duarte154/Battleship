import GameBoard from '../gameboard/gameboard.mjs';

function Player(name) {
  let lastShot;
  let missedShots;

  const attack = (position, gameboard) => {
    setMissedshots(gameboard);
    gameboard.receiveAttack(position);
    updateLastShoot(gameboard);
  };

  const setMissedshots = (gameboard) => {
    missedShots = gameboard.getMissedShots().length;
  };

  const updateLastShoot = (gameboard) => {
    gameboard.getMissedShots().length > missedShots
      ? (lastShot = 'miss')
      : (lastShot = 'hit');
  };

  const getLastShot = () => {
    return lastShot;
  };

  return {
    name,
    gameboard: GameBoard(),
    attack,
    getLastShot,
  };
}

export default Player;
