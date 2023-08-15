import GameBoard from '../gameboard/gameboard.mjs';

function Player() {
  const attack = (position, gameboard ) => {
    gameboard.receiveAttack(position);
  };

  return {
    gameboard: GameBoard(),
    attack,
  };
}

export default Player;
