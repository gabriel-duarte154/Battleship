const gameboard_controller = (game, game_screen) => {
  const playerBoard = game.playerBoard.getGameboard();
  const computerBoard = game.computerBoard.getGameboard();
  const playerBoardElement = game_screen.querySelector('#player_board');
  const computerBoardElement = game_screen.querySelector('#computer_board');

  function setGameboard() {
    fillPlayer(playerBoardElement, playerBoard);
    fillComputerBoard(computerBoardElement, computerBoard);
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

  function attackEvent(position) {
    game.playerAttack(position);
    updateComputerBoard();

    setTimeout(() => {
      game.computerAttack();
      upadatePlayerBoard();
    }, 1000);
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

  return {
    setGameboard,
  };
};

export default gameboard_controller;
