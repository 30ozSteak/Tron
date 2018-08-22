module.exports = class GamePiece {
  constructor(x, y, height, width, color) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.color = color;
    this.dx = 1;
    this.dy = 0;
    this.dxv = 2;
    this.dyv = 2;
  }

  draw(ctx) {
    const { x, y, height, width, color } = this;

    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
  }

  move() {
    this.x += this.dx * this.dxv;
    this.y += this.dy * this.dyv;
  }

  isCollidingWith(object) {
    return (
      this.x < object.x + object.width && 
      this.x + this.width > object.x &&
      this.y < object.y + object.height &&
      this.y + this.height > object.y
    );
  }

  isCollidingWithWall(canvasWidth, canvasHeight) {
    return (
      this.x < 0 ||
      this.x + this.width > canvasWidth ||
      this.y < 0 || 
      this.y + this.height > canvasHeight
    );
  }

  isCollidingWithTail(tail) {
    let yellowTail = tail.filter (tail => tail.color == 'rgb(255, 255, 81)');
    let blueTail   = tail.filter (tail => tail.color == 'rgb(0, 153, 255)');

    yellowTail.pop();
    blueTail.pop();

    if ((this.colorChecker(blueTail) || this.colorChecker(yellowTail))) {
      return true;
    }
  }

  colorChecker(tails) {
    let collide = false;
    
    tails.forEach(tail => {
      if (this.x == tail.x && this.y == tail.y) {
        collide = true;
        return;
      }
    });
    if (collide == true) {
      return true;
    }
  }

  preventDrivingBackwards(direction) {
    let previous = {
      dx: direction.dx,
      dy: direction.dy
    };

    if 
    (( this.dx == 1 && previous.dx == -1 ) || 
    (  this.dx == -1 && previous.dx == 1 )) {
      return false;
    }
    if 
    (( this.dy == 1 && previous.dy == -1) || 
    (  this.dy == -1 && previous.dy == 1)) {
      return false;
    }
    return true;
  }

  changeDirection(direction) {
    if (this.preventDrivingBackwards (direction)) {
      this.dx = direction.dx;
      this.dy = direction.dy;
    }
  }

};