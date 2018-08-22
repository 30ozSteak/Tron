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
    assert.equal(game.blocks.length[2]);
  });

  it('should end the game if block collides with wall', () =>  {

    const block = game.blocks[0];

    block.x = ctx.canvas.width;
    block.isCollidingWithWall(ctx.canvas.width, ctx.canvas.height);
    assert.isFalse(game.gameOver);
  });

  it('should lose a life if any collision occurs', () => {

    const block = game.blocks[0];
    const block2 = game.blocks[1];

    block.isCollidingWith(block2);
    block.lives--;
    assert.equal(block.lives, 2);
  });

  it('should end game if block collides with another block', () =>  {

    const block = game.blocks[0];
    const block2 = game.blocks[1];

    block.isCollidingWith(block2);
    assert.isFalse(game.gameOver);
  });

  it.skip('should end game if block collides with a tail', () => {

    const block = game.blocks[0];
    const block2 = game.blocks[1];

    block.isCollidingWithTail(block2);
    assert.isTrue(game.gameOver);
  });

  it('should populate the tail array as the game progresses', () => {
    
    assert.equal(game.tail.length >= 1, true);
  });

  it('should load the game with two blocks', () => {
    
    assert.equal(game.blocks.length[2]);
  });

});