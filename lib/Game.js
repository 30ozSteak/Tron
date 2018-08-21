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
      new Block(26, 270, 20, 20, 'rgb(255, 255, 81)', 1, 0), //yellow, left side
      new Block(300, 270, 20, 20, 'rgb(0, 153, 255)', -1, 0), //blue, right side
    ];
    this.tail = [];
  };
  

  // draw one frame of our game
  animate() {
    // everything
    const { canvas } = this.ctx;
    this.blocks.forEach( block => {
    this.tail.push(new Tail(block.x, block.y, block.height, block.width, block.color))
    this.metaPlayer(block);
    block.draw(this.ctx);
    })
  };

  metaPlayer(block){
    const {canvas} = this.ctx;
    if (block.isCollidingWithWall(canvas.width, canvas.height)) {
      block.death();
      this.endGame(block);
    } else if (this.blocks[0].isCollidingWith(this.blocks[1])) {
      this.endGame(block);
    // } else if (block.isCollidingWithTail (this.tails)){
    //   this.end(block);
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

// newGame(){}


}