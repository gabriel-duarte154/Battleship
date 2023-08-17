import events from '../pubsub/evets.mjs';
import { game_screen } from '../components/game_screen.mjs';

const gameboard_controller = () => {
  const playerBoardElement = game_screen.querySelector('#player_board');
  const computerBoardElement = game_screen.querySelector('#computer_board');
  let playerBoard;
  let computerBoard;
  let game;

  function setGameboard() {
    cleanHTML(playerBoardElement);
    cleanHTML(computerBoardElement);
    fillPlayer(playerBoardElement, playerBoard);
    fillComputerBoard(computerBoardElement, computerBoard);

    events.emit('setGameScreen', game_screen);
    events.emit('initDisplay');
  }

  function cleanHTML(element) {
    element.innerHTML = '';
  }

  function fillPlayer(boardELement, gameboard) {
    for (let i in gameboard) {
      for (let j in gameboard[i]) {
        const cell = document.createElement('div');
        cell.dataset.position = gameboard[i][j].position;
        if (gameboard[i][j].ship) {
          cell.classList.add('has_ship');
        }
        boardELement.appendChild(cell);
      }
    }
  }

  function fillComputerBoard(boardELement, gameboard) {
    for (let i in gameboard) {
      for (let j in gameboard[i]) {
        const cell = document.createElement('div');
        cell.dataset.position = gameboard[i][j].position;
        cell.addEventListener('click', () => {
          attackEvent(gameboard[i][j].position);
        });
        boardELement.appendChild(cell);
      }
    }
  }

  async function attackEvent(position) {
    if (game.getCurrentPlayer() !== 'player') return;
    if (computerBoard[position[0]][position[1]].isHit) return;

    events.emit('write', 'Aim on the enemy waters...');
    events.emit('togglePlayer');
    markPosition(position);

    await deleyEvent(1200)
      .then(() => {
        playerAttck(position);

        return deleyEvent(800);
      })
      .then(() => {
        let data = game.getPlayerShotData();
        events.emit('write', data.text);
        events.emit(data.sound);
        updateComputerBoard();

        if (game.isGameOver()) return stopDeleyEvent(500);
        return deleyEvent(800);
      })
      .then(() => {
        events.emit('write', 'Enemy Aim on ours waters...');
        return deleyEvent(1400);
      })
      .then(() => {
        computerAttck();
        let data = game.getComputerShotData();
        events.emit('write', data.text);
        events.emit(data.sound);

        return deleyEvent(900);
      })
      .then(() => {
        upadatePlayerBoard();
        events.emit('write', 'Await orders...');
        return deleyEvent(700);
      })
      .then(() => {
        events.emit('togglePlayer');
      })
      .catch((err) => {});
  }

  function deleyEvent(time) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      });
    });
  }

  function stopDeleyEvent(time) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject('gameOver');
      }, time);
    });
  }

  function markPosition(position) {
    let cells = computerBoardElement.querySelectorAll('div');

    for (let i in cells) {
      if (cells[i].dataset.position === position.join()) {
        cells[i].textContent = 'X';
        return;
      }
    }
  }

  function playerAttck(position) {
    events.emit('playerAttack', position);
  }

  function computerAttck() {
    events.emit('computerAttack');
  }

  function updateComputerBoard() {
    upadateBoard(computerBoardElement, computerBoard);
  }

  function upadatePlayerBoard() {
    upadateBoard(playerBoardElement, playerBoard);
  }

  function upadateBoard(boardELement, gameBoard) {
    const cells = [...boardELement.querySelectorAll('div')];

    cells.forEach((cell) => {
      const position = cell.dataset.position.split(',');
      updateCell(cell, gameBoard[position[0]][position[1]]);
    });
  }

  function updateCell(cellElement, gameboardCell) {
    if (!gameboardCell.isHit) return;

    if (gameboardCell.ship) {
      cellElement.classList.add('hit');
      return;
    }

    cellElement.classList.add('missed');
  }

  function init(newGame) {
    playerBoard = newGame.getPlayerBoard().getGameboard();
    computerBoard = newGame.getComputerBoard().getGameboard();
    game = newGame;
    setGameboard();
  }

  events.on('setGameboards', init);

  return {
    init,
  };
};

export default gameboard_controller;
