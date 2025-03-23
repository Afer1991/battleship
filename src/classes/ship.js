export default class Ship {
  constructor(length) {
    this.length = length;
    this.hits = 0;
    this.coordinates = new Array();
  }

  hit() {
    this.hits++;
  }

  isSunk() {
    if (this.length > this.hits) {
      return false;
    } else {
      return true;
    }
  }

  setCoordinates(hor, ver, isvertical) {
    const coor = {
      x: hor,
      y: ver,
      isVertical: isvertical,
      hit: false,
    }

    this.coordinates.push(coor);
    return;
  }

  hitCoordinates(hor, ver) {
    for (let i = 0; i < this.coordinates.length; i++) {
      if (this.coordinates[i].x === hor && this.coordinates[i].y === ver) {
        this.coordinates[i].hit = true;
        return;
      };
    };

    return false;
  }

  isCoordinateHit(hor, ver) {
    for (let i = 0; i < this.coordinates.length; i++) {
      if (this.coordinates[i].x === hor && this.coordinates[i].y === ver && this.coordinates[i].hit) {
        return true;
      };
    };

    return false;
  }
}