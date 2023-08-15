const initial_screen = document.createElement('div');
initial_screen.innerHTML = `
  <div class="initial_wrapper">
      <h1 class="intro_title big_font">Battleship</h1>
      <div>
        <button class="button" id="start_button">Start</button>
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

const place_ship_screen = ``;

export { initial_screen, place_ship_screen, game_screen };
