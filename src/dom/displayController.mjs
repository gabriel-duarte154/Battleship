import events from '../pubsub/evets.mjs';

const displayController = () => {
  let display;

  function write(msg) {
    let msgSplit = msg.split('');
    clear();

    msgSplit.forEach((letter, index) => {
      setTimeout(() => {
        display.textContent += letter;
      }, index * 45);
    });
  }

  function clear() {
    display.textContent = '';
  }

  function init() {
    display = document.querySelector('.display_text');
    write('Await orders...');
  }

  events.on('initDisplay', init);
  events.on('write', write);
};

export default displayController;
