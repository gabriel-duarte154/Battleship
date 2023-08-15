import {
  initial_screen,
  game_screen,
  place_ship_screen,
} from '../componets/game_screen.mjs';
import gameboard_controller from './gameBoard_controller.mjs';

const Dom = (game) => {
  const main_screen = document.querySelector('.screen');
  const gameBoardController = gameboard_controller(game, game_screen);

  const setInitialScreen = () => {
    cleanScreen();
    main_screen.appendChild(initial_screen);

    const button = document.querySelector('#start_button');
    button.addEventListener('click', () => {
      setGameScreen();
      gameBoardController.setGameboard();
    });
  };

  const setGameScreen = () => {
    cleanScreen();
    main_screen.appendChild(game_screen);
  };

  const cleanScreen = () => {
    main_screen.innerHTML = '';
  };

  return {
    setInitialScreen,
    setGameScreen,
  };
};

export default Dom;
