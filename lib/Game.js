const Block = require('./Block');
const Tail = require ('./Tail');

module.exports = class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.paused = false;
    this.roundOver = false;
    this.gameOver = false;
    this.player = 0;
    this.lives = 3;
    this.blocks = [
      new Block(20, 270, 10, 10, 'rgb(255, 255, 81)', 1, 0),
      new Block(580, 270, 10, 10, 'rgb(0, 153, 255)', -1, 0),
    ];
    this.tail = [];
  }

  animate() {
    this.blocks.forEach( block => {

      this.tail.push( 
        new Tail(this.x, this.y, this.height, this.width, this.color)
      );

      this.metaPlayer(block);
      block.draw(this.ctx);
    });
  }

  metaPlayer(block) {
    const {canvas} = this.ctx;

    if (block.isCollidingWithWall(canvas.width, canvas.height)) {
      block.death();
      this.endGame(block);
    } else if (this.blocks[0].isCollidingWith(this.blocks[1])) {
      this.endGame(block);
    // } else if (block.isCollidingWithTail (this.tails)) {
    //   this.endGame(block);
    } else {
      block.move();
    }
  }

  endGame() {
    this.gameOver = true;
  }

  isOver() {
    return this.gameOver;
  }

  togglePause() {
    this.paused = !this.paused;
  }

  handleKeyPress(e) {
    const direction = {
      dx: 0,
      dy: 0
    };

    if (e.key === 'ArrowRight') {
      direction.dx = 1;
      this.blocks[1].changeDirection(direction, this.tail);      

    } else if (e.key === 'ArrowLeft') {
      direction.dx = -1;
      this.blocks[1].changeDirection(direction, this.tail);      

    } else if (e.key === 'ArrowDown') {
      direction.dy = 1;
      this.blocks[1].changeDirection(direction, this.tail);

    } else if (e.key === 'ArrowUp') {
      direction.dy = -1;
      this.blocks[1].changeDirection(direction, this.tail);

    } else if (e.key === 'd') {
      direction.dx = 1;
      this.blocks[0].changeDirection(direction, this.tail);

    } else if (e.key === 'a') {
      direction.dx = -1;
      this.blocks[0].changeDirection(direction, this.tail);

    } else if (e.key === 's') {
      direction.dy = 1;
      this.blocks[0].changeDirection(direction, this.tail);

    } else if (e.key === 'w') {
      direction.dy = -1;
      this.blocks[0].changeDirection(direction, this.tail);

    } else if (e.key === 'p') {
      this.togglePause();
    }
  }
};