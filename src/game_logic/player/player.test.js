import Player from './player.mjs';

describe('Player gameBoard', () => {
  test('Player has a gameBoard', () => {
    const player = Player();

    expect(player.gameboard).toBeTruthy();
  });

  test('Player can Attack the enemy', () => {
    const player1 = Player();
    const player2 = Player();

    player1.attack([0, 0], player2.gameboard);

    expect(player2.gameboard.getMissedShots().length).toBe(1);
  });

 
});
