import ships from './ships.mjs';

const placeShips = ({ gameboard }) => {
  let shipsObj = ships();

  for (let i in shipsObj) {
    gameboard.setRandomShip(shipsObj[i]);
  }
};

export default placeShips;
