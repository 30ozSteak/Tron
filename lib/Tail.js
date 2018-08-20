const GamePiece = require('./GamePiece');

module.exports = class Tail extends GamePiece {
  constructor(x, y, height, width, color) {
    super(x, y, height, width, color);
  }

  draw(ctx) {
    const {x, y, height, width, borderColor } = this;
    super.draw(ctx);
    ctx.strokeStyle = borderColor;
    ctx.strokeRect(x, y, width, height);
  }
}


