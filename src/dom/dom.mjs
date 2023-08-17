import {
  initial_screen,
  place_ship_screen,
  gameOverModal,
} from '../components/game_screen.mjs';
import events from '../pubsub/evets.mjs';
import gameboard_controller from './gameBoard_controller.mjs';
import audioController from './audioController.mjs';
import displayController from './displayController.mjs';
import setShipController from './setShip_controller.mjs';

const Dom = () => {
  const main_screen = document.querySelector('.screen');
  gameboard_controller();
  audioController();
  displayController();
  setShipController();

  const setButtonEvent = () => {
    const startButton = initial_screen.querySelector('#start_button');
    startButton.addEventListener('click', () => {
      events.emit('newGame');
      events.emit('stopIntro');
      events.emit('fire_shot');
    });

    const reset = gameOverModal.querySelector('button');
    reset.addEventListener('click', () => {
      setInitialScreen();
    });
  };

  const setInitialScreen = () => {
    cleanScreen();
    main_screen.appendChild(initial_screen);
    events.emit('playIntro');
  };

  const setScreen = (screen) => {
    cleanScreen();
    main_screen.appendChild(screen);
  };

  const cleanScreen = () => {
    main_screen.innerHTML = '';
  };

  const setGameOverModal = (data) => {
    const text = gameOverModal.querySelector('.modal_text');
    text.innerText = `${data.name} Wins!`;

    main_screen.appendChild(gameOverModal);
  };

  const setShipScreen = () => {
    setScreen(place_ship_screen);
  };

  events.on('gameOver', setGameOverModal);
  events.on('setGameScreen', setScreen);
  events.on('setShipScreen', setShipScreen);
  setButtonEvent();

  return {
    setInitialScreen,
    setGameOverModal,
    setShipScreen,
  };
};

export default Dom;
