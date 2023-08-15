import Player from '../player/player.mjs';

const Ia = (enemy) => {
  const enemyGameboard = enemy.gameboard;
  const iaPlayer = Player();

  const randomAttack = () => {
    const possibleAttckCells = enemyGameboard.freeShotCells();
    const index = Math.floor(Math.random() * possibleAttckCells.length);
    iaPlayer.attack(possibleAttckCells[index], enemyGameboard);
  };

  return {
    gameboard: iaPlayer.gameboard,
    randomAttack,
  };
};

export default Ia;
