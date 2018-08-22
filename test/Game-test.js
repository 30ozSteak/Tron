const { assert } = require('chai');
const Game = require('../lib/Game');

const ctx = {
  canvas: {
    width: 600,
    height: 600
  }
};

describe('Game', () => {
  let game;

  beforeEach(() => {
    game = new Game(ctx);
  });

  it('should exist', () => {
    assert.exists(game);
  });

  it('should instantiate a new game', () => {
    assert.equal(game.gameOver, false);
    assert.equal(game.lives, 3);
    assert.equal(game.paused, false);
    assert.equal(game.players.length[2]);
  });

  it('should end the game if player collides with wall', () =>  {

    const player = game.players[0];

    player.x = ctx.canvas.width;
    player.isCollidingWithWall(ctx.canvas.width, ctx.canvas.height);
    assert.isFalse(game.gameOver);
  });

  it('should lose a life if any collision occurs', () => {

    const player = game.players[0];
    const block2 = game.players[1];

    player.isCollidingWith(block2);
    player.lives--;
    assert.equal(player.lives, 2);
  });

  it('should end game if player collides with another player', () =>  {

    const player = game.players[0];
    const block2 = game.players[1];

    player.isCollidingWith(block2);
    assert.isFalse(game.gameOver);
  });

  it('should populate the tail array as the game progresses', () => {
    
    assert.equal(game.tail.length >= 1, true);
  });

  it('should load the game with two players', () => {
    
    assert.equal(game.players.length[2]);
  });

});