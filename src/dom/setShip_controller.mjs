import events from '../pubsub/evets.mjs';
import { place_ship_screen } from '../components/game_screen.mjs';
import ships from '../game_helpers/ships.mjs';

const setShipController = () => {
  const gameboardElement = place_ship_screen.querySelector('.gameboard');
  let shipsObj = ships();
  let isVertical = false;
  let shipsNames = [];
  let playerBoard;
  let cells;

  const fillGameboard = () => {
    const board = playerBoard.getGameboard();

    for (let i in board) {
      for (let j in board[i]) {
        const cell = document.createElement('div');
        cell.dataset.position = board[i][j].position;
        gameboardElement.appendChild(cell);

        cell.addEventListener('mouseover', () => {
          setPossiblePosition(board[i][j].position, cell);
        });

        cell.addEventListener('mouseout', removeClass);

        cell.addEventListener('click', () => {
          setShip(board[i][j].position, cell);
          changeShip();
          setShipPosition();
          isAllShipsSets();
        });
      }
    }
  };

  const setPossiblePosition = (position, cell) => {
    if (shipsNames.length === 0) return;

    const length = shipsObj[shipsNames[0]].getShipLength();
    const coords = playerBoard.getShipCoords(
      position[0],
      position[1],
      length,
      isVertical
    );
    const invalidCoord = playerBoard.overFlowGameboard(
      coords[0],
      length,
      isVertical
    );

    if (invalidCoord || playerBoard.hasShip(coords)) {
      cell.classList.add('invalid');
      return;
    }

    markCoords(coords);
  };

  const markCoords = (coords) => {
    for (let i in cells) {
      for (let j in coords) {
        if (cells[i].dataset.position === coords[j].join(',')) {
          cells[i].classList.add('posible_position');
        }
      }
    }
  };

  const removeClass = () => {
    cells.forEach((cell) => {
      cell.classList.remove('invalid');
      cell.classList.remove('posible_position');
    });
  };

  const fillShipNames = () => {
    for (let i in shipsObj) {
      shipsNames.push(i);
    }
  };

  const addButtonEvent = () => {
    const button = place_ship_screen.querySelector('button');
    button.addEventListener('click', toggleAxis);
  };

  const toggleAxis = () => {
    isVertical === true ? (isVertical = false) : (isVertical = true);
  };

  const changeShip = () => {
    const playerShips = playerBoard.getShips();

    playerShips.forEach(({ name }) => {
      if (name === shipsNames[0]) {
        shipsNames.shift();
      }
    });

    updateShipDisplay();
  };

  const updateShipDisplay = () => {
    const span = place_ship_screen.querySelector('#ship_name');
    span.textContent = shipsNames[0];
  };

  const setShip = (position) => {
    const shipName = shipsNames[0];
    playerBoard.setShip(position, shipsObj[shipName], isVertical);
  };

  const isAllShipsSets = () => {
    if (shipsNames.length !== 0) return;
    events.emit('allShipSet');
  };

  const setShipPosition = () => {
    const shipCells = playerBoard.getShipCells();

    for (let i in cells) {
      for (let j in shipCells) {
        if (cells[i].dataset.position === shipCells[j].join(',')) {
          cells[i].classList.add('has_ship');
        }
      }
    }
  };

  const cleanGameboard = () => {
    gameboardElement.innerHTML = '';
  };

  const init = (game) => {
    playerBoard = game.getPlayerBoard();
    cleanGameboard();
    fillGameboard();
    fillShipNames();
    addButtonEvent();
    changeShip();
    cells = [...gameboardElement.querySelectorAll('div')];
    shipsObj = ships();
  };

  events.on('setShipScreen', init);
};

export default setShipController;
