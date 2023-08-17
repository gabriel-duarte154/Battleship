import Ship from '../game_logic/ship/ship.mjs';

const ships = () => {
  return {
    Carrier: Ship('Carrier', 5),
    Battleship: Ship('Battleship', 4),
    Destroyer: Ship('Destroyer', 3),
    Submarine: Ship('Submarine', 3),
    'Patrol Boat': Ship('Patrol Boat', 2),
  };
};

export default ships;
