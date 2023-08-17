import Player from './player/player.mjs';
import Ia from './IA/computer_IA.mjs';
import placeShips from '../game_helpers/placeShips.mjs';
import events from '../pubsub/evets.mjs';

const gameOverData = (name) => {
  return {
    name,
  };
};

const shotData = {
  miss: {
    text: "It's a miss...",
    sound: 'shot_miss',
  },

  hit: {
    text: "It's a hit!",
    sound: 'shot_hit',
  },
};

const Game = () => {
  let player;
  let computer;
  let playerBoard;
  let computerBoard;
  let currentPlayer;
  let gameOver = false;

  function playerAttack(position) {
    if (gameOver) return;
    if (computerBoard.getGameboard()[position[0]][position[1]].isHit) return;

    player.attack(position, computerBoard);
    events.emit('fire_shot');

    if (verifyForGameOver(computer)) {
      gameOver = true;
      setGameOverData('Player');
      return;
    }
  }

  function computerAttack() {
    if (gameOver) return;

    computer.randomAttack();
    events.emit('fire_shot');

    if (verifyForGameOver(player)) {
      gameOver = true;
      setGameOverData('Computer');
      return;
    }
  }

  function verifyForGameOver(player) {
    return player.gameboard.allShipsSunk();
  }

  function setGameOverData(winner) {
    events.emit('gameOver', gameOverData(winner));
  }

  function setShips() {
    placeShips(player);
    placeShips(computer);
  }

  function getComputerBoard() {
    return computerBoard;
  }

  function getPlayerBoard() {
    return playerBoard;
  }

  function getCurrentPlayer() {
    return currentPlayer;
  }

  function init() {
    player = Player('Player');
    computer = Ia(player);
    playerBoard = player.gameboard;
    computerBoard = computer.gameboard;
    currentPlayer = 'player';
    gameOver = false;
    placeShips(computer);
  }

  function toggleCurrentPlayer() {
    currentPlayer === 'player'
      ? (currentPlayer = 'computer')
      : (currentPlayer = 'player');
  }

  function getPlayerShotData() {
    return shotData[player.getLastShot()];
  }

  function getComputerShotData() {
    return shotData[computer.getLastShot()];
  }

  function isGameOver() {
    return gameOver;
  }

  events.on('playerAttack', playerAttack);
  events.on('computerAttack', computerAttack);
  events.on('togglePlayer', toggleCurrentPlayer);

  return {
    init,
    playerAttack,
    computerAttack,
    verifyForGameOver,
    getComputerBoard,
    getPlayerBoard,
    getCurrentPlayer,
    getComputerShotData,
    getPlayerShotData,
    isGameOver,
  };
};

export default Game;
