const Player = require('./Player');
const Tail = require ('./Tail');

module.exports = class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.gameOver = false;
    this.lives = 3;
    this.paused = false;
    this.tail = [1];
    this.players = [
      new Player(20, 270, 10, 10, 'rgb(255, 255, 81)', 1, 0),
      new Player(580, 270, 10, 10, 'rgb(0, 153, 255)', -1, 0),
    ];
  }

  handleGameOver() {
    this.gameOver = true;
  }

  togglePause() {
    this.paused = !this.paused;
  }

  animate() {
    this.players.forEach( player => {

      this.tail.push(
        new Tail(player.x, player.y, player.height, player.width, player.color)
      );

      this.metaPlayer(player);
      player.draw(this.ctx);
    });
  }

  metaPlayer(player) {
    const {canvas} = this.ctx;

    if (player.isCollidingWithWall(canvas.width, canvas.height)) {
      player.lives --;
      this.handleGameOver();
    } else if (this.players[0].isCollidingWith(this.players[1])) {
      player.lives --;
      this.handleGameOver();
    } else if (player.isCollidingWithTail (this.tail)) {
      player.lives--;
      this.handleGameOver();
    } else {
      player.move();
    }
  }

  handleKeyPress(e) {
    const direction = {
      dx: 0,
      dy: 0
    };

    if (e.key === 'ArrowUp') {
      direction.dy = -1;
      this.players[1].changeDirection(direction);

    } else if (e.key === 'ArrowDown') {
      direction.dy = 1;
      this.players[1].changeDirection(direction);

    } else if (e.key === 'ArrowLeft') {
      direction.dx = -1;
      this.players[1].changeDirection(direction);      
    } else if (e.key === 'ArrowRight') {
      direction.dx = 1;
      this.players[1].changeDirection(direction);     

    } else if (e.key === 'w') {
      direction.dy = -1;
      this.players[0].changeDirection(direction);
      
    } else if (e.key === 'a') {
      direction.dx = -1;
      this.players[0].changeDirection(direction);
      
    } else if (e.key === 's') {
      direction.dy = 1;
      this.players[0].changeDirection(direction);
      
    } else if (e.key === 'd') {
      direction.dx = 1;
      this.players[0].changeDirection(direction);
    }
  }
};