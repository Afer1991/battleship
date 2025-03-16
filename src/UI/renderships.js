const renderShip = (player, ship, x, y, isvertical) => {
  player.gameboard.placeShip(ship, x, y, isvertical);

  if (isvertical) {
    for (let i = 0; i < ship.length; i++) {
      const cell = document.getElementById(`${player.name}-${y + i}-${x}`);
      cell.classList.add("ship");
    };
  } else {
    for (let i = 0; i < ship.length; i++) {
      const cell = document.getElementById(`${player.name}-${y}-${x + i}`);
      cell.classList.add("ship");
    };
  };
};

export default renderShip;