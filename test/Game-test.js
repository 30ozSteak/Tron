// Game-test.js
const { assert } = require('chai');
const Game = require('../lib/Game');

const ctx = {
  canvas: {
    width: 600,
    height: 600
  }
}

describe('Game', () => {
  it('should end the game if block collides with wall', () =>  {

    const game = new Game(ctx);
    game.animate()
  })
  it('should take properties', () => {})
  it('should collide with walls', () => {})
  it('should be able to move', () => {})
  it('should be able to changeDirection', () => {})
})