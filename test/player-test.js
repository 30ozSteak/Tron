const { assert } = require ('chai');
const Player = require('../lib/Player');

describe('Player', () => {
  let player;
  
  it('should be instantiated as a new object', () => {
    
    player = new Player(20, 270, 10, 10, 'rgb(255, 255, 81)', 1, 0),

    assert.isObject(player);
  });

  it('should have initial properties', () => {
    player = new Player(20, 270, 10, 10, 'rgb(255, 255, 81)', 1, 0),

    assert.equal(player.x, 20);
    assert.equal(player.y, 270);
    assert.equal(player.height, 10);
    assert.equal(player.width, 10);
    assert.equal(player.lives, 3);
  });

});