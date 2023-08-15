import Player from './player/player.mjs';
import Ia from './IA/computer_IA.mjs';
import placeShips from '../game_helpers/placeShips.mjs';

const Game = () => {
  const player = Player();
  const computer = Ia(player);
  const playerBoard = player.gameboard;
  const computerBoard = computer.gameboard;
  let currentPlayer = 'player';

  placeShips(player);
  placeShips(computer);

  function playerAttack(position) {
    if (currentPlayer !== 'player') return;
    if (computerBoard.getGameboard()[position[0]][position[1]].isHit) return;

    currentPlayer = 'computer';
    player.attack(position, computerBoard);
  }

  function computerAttack() {
    if (currentPlayer != 'computer') return;

    currentPlayer = 'player';
    computer.randomAttack();
  }

  return {
    playerBoard,
    computerBoard,
    playerAttack,
    computerAttack,
  };
};

export default Game;
