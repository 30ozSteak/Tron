const Block = require('./Block');
const Tail = require ('./Tail');

module.exports = class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.paused = false;
    this.roundOver = false;
    this.gameOver = false;
    this.player= 0;
    this.blocks = [
      new Block(26, 270, 20, 20, 'yellow', 1, 0),
      // new Block(1163, 270, 20, 20, 'blue', -1, 0),
    ];
    this.tails = [];
  };
  

  // draw one frame of our game
  animate() {
    const { canvas } = this.ctx;
    this.blocks.forEach( block => {

      if (block.isCollidingWithWall(canvas.width, canvas.height)) {
        console.log('collision');
        const newDirection = {
          dx: block.dx * -1,
          dy: 0
        }
        block.changeDirection(newDirection);
        block.move();
        // this.endGame();  

      } else {
        block.move();
      }
      
      block.draw(this.ctx);
    })
  }

  endGame() {
    this.gameOver = true;
  }

  isOver() {
    return this.gameOver;
  }

  togglePause() {
    this.paused = !this.paused;
    console.log('paused');
  }

  handleKeyPress(e) {
    const direction = {
      dx: 0,
      dy: 0
    };

    if (e.key === 'ArrowRight') {
      direction.dx = 1;

    } else if (e.key === 'ArrowLeft') {
      direction.dx = -1;

    } else if (e.key === 'ArrowDown') {
      direction.dy = 1;

    } else if (e.key === 'ArrowUp') {
      direction.dy = -1;
    } 

    this.blocks.forEach( block => block.changeDirection(direction) );
  }

}