import './style.css';
import Dom from './dom/dom.mjs';
import Game from './game_logic/game.mjs';
import events from './pubsub/evets.mjs';

const DomModule = Dom();
const game = Game();
DomModule.setInitialScreen();

function newGame() {
  game.init();
  events.emit('setShipScreen', game);
}

function initGame() {
  events.emit('setGameboards', game);
}

events.on('allShipSet', initGame);
events.on('newGame', newGame);
