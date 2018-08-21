const GamePiece = require('./GamePiece');

module.exports = class Block extends GamePiece {
  constructor(x, y, height, width, color, dx) {
    super(x, y, height, width, color, dx);
    this.dx = dx;
    this.lives = 3;
  } 
};