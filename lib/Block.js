const GamePiece = require('./GamePiece');

// extend GamePiece class
module.exports = class Block extends GamePiece {
  constructor(x, y, height, width, color, dx) {
    // invoke parent class constructor
    super(x, y, height, width, color);
    this.dx = dx;
    this.lives = 3;
  } 

  draw(ctx) {
    const {x, y, height, width, borderColor } = this;

    // call parent class draw function
    super.draw(ctx);

  }
};