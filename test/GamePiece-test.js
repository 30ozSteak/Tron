const { assert } = require('chai');
const GamePiece = require('../lib/GamePiece.js');
const Game = require('../lib/Game.js');
const Tail = require('../lib/Tail.js');

const ctx = {
  canvas: {
    width: 600,
    height: 600
  }
};

describe('GamePiece', () => {
  let gamepiece;

  beforeEach(() => {
    gamepiece = new GamePiece(30, 30, 10, 10, 'blue');
  });

  it('should take properties', () => {
    assert.deepEqual(gamepiece, {
      x: 30,
      y: 30,
      height: 10,
      width: 10,
      color: 'blue',
      dx: 1,
      dy: 0,
      dxv: 2,
      dyv: 2
    });
  });

  it('should collide with a second gamepiece that occupies the same space', () => {
    const gamepiece2 = new GamePiece(30, 30, 10, 10, 'blue');

    const colliding = gamepiece.isCollidingWith(gamepiece2);

    assert.isTrue(colliding);
  });

  it('should not collide with a second gamepiece that does not occupy the same space', () => {
    const gamepiece2 = new GamePiece(130, 130, 10, 10, 'blue');

    const colliding = gamepiece.isCollidingWith(gamepiece2);

    assert.isFalse(colliding);
  });

  it('should not be able to collide with wall', () =>  {
    const gamepiece = new GamePiece(700, 700, 10, 10, 'blue');
    const isColliding = gamepiece.isCollidingWithWall(700, 700);

    assert.isTrue(isColliding);
  });

  it('should be able to move', () => {
    gamepiece.move({dx: 1, dy: 1});

    assert.equal(gamepiece.dx, 1)
  });

  it('should be able to change direction', () => {
    gamepiece.move({dx: 0, dy: 0});
    gamepiece.changeDirection({dx: 0, dy:1})
    assert.equal(gamepiece.dy, 1);
  })

  it('shouldnt be able to drive backwards on itself', () => {
    gamepiece.move({dx: 1, dy: 0});
    gamepiece.changeDirection({dx: -1, dy: 0});
    gamepiece.preventDrivingBackwards({dx: -1, dy: 0})
    
    assert.equal(gamepiece.dx, 1);
  })
});