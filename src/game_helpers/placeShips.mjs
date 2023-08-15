import Ship from '../game_logic/ship/ship.mjs';

const placeShips = ({ gameboard }) => {
  const Carrier = Ship('Carrier', 5);
  const Battleship = Ship('BattleShip', 4);
  const Destroyer = Ship('Destroyer', 3);
  const Submarine = Ship('Submarine', 3);
  const PatrolBoat = Ship('Patrol Boat', 2);

  gameboard.setRandomShip(Carrier);
  gameboard.setRandomShip(Battleship);
  gameboard.setRandomShip(Destroyer);
  gameboard.setRandomShip(Submarine);
  gameboard.setRandomShip(PatrolBoat);
};

export default placeShips;
