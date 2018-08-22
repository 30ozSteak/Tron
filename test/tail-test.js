const { assert } = require('chai');
const Tail = require('../lib/Tail');

describe('Tail', () => {
  let tail;

  beforeEach(() => {
    tail = new Tail(30, 30, 10, 10, 'blue');
  });

  it('should be instantiated as a new object', () => {
    assert.isObject(tail);
  });

  it('should have a height and width', () => {
    assert.equal(tail.height, 10);
    assert.equal(tail.width, 10);
  });

  it('should have a color', () => {
    assert.equal(tail.color, 'blue');
  });
});