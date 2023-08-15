import Ia from './computer_IA.mjs';
import Player from '../player/player.mjs';

describe('Ia attack', () => {
  test('it is able to do random attacks', () => {
    let player = Player();
    let ia = Ia(player);
    ia.randomAttack();

    expect(player.gameboard.getMissedShots().length).toBe(1);
    
    ia.randomAttack();

    expect(player.gameboard.getMissedShots().length).toBe(2);
  });
});
