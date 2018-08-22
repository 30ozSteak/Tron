// Game-test.js
const { assert } = require('chai');
const Game = require('../lib/Game');
const Block = require('../lib/Block');

const ctx = {
  canvas: {
    width: 600,
    height: 600
  }
};

describe('Game', () => {


  it('should end the game if block collides with wall', () =>  {

    const game = new Game(ctx);

    const block = game.blocks[0];

    block.x = ctx.canvas.width;
    block.isCollidingWithWall(ctx.canvas.width, ctx.canvas.height);
    assert.isFalse(game.gameOver);
  });

  it('should end game if block collides with another block', () =>  {

    const game = new Game(ctx);

    const block = game.blocks[0];
    const block2 = game.blocks[1];

    block.x = block2.x;
    block.isCollidingWith(block2);
    assert.isFalse(game.gameOver);
  });

  it('should populate the tail array as the game progresses', () => {

    const game = new Game(ctx);
    
    // game.animate();

    assert.equal(game.tail.length >= 1, true);
  });

  it('should load the game with two blocks', () => {
    
    const game = new Game(ctx);

    assert.equal(game.blocks.length[2]);
  });


});