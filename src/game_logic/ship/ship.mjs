const Ship = (length) => {
  let shipLength = length;
  let hits = 0;
  let sunk = false;

  const getHits = () => {
    return hits;
  };

  const hit = () => {
    if (isSunk()) return;
    hits++;
    verifyForSunk();
  };

  const isSunk = () => {
    return sunk;
  };

  const verifyForSunk = () => {
    sunk = shipLength - hits === 0 ? true : false;
  };

  const getShipLength = () => {
    return shipLength;
  };

  return {
    getHits,
    getShipLength,
    hit,
    isSunk,
  };
};

export default Ship;
