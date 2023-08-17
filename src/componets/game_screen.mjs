const initial_screen = document.createElement('div');
initial_screen.innerHTML = `
  <div class="initial_wrapper">
      <div class="title_wrapper"><h1 class="intro_title intro_title--animation big_font">Battleship</h1></div>
      <div>
        <button class="button button--animation" id="start_button">Start</button>
      </div>
    </div>
`;

const game_screen = document.createElement('div');
game_screen.innerHTML = `
 <div class="intro">
    <h1 class="intro_title">Battleship</h1>
  </div>
  <div class="display_wrapper">
      <div class="display">
        <span class="display_text"></span>
      </div>
  </div>
   <div class="gameboard_wrapper">
    <div class="col">
        <h2>Your Waters</h2>
         <div class="gameboard" id="player_board"></div>
      </div>
      <div class="col">
        <h2>Enemy Waters</h2>
         <div class="gameboard" id="computer_board"></div>
      </div>
  </div> 
`;

const place_ship_screen = document.createElement('div');
place_ship_screen.innerHTML = `
    <div class="wrapper">
      <div class="wrapper_header">
        <div class="wrapper_text">Set your <span id="ship_name">Battleship</span></div>
        <button class="button button--small" id="toggle_axis">Toggle axis</button>
      </div>
      <div class="gameboard_wrapper gameboard_wrapper--center">
        <div class="gameboard"></div>
      </div>
    </div>`;

const gameOverModal = document.createElement('div');
gameOverModal.innerHTML = `
    <div class="game_over-screen">
      <div class="modal">
        <div class="modal_text"></div>
        <button class="button" id="reset">Try Again</button>
      </div>
    </div>`;

export { initial_screen, place_ship_screen, game_screen, gameOverModal };
