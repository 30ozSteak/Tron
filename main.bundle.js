/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/Block.js":
/*!**********************!*\
  !*** ./lib/Block.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GamePiece = __webpack_require__(/*! ./GamePiece */ "./lib/GamePiece.js");

module.exports = function (_GamePiece) {
  _inherits(Block, _GamePiece);

  function Block(x, y, height, width, color, dx) {
    _classCallCheck(this, Block);

    var _this = _possibleConstructorReturn(this, (Block.__proto__ || Object.getPrototypeOf(Block)).call(this, x, y, height, width, color, dx));

    _this.dx = dx;
    _this.lives = 3;
    return _this;
  }

  return Block;
}(GamePiece);

/***/ }),

/***/ "./lib/Game.js":
/*!*********************!*\
  !*** ./lib/Game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Block = __webpack_require__(/*! ./Block */ "./lib/Block.js");
var Tail = __webpack_require__(/*! ./Tail */ "./lib/Tail.js");

module.exports = function () {
  function Game(ctx) {
    _classCallCheck(this, Game);

    this.ctx = ctx;
    this.gameOver = false;
    this.lives = 3;
    this.paused = false;
    this.tail = [1];
    this.blocks = [new Block(20, 270, 10, 10, 'rgb(255, 255, 81)', 1, 0), new Block(580, 270, 10, 10, 'rgb(0, 153, 255)', -1, 0)];
  }

  _createClass(Game, [{
    key: 'handleGameOver',
    value: function handleGameOver() {
      this.gameOver = true;
    }
  }, {
    key: 'togglePause',
    value: function togglePause() {
      this.paused = !this.paused;
    }
  }, {
    key: 'animate',
    value: function animate() {
      var _this = this;

      this.blocks.forEach(function (block) {

        _this.tail.push(new Tail(block.x, block.y, block.height, block.width, block.color));

        _this.metaPlayer(block);
        block.draw(_this.ctx);
      });
    }
  }, {
    key: 'metaPlayer',
    value: function metaPlayer(block) {
      var canvas = this.ctx.canvas;


      if (block.isCollidingWithWall(canvas.width, canvas.height)) {
        this.lives--;
        this.handleGameOver();
      } else if (this.blocks[0].isCollidingWith(this.blocks[1])) {
        this.lives--;
        this.handleGameOver();
      } else if (block.isCollidingWithTail(this.tail)) {
        this.lives--;
        this.handleGameOver();
      } else {
        block.move();
      }
    }
  }, {
    key: 'handleKeyPress',
    value: function handleKeyPress(e) {
      var direction = {
        dx: 0,
        dy: 0
      };

      if (e.key === 'ArrowUp') {
        direction.dy = -1;
        this.blocks[1].changeDirection(direction);
      } else if (e.key === 'ArrowDown') {
        direction.dy = 1;
        this.blocks[1].changeDirection(direction);
      } else if (e.key === 'ArrowLeft') {
        direction.dx = -1;
        this.blocks[1].changeDirection(direction);
      } else if (e.key === 'ArrowRight') {
        direction.dx = 1;
        this.blocks[1].changeDirection(direction);
      } else if (e.key === 'w') {
        direction.dy = -1;
        this.blocks[0].changeDirection(direction);
      } else if (e.key === 'a') {
        direction.dx = -1;
        this.blocks[0].changeDirection(direction);
      } else if (e.key === 's') {
        direction.dy = 1;
        this.blocks[0].changeDirection(direction);
      } else if (e.key === 'd') {
        direction.dx = 1;
        this.blocks[0].changeDirection(direction);
      }
    }
  }]);

  return Game;
}();

/***/ }),

/***/ "./lib/GamePiece.js":
/*!**************************!*\
  !*** ./lib/GamePiece.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = function () {
  function GamePiece(x, y, height, width, color) {
    _classCallCheck(this, GamePiece);

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

  _createClass(GamePiece, [{
    key: 'draw',
    value: function draw(ctx) {
      var x = this.x,
          y = this.y,
          height = this.height,
          width = this.width,
          color = this.color;


      ctx.fillStyle = color;
      ctx.fillRect(x, y, width, height);
    }
  }, {
    key: 'move',
    value: function move() {
      this.x += this.dx * this.dxv;
      this.y += this.dy * this.dyv;
    }
  }, {
    key: 'isCollidingWith',
    value: function isCollidingWith(object) {
      return this.x < object.x + object.width && this.x + this.width > object.x && this.y < object.y + object.height && this.y + this.height > object.y;
    }
  }, {
    key: 'isCollidingWithWall',
    value: function isCollidingWithWall(canvasWidth, canvasHeight) {
      return this.x < 0 || this.x + this.width > canvasWidth || this.y < 0 || this.y + this.height > canvasHeight;
    }
  }, {
    key: 'isCollidingWithTail',
    value: function isCollidingWithTail(tail) {
      var yellowTail = tail.filter(function (tail) {
        return tail.color == 'rgb(255, 255, 81)';
      });
      var blueTail = tail.filter(function (tail) {
        return tail.color == 'rgb(0, 153, 255)';
      });

      yellowTail.pop();
      blueTail.pop();

      if (this.colorChecker(blueTail) || this.colorChecker(yellowTail)) {
        return true;
      }
    }
  }, {
    key: 'colorChecker',
    value: function colorChecker(tails) {
      var _this = this;

      var collide = false;

      tails.forEach(function (tail) {
        if (_this.x == tail.x && _this.y == tail.y) {
          collide = true;
          return;
        }
      });
      if (collide == true) {
        return true;
      }
    }
  }, {
    key: 'preventDrivingBackwards',
    value: function preventDrivingBackwards(direction) {
      var previous = {
        dx: direction.dx,
        dy: direction.dy
      };

      if (this.dx == 1 && previous.dx == -1 || this.dx == -1 && previous.dx == 1) {
        return false;
      }
      if (this.dy == 1 && previous.dy == -1 || this.dy == -1 && previous.dy == 1) {
        return false;
      }
      return true;
    }
  }, {
    key: 'changeDirection',
    value: function changeDirection(direction) {
      if (this.preventDrivingBackwards(direction)) {
        this.dx = direction.dx;
        this.dy = direction.dy;
      }
    }
  }]);

  return GamePiece;
}();

/***/ }),

/***/ "./lib/Tail.js":
/*!*********************!*\
  !*** ./lib/Tail.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GamePiece = __webpack_require__(/*! ./GamePiece */ "./lib/GamePiece.js");

module.exports = function (_GamePiece) {
  _inherits(Tail, _GamePiece);

  function Tail(x, y, height, width, color) {
    _classCallCheck(this, Tail);

    return _possibleConstructorReturn(this, (Tail.__proto__ || Object.getPrototypeOf(Tail)).call(this, x, y, height, width, color));
  }

  _createClass(Tail, [{
    key: 'draw',
    value: function draw(ctx) {
      var x = this.x,
          y = this.y,
          height = this.height,
          width = this.width;


      _get(Tail.prototype.__proto__ || Object.getPrototypeOf(Tail.prototype), 'draw', this).call(this, ctx);
      ctx.fillRect(x, y, width, height);
    }
  }]);

  return Tail;
}(GamePiece);

/***/ }),

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Game = __webpack_require__(/*! ./Game */ "./lib/Game.js");

var canvas = document.querySelector('#game');
var ctx = canvas.getContext('2d');
var game = new Game(ctx);

document.addEventListener('keydown', handleKeyPress);

function handleKeyPress(e) {
  game.handleKeyPress(e);
}

document.getElementById('start').addEventListener('click', function () {
  hideWelcomeScreen();
  hideStartButton();
  window.requestAnimationFrame(gameLoop);
});

var hideWelcomeScreen = function hideWelcomeScreen() {
  document.querySelector('.welcome-screen').classList.toggle('hide');
};

var hideStartButton = function hideStartButton() {
  document.getElementById('start').classList.toggle('hide');
};

document.getElementById('howToPlay').addEventListener('click', function () {
  hideWelcomeScreen();
});

var toggleGameOver = function toggleGameOver() {
  if (game.gameOver === true) {
    document.querySelector('.game-over-screen').classList.toggle('shown');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    return;
  } else {
    window.setTimeout(function () {
      game.animate(context);
      requestAnimationFrame(gameLoop);
    }, 120);
  }
};

document.querySelector('.play-again').addEventListener('click', function () {
  location.reload();
});

document.getElementById('reset').addEventListener('click', function () {
  resetGame();
});

var resetGame = function resetGame() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  game.blocks[0].x = 20;
  game.blocks[1].x = 580;
  game.blocks[0].y = 270;
  game.blocks[1].y = 270;
  game.blocks[0].dx = 1;
  game.blocks[1].dx = -1;
  game.blocks[0].dy = 0;
  game.blocks[1].dy = 0;
  game.blocks[1].dxv = 2;
  game.block;
  game.gameOver = false;
  game.tail = [];
};

function gameLoop() {

  if (game.gameOver === true) {
    toggleGameOver();
    return false;
  } else {
    game.gameOver = false;
    game.animate();
  }
  window.requestAnimationFrame(gameLoop);
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL0Jsb2NrLmpzIiwid2VicGFjazovLy8uL2xpYi9HYW1lLmpzIiwid2VicGFjazovLy8uL2xpYi9HYW1lUGllY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL1RhaWwuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2luZGV4LmpzIl0sIm5hbWVzIjpbIkdhbWVQaWVjZSIsInJlcXVpcmUiLCJtb2R1bGUiLCJleHBvcnRzIiwieCIsInkiLCJoZWlnaHQiLCJ3aWR0aCIsImNvbG9yIiwiZHgiLCJsaXZlcyIsIkJsb2NrIiwiVGFpbCIsImN0eCIsImdhbWVPdmVyIiwicGF1c2VkIiwidGFpbCIsImJsb2NrcyIsImZvckVhY2giLCJwdXNoIiwiYmxvY2siLCJtZXRhUGxheWVyIiwiZHJhdyIsImNhbnZhcyIsImlzQ29sbGlkaW5nV2l0aFdhbGwiLCJoYW5kbGVHYW1lT3ZlciIsImlzQ29sbGlkaW5nV2l0aCIsImlzQ29sbGlkaW5nV2l0aFRhaWwiLCJtb3ZlIiwiZSIsImRpcmVjdGlvbiIsImR5Iiwia2V5IiwiY2hhbmdlRGlyZWN0aW9uIiwiZHh2IiwiZHl2IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJvYmplY3QiLCJjYW52YXNXaWR0aCIsImNhbnZhc0hlaWdodCIsInllbGxvd1RhaWwiLCJmaWx0ZXIiLCJibHVlVGFpbCIsInBvcCIsImNvbG9yQ2hlY2tlciIsInRhaWxzIiwiY29sbGlkZSIsInByZXZpb3VzIiwicHJldmVudERyaXZpbmdCYWNrd2FyZHMiLCJHYW1lIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0Q29udGV4dCIsImdhbWUiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlS2V5UHJlc3MiLCJnZXRFbGVtZW50QnlJZCIsImhpZGVXZWxjb21lU2NyZWVuIiwiaGlkZVN0YXJ0QnV0dG9uIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZ2FtZUxvb3AiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJ0b2dnbGVHYW1lT3ZlciIsImNsZWFyUmVjdCIsInNldFRpbWVvdXQiLCJhbmltYXRlIiwiY29udGV4dCIsImxvY2F0aW9uIiwicmVsb2FkIiwicmVzZXRHYW1lIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkEsSUFBTUEsWUFBWSxtQkFBQUMsQ0FBUSx1Q0FBUixDQUFsQjs7QUFFQUMsT0FBT0MsT0FBUDtBQUFBOztBQUNFLGlCQUFZQyxDQUFaLEVBQWVDLENBQWYsRUFBa0JDLE1BQWxCLEVBQTBCQyxLQUExQixFQUFpQ0MsS0FBakMsRUFBd0NDLEVBQXhDLEVBQTRDO0FBQUE7O0FBQUEsOEdBQ3BDTCxDQURvQyxFQUNqQ0MsQ0FEaUMsRUFDOUJDLE1BRDhCLEVBQ3RCQyxLQURzQixFQUNmQyxLQURlLEVBQ1JDLEVBRFE7O0FBRTFDLFVBQUtBLEVBQUwsR0FBVUEsRUFBVjtB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ZWIsQ0FBZixHQUFtQixFQUFuQjtBQUNBa0QsT0FBS3JDLE1BQUwsQ0FBWSxDQUFaLEVBQWViLENBQWYsR0FBbUIsR0FBbkI7QUFDQWtELE9BQUtyQyxNQUFMLENBQVksQ0FBWixFQUFlWixDQUFmLEdBQW1CLEdBQW5CO0FBQ0FpRCxPQUFLckMsTUFBTCxDQUFZLENBQVosRUFBZVosQ0FBZixHQUFtQixHQUFuQjtBQUNBaUQsT0FBS3JDLE1BQUwsQ0FBWSxDQUFaLEVBQWVSLEVBQWYsR0FBb0IsQ0FBcEI7QUFDQTZDLE9BQUtyQyxNQUFMLENBQVksQ0FBWixFQUFlUixFQUFmLEdBQW9CLENBQUMsQ0FBckI7QUFDQTZDLE9BQUtyQyxNQUFMLENBQVksQ0FBWixFQUFlYyxFQUFmLEdBQW9CLENBQXBCO0FBQ0F1QixPQUFLckMsTUFBTCxDQUFZLENBQVosRUFBZWMsRUFBZixHQUFvQixDQUFwQjtBQUNBdUIsT0FBS3JDLE1BQUwsQ0FBWSxDQUFaLEVBQWVpQixHQUFmLEdBQXFCLENBQXJCO0FBQ0FvQixPQUFLbEMsS0FBTDtBQUNBa0MsT0FBS3hDLFFBQUwsR0FBZ0IsS0FBaEI7QUFDQXdDLE9BQUt0QyxJQUFMLEdBQVksRUFBWjtBQUNELENBZEQ7O0FBZ0JBLFNBQVM4QyxRQUFULEdBQXFCOztBQUVuQixNQUFJUixLQUFLeEMsUUFBTCxLQUFrQixJQUF0QixFQUE0QjtBQUMxQm1EO0FBQ0EsV0FBTyxLQUFQO0FBRUQsR0FKRCxNQUlPO0FBQ0xYLFNBQUt4QyxRQUFMLEdBQWdCLEtBQWhCO0FBQ0F3QyxTQUFLYyxPQUFMO0FBQ0Q7QUFDRFIsU0FBT0MscUJBQVAsQ0FBNkJDLFFBQTdCO0FBQ0QsQyIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vbGliL2luZGV4LmpzXCIpO1xuIiwiY29uc3QgR2FtZVBpZWNlID0gcmVxdWlyZSgnLi9HYW1lUGllY2UnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBCbG9jayBleHRlbmRzIEdhbWVQaWVjZSB7XG4gIGNvbnN0cnVjdG9yKHgsIHksIGhlaWdodCwgd2lkdGgsIGNvbG9yLCBkeCkge1xuICAgIHN1cGVyKHgsIHksIGhlaWdodCwgd2lkdGgsIGNvbG9yLCBkeCk7XG4gICAgdGhpcy5keCA9IGR4O1xuICAgIHRoaXMubGl2ZXMgPSAzO1xuICB9IFxufTsiLCJjb25zdCBCbG9jayA9IHJlcXVpcmUoJy4vQmxvY2snKTtcbmNvbnN0IFRhaWwgPSByZXF1aXJlICgnLi9UYWlsJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgR2FtZSB7XG4gIGNvbnN0cnVjdG9yKGN0eCkge1xuICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgIHRoaXMuZ2FtZU92ZXIgPSBmYWxzZTtcbiAgICB0aGlzLmxpdmVzID0gMztcbiAgICB0aGlzLnBhdXNlZCA9IGZhbHNlO1xuICAgIHRoaXMudGFpbCA9IFsxXTtcbiAgICB0aGlzLmJsb2NrcyA9IFtcbiAgICAgIG5ldyBCbG9jaygyMCwgMjcwLCAxMCwgMTAsICdyZ2IoMjU1LCAyNTUsIDgxKScsIDEsIDApLFxuICAgICAgbmV3IEJsb2NrKDU4MCwgMjcwLCAxMCwgMTAsICdyZ2IoMCwgMTUzLCAyNTUpJywgLTEsIDApLFxuICAgIF07XG4gIH1cblxuICBoYW5kbGVHYW1lT3ZlcigpIHtcbiAgICB0aGlzLmdhbWVPdmVyID0gdHJ1ZTtcbiAgICBcbiAgfVxuXG4gIHRvZ2dsZVBhdXNlKCkge1xuICAgIHRoaXMucGF1c2VkID0gIXRoaXMucGF1c2VkO1xuICB9XG5cbiAgYW5pbWF0ZSgpIHtcbiAgICB0aGlzLmJsb2Nrcy5mb3JFYWNoKCBibG9jayA9PiB7XG5cbiAgICAgIHRoaXMudGFpbC5wdXNoKFxuICAgICAgICBuZXcgVGFpbChibG9jay54LCBibG9jay55LCBibG9jay5oZWlnaHQsIGJsb2NrLndpZHRoLCBibG9jay5jb2xvcilcbiAgICAgICk7XG5cbiAgICAgIHRoaXMubWV0YVBsYXllcihibG9jayk7XG4gICAgICBibG9jay5kcmF3KHRoaXMuY3R4KTtcbiAgICB9KTtcbiAgfVxuXG4gIG1ldGFQbGF5ZXIoYmxvY2spIHtcbiAgICBjb25zdCB7Y2FudmFzfSA9IHRoaXMuY3R4O1xuXG4gICAgaWYgKGJsb2NrLmlzQ29sbGlkaW5nV2l0aFdhbGwoY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KSkge1xuICAgICAgdGhpcy5saXZlcyAtLTtcbiAgICAgIHRoaXMuaGFuZGxlR2FtZU92ZXIoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuYmxvY2tzWzBdLmlzQ29sbGlkaW5nV2l0aCh0aGlzLmJsb2Nrc1sxXSkpIHtcbiAgICAgIHRoaXMubGl2ZXMgLS07XG4gICAgICB0aGlzLmhhbmRsZUdhbWVPdmVyKCk7XG4gICAgfSBlbHNlIGlmIChibG9jay5pc0NvbGxpZGluZ1dpdGhUYWlsICh0aGlzLnRhaWwpKSB7XG4gICAgICB0aGlzLmxpdmVzLS07XG4gICAgICB0aGlzLmhhbmRsZUdhbWVPdmVyKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJsb2NrLm1vdmUoKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVLZXlQcmVzcyhlKSB7XG4gICAgY29uc3QgZGlyZWN0aW9uID0ge1xuICAgICAgZHg6IDAsXG4gICAgICBkeTogMFxuICAgIH07XG5cbiAgICBpZiAoZS5rZXkgPT09ICdBcnJvd1VwJykge1xuICAgICAgZGlyZWN0aW9uLmR5ID0gLTE7XG4gICAgICB0aGlzLmJsb2Nrc1sxXS5jaGFuZ2VEaXJlY3Rpb24oZGlyZWN0aW9uKTtcblxuICAgIH0gZWxzZSBpZiAoZS5rZXkgPT09ICdBcnJvd0Rvd24nKSB7XG4gICAgICBkaXJlY3Rpb24uZHkgPSAxO1xuICAgICAgdGhpcy5ibG9ja3NbMV0uY2hhbmdlRGlyZWN0aW9uKGRpcmVjdGlvbik7XG5cbiAgICB9IGVsc2UgaWYgKGUua2V5ID09PSAnQXJyb3dMZWZ0Jykge1xuICAgICAgZGlyZWN0aW9uLmR4ID0gLTE7XG4gICAgICB0aGlzLmJsb2Nrc1sxXS5jaGFuZ2VEaXJlY3Rpb24oZGlyZWN0aW9uKTsgICAgICBcblxuICAgIH0gZWxzZSBpZiAoZS5rZXkgPT09ICdBcnJvd1JpZ2h0Jykge1xuICAgICAgZGlyZWN0aW9uLmR4ID0gMTtcbiAgICAgIHRoaXMuYmxvY2tzWzFdLmNoYW5nZURpcmVjdGlvbihkaXJlY3Rpb24pOyAgICAgXG5cbiAgICB9IGVsc2UgaWYgKGUua2V5ID09PSAndycpIHtcbiAgICAgIGRpcmVjdGlvbi5keSA9IC0xO1xuICAgICAgdGhpcy5ibG9ja3NbMF0uY2hhbmdlRGlyZWN0aW9uKGRpcmVjdGlvbik7XG4gICAgICBcbiAgICB9IGVsc2UgaWYgKGUua2V5ID09PSAnYScpIHtcbiAgICAgIGRpcmVjdGlvbi5keCA9IC0xO1xuICAgICAgdGhpcy5ibG9ja3NbMF0uY2hhbmdlRGlyZWN0aW9uKGRpcmVjdGlvbik7XG4gICAgICBcbiAgICB9IGVsc2UgaWYgKGUua2V5ID09PSAncycpIHtcbiAgICAgIGRpcmVjdGlvbi5keSA9IDE7XG4gICAgICB0aGlzLmJsb2Nrc1swXS5jaGFuZ2VEaXJlY3Rpb24oZGlyZWN0aW9uKTtcbiAgICAgIFxuICAgIH0gZWxzZSBpZiAoZS5rZXkgPT09ICdkJykge1xuICAgICAgZGlyZWN0aW9uLmR4ID0gMTtcbiAgICAgIHRoaXMuYmxvY2tzWzBdLmNoYW5nZURpcmVjdGlvbihkaXJlY3Rpb24pO1xuICAgIH1cbiAgfVxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGNsYXNzIEdhbWVQaWVjZSB7XG4gIGNvbnN0cnVjdG9yKHgsIHksIGhlaWdodCwgd2lkdGgsIGNvbG9yKSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgdGhpcy5keCA9IDE7XG4gICAgdGhpcy5keSA9IDA7XG4gICAgdGhpcy5keHYgPSAyO1xuICAgIHRoaXMuZHl2ID0gMjtcbiAgfVxuXG4gIGRyYXcoY3R4KSB7XG4gICAgY29uc3QgeyB4LCB5LCBoZWlnaHQsIHdpZHRoLCBjb2xvciB9ID0gdGhpcztcblxuICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICBjdHguZmlsbFJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gIH1cblxuICBtb3ZlKCkge1xuICAgIHRoaXMueCArPSB0aGlzLmR4ICogdGhpcy5keHY7XG4gICAgdGhpcy55ICs9IHRoaXMuZHkgKiB0aGlzLmR5djtcbiAgfVxuXG4gIGlzQ29sbGlkaW5nV2l0aChvYmplY3QpIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy54IDwgb2JqZWN0LnggKyBvYmplY3Qud2lkdGggJiYgXG4gICAgICB0aGlzLnggKyB0aGlzLndpZHRoID4gb2JqZWN0LnggJiZcbiAgICAgIHRoaXMueSA8IG9iamVjdC55ICsgb2JqZWN0LmhlaWdodCAmJlxuICAgICAgdGhpcy55ICsgdGhpcy5oZWlnaHQgPiBvYmplY3QueVxuICAgICk7XG4gIH1cblxuICBpc0NvbGxpZGluZ1dpdGhXYWxsKGNhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHQpIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy54IDwgMCB8fFxuICAgICAgdGhpcy54ICsgdGhpcy53aWR0aCA+IGNhbnZhc1dpZHRoIHx8XG4gICAgICB0aGlzLnkgPCAwIHx8IFxuICAgICAgdGhpcy55ICsgdGhpcy5oZWlnaHQgPiBjYW52YXNIZWlnaHRcbiAgICApO1xuICB9XG5cbiAgaXNDb2xsaWRpbmdXaXRoVGFpbCh0YWlsKSB7XG4gICAgbGV0IHllbGxvd1RhaWwgPSB0YWlsLmZpbHRlciAodGFpbCA9PiB0YWlsLmNvbG9yID09ICdyZ2IoMjU1LCAyNTUsIDgxKScpO1xuICAgIGxldCBibHVlVGFpbCAgID0gdGFpbC5maWx0ZXIgKHRhaWwgPT4gdGFpbC5jb2xvciA9PSAncmdiKDAsIDE1MywgMjU1KScpO1xuXG4gICAgeWVsbG93VGFpbC5wb3AoKTtcbiAgICBibHVlVGFpbC5wb3AoKTtcblxuICAgIGlmICgodGhpcy5jb2xvckNoZWNrZXIoYmx1ZVRhaWwpIHx8IHRoaXMuY29sb3JDaGVja2VyKHllbGxvd1RhaWwpKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgY29sb3JDaGVja2VyKHRhaWxzKSB7XG4gICAgbGV0IGNvbGxpZGUgPSBmYWxzZTtcbiAgICBcbiAgICB0YWlscy5mb3JFYWNoKHRhaWwgPT4ge1xuICAgICAgaWYgKHRoaXMueCA9PSB0YWlsLnggJiYgdGhpcy55ID09IHRhaWwueSkge1xuICAgICAgICBjb2xsaWRlID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChjb2xsaWRlID09IHRydWUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHByZXZlbnREcml2aW5nQmFja3dhcmRzKGRpcmVjdGlvbikge1xuICAgIGxldCBwcmV2aW91cyA9IHtcbiAgICAgIGR4OiBkaXJlY3Rpb24uZHgsXG4gICAgICBkeTogZGlyZWN0aW9uLmR5XG4gICAgfTtcblxuICAgIGlmIFxuICAgICgoIHRoaXMuZHggPT0gMSAmJiBwcmV2aW91cy5keCA9PSAtMSApIHx8IFxuICAgICggIHRoaXMuZHggPT0gLTEgJiYgcHJldmlvdXMuZHggPT0gMSApKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIFxuICAgICgoIHRoaXMuZHkgPT0gMSAmJiBwcmV2aW91cy5keSA9PSAtMSkgfHwgXG4gICAgKCAgdGhpcy5keSA9PSAtMSAmJiBwcmV2aW91cy5keSA9PSAxKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGNoYW5nZURpcmVjdGlvbihkaXJlY3Rpb24pIHtcbiAgICBpZiAodGhpcy5wcmV2ZW50RHJpdmluZ0JhY2t3YXJkcyAoZGlyZWN0aW9uKSkge1xuICAgICAgdGhpcy5keCA9IGRpcmVjdGlvbi5keDtcbiAgICAgIHRoaXMuZHkgPSBkaXJlY3Rpb24uZHk7XG4gICAgfVxuICB9XG5cbn07IiwiY29uc3QgR2FtZVBpZWNlID0gcmVxdWlyZSgnLi9HYW1lUGllY2UnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBUYWlsIGV4dGVuZHMgR2FtZVBpZWNlIHtcbiAgY29uc3RydWN0b3IoeCwgeSwgaGVpZ2h0LCB3aWR0aCwgY29sb3IpIHtcbiAgICBzdXBlcih4LCB5LCBoZWlnaHQsIHdpZHRoLCBjb2xvcik7XG4gIH1cblxuICBkcmF3KGN0eCkge1xuICAgIGNvbnN0IHsgeCwgeSwgaGVpZ2h0LCB3aWR0aCB9ID0gdGhpcztcblxuICAgIHN1cGVyLmRyYXcoY3R4KTtcbiAgICBjdHguZmlsbFJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gIH1cbn07XG5cblxuIiwiY29uc3QgR2FtZSA9IHJlcXVpcmUoJy4vR2FtZScpO1xuXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2FtZScpO1xuY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5jb25zdCBnYW1lID0gbmV3IEdhbWUoY3R4KTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZUtleVByZXNzKTtcblxuZnVuY3Rpb24gaGFuZGxlS2V5UHJlc3MoZSkge1xuICBnYW1lLmhhbmRsZUtleVByZXNzKGUpO1xufVxuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICBoaWRlV2VsY29tZVNjcmVlbigpO1xuICBoaWRlU3RhcnRCdXR0b24oKTtcbiAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcCk7XG59KTtcblxuY29uc3QgaGlkZVdlbGNvbWVTY3JlZW4gPSAoKSA9PiB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWxjb21lLXNjcmVlbicpLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKTtcbn07XG5cbmNvbnN0IGhpZGVTdGFydEJ1dHRvbiA9ICgpID0+IHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0JykuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScpO1xufTtcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvd1RvUGxheScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gIGhpZGVXZWxjb21lU2NyZWVuKCk7XG59KTtcblxuY29uc3QgdG9nZ2xlR2FtZU92ZXIgPSAoKSA9PiB7XG4gIGlmIChnYW1lLmdhbWVPdmVyID09PSB0cnVlKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUtb3Zlci1zY3JlZW4nKS5jbGFzc0xpc3QudG9nZ2xlKCdzaG93bicpO1xuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICByZXR1cm47XG4gIH0gZWxzZSB7XG4gICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZ2FtZS5hbmltYXRlKGNvbnRleHQpO1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKTtcbiAgICB9LCAxMjApO1xuICB9XG59O1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheS1hZ2FpbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gIGxvY2F0aW9uLnJlbG9hZCgpO1xufSk7XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNldCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gIHJlc2V0R2FtZSgpO1xufSk7XG5cbmNvbnN0IHJlc2V0R2FtZSA9ICgpID0+IHtcbiAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICBnYW1lLmJsb2Nrc1swXS54ID0gMjA7XG4gIGdhbWUuYmxvY2tzWzFdLnggPSA1ODA7XG4gIGdhbWUuYmxvY2tzWzBdLnkgPSAyNzA7XG4gIGdhbWUuYmxvY2tzWzFdLnkgPSAyNzA7XG4gIGdhbWUuYmxvY2tzWzBdLmR4ID0gMTtcbiAgZ2FtZS5ibG9ja3NbMV0uZHggPSAtMTtcbiAgZ2FtZS5ibG9ja3NbMF0uZHkgPSAwO1xuICBnYW1lLmJsb2Nrc1sxXS5keSA9IDA7XG4gIGdhbWUuYmxvY2tzWzFdLmR4diA9IDI7XG4gIGdhbWUuYmxvY2s7XG4gIGdhbWUuZ2FtZU92ZXIgPSBmYWxzZTtcbiAgZ2FtZS50YWlsID0gW107XG59O1xuXG5mdW5jdGlvbiBnYW1lTG9vcCAoKSB7XG5cbiAgaWYgKGdhbWUuZ2FtZU92ZXIgPT09IHRydWUpIHtcbiAgICB0b2dnbGVHYW1lT3ZlcigpO1xuICAgIHJldHVybiBmYWxzZTtcblxuICB9IGVsc2Uge1xuICAgIGdhbWUuZ2FtZU92ZXIgPSBmYWxzZTtcbiAgICBnYW1lLmFuaW1hdGUoKTtcbiAgfVxuICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9