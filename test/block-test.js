const { assert } = require ('chai');
const Block = require('../lib/Block');

describe('Block', () => {
  let block;
  
  it('should be instantiated as a new object', () => {
    
    block = new Block(20, 270, 10, 10, 'rgb(255, 255, 81)', 1, 0),

    assert.isObject(block);
  });

  it('should have initial properties', () => {
    block = new Block(20, 270, 10, 10, 'rgb(255, 255, 81)', 1, 0),

    assert.equal(block.x, 20);
    assert.equal(block.y, 270);
    assert.equal(block.height, 10);
    assert.equal(block.width, 10);
    assert.equal(block.lives, 3);
  });

});