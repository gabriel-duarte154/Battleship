const Ship = (name, length) => {
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
    sunk = length - hits === 0 ? true : false;
  };

  const getShipLength = () => {
    return length;
  };

  return {
    name,
    getHits,
    getShipLength,
    hit,
    isSunk,
  };
};

export default Ship;
