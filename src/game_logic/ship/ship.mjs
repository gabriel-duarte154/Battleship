const Ship = (name, length) => {
  let hits = 0;
  let sunk = false;
  let isVertical;

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

  const setAxis = (axis) => {
    isVertical = axis;
  };

  const getAxis = () => {
    return isVertical;
  };

  return {
    name,
    getHits,
    getShipLength,
    hit,
    isSunk,
    setAxis,
    getAxis,
  };
};

export default Ship;
