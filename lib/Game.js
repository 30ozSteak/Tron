const Block = require('./Block');
const Tail = require ('./Tail');

module.exports = class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.gameOver = false;
    this.lives = 3;
    this.paused = false;
    this.tail = [1];
    this.blocks = [
      new Block(20, 270, 10, 10, 'rgb(255, 255, 81)', 1, 0),
      new Block(580, 270, 10, 10, 'rgb(0, 153, 255)', -1, 0),
    ];
  }

  handleGameOver() {
    this.gameOver = true;
  }

  togglePause() {
    this.paused = !this.paused;
  }

  animate() {
    this.blocks.forEach( block => {

      this.tail.push(
        new Tail(block.x, block.y, block.height, block.width, block.color)
      );

      this.metaPlayer(block);
      block.draw(this.ctx);
    });
  }

  metaPlayer(block) {
    const {canvas} = this.ctx;

    if (block.isCollidingWithWall(canvas.width, canvas.height)) {
      block.lives --;
      this.handleGameOver();
    } else if (this.blocks[0].isCollidingWith(this.blocks[1])) {
      block.lives --;
      this.handleGameOver();
    } else if (block.isCollidingWithTail (this.tail)) {
      block.lives--;
      this.handleGameOver();
    } else {
      block.move();
    }
  }

  handleKeyPress(e) {
    const direction = {
      dx: 0,
      dy: 0
    };

    if (e.key === 'ArrowUp') {
      direction.dy = -1;
      this.blocks[1].changeDirection(direction);

    } else if (e.key === 'ArrowDown') {
      direction.dy = 1;
      this.blocks[1].changeDirection(direction);

    } else if (e.key === 'ArrowLeft') {
      direction.dx = -1;
      this.blocks[1].changeDirection(direction);      
    } else if (e.key === 'ArrowRight') {
      direction.dx = 1;
      this.blocks[1].changeDirection(direction);     

    } else if (e.key === 'w') {
      direction.dy = -1;
      this.blocks[0].changeDirection(direction);
      
    } else if (e.key === 'a') {
      direction.dx = -1;
      this.blocks[0].changeDirection(direction);
      
    } else if (e.key === 's') {
      direction.dy = 1;
      this.blocks[0].changeDirection(direction);
      
    } else if (e.key === 'd') {
      direction.dx = 1;
      this.blocks[0].changeDirection(direction);
    }
  }
};