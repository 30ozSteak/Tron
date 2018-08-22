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
  document.querySelector('.game-over-screen').classList.toggle('show');
};

document.querySelector('.play-again').addEventListener('click', function () {
  toggleGameOver();
});

document.getElementById('reset').addEventListener('click', function () {
  resetGame();
  // location.reload();
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
  } else {
    game.gameOver = false;
    game.animate();
  }
  window.requestAnimationFrame(gameLoop);
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL0Jsb2NrLmpzIiwid2VicGFjazovLy8uL2xpYi9HYW1lLmpzIiwid2VicGFjazovLy8uL2xpYi9HYW1lUGllY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL1RhaWwuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2luZGV4LmpzIl0sIm5hbWVzIjpbIkdhbWVQaWVjZSIsInJlcXVpcmUiLCJtb2R1bGUiLCJleHBvcnRzIiwieCIsInkiLCJoZWlnaHQiLCJ3aWR0aCIsImNvbG9yIiwiZHgiLCJsaXZlcyIsIkJsb2NrIiwiVGFpbCIsImN0eCIsImdhbWVPdmVyIiwicGF1c2VkIiwidGFpbCIsImJsb2NrcyIsImZvckVhY2giLCJwdXNoIiwiYmxvY2siLCJtZXRhUGxheWVyIiwiZHJhdyIsImNhbnZhcyIsImlzQ29sbGlkaW5nV2l0aFdhbGwiLCJoYW5kbGVHYW1lT3ZlciIsImlzQ29sbGlkaW5nV2l0aCIsImlzQ29sbGlkaW5nV2l0aFRhaWwiLCJtb3ZlIiwiZSIsImRpcmVjdGlvbiIsImR5Iiwia2V5IiwiY2hhbmdlRGlyZWN0aW9uIiwiZHh2IiwiZHl2IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJvYmplY3QiLCJjYW52YXNXaWR0aCIsImNhbnZhc0hlaWdodCIsInllbGxvd1RhaWwiLCJmaWx0ZXIiLCJibHVlVGFpbCIsInBvcCIsImNvbG9yQ2hlY2tlciIsInRhaWxzIiwiY29sbGlkZSIsInByZXZpb3VzIiwicHJldmVudERyaXZpbmdCYWNrd2FyZHMiLCJHYW1lIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0Q29udGV4dCIsImdhbWUiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlS2V5UHJlc3MiLCJnZXRFbGVtZW50QnlJZCIsImhpZGVXZWxjb21lU2NyZWVuIiwiaGlkZVN0YXJ0QnV0dG9uIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZ2FtZUxvb3AiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJ0b2dnbGVHYW1lT3ZlciIsInJlc2V0R2FtZSIsImNsZWFyUmVjdCIsImFuaW1hdGUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQSxJQUFNQSxZQUFZLG1CQUFBQyxDQUFRLHVDQUFSLENBQWxCOztBQUVBQyxPQUFPQyxPQUFQO0FBQUE7O0FBQ0UsaUJBQVlDLENBQVosRUFBZUMsQ0FBZixFQUFrQkMsTUFBbEIsRUFBMEJDLEtBQTFCLEVBQWlDQyxLQUFqQyxFQUF3Q0MsRUFBeEMsRUFBNEM7QUFBQTs7QUFBQSw4R0FDcENMLENBRG9DLEVBQ2pDQyxDQURpQyxFQUM5QkMsTUFEOEIsRUFDdEJDLEtBRHNCLEVBQ2ZDLEtBRGUsRUFDUkMsRUFEUTs7QUFFMUMsVUFBS0EsRUFBTCxHQUFVQSxFQUFWO0FBQ0EsVUFBS0MsS0FBTCxHQUFhLENBQWI7QUFIMEM7QUFJM0M7O0FBTEg7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QUwsQ0FBWSxDQUFaLEVBQWVjLEVBQWYsR0FBb0IsQ0FBcEI7QUFDQXVCLE9BQUtyQyxNQUFMLENBQVksQ0FBWixFQUFlYyxFQUFmLEdBQW9CLENBQXBCO0FBQ0F1QixPQUFLckMsTUFBTCxDQUFZLENBQVosRUFBZWlCLEdBQWYsR0FBcUIsQ0FBckI7QUFDQW9CLE9BQUtsQyxLQUFMO0FBQ0FrQyxPQUFLeEMsUUFBTCxHQUFnQixLQUFoQjtBQUNBd0MsT0FBS3RDLElBQUwsR0FBWSxFQUFaO0FBQ0QsQ0FkRDs7QUFnQkEsU0FBUzhDLFFBQVQsR0FBcUI7O0FBRW5CLE1BQUlSLEtBQUt4QyxRQUFMLEtBQWtCLElBQXRCLEVBQTRCO0FBQzFCbUQ7QUFFRCxHQUhELE1BR087QUFDTFgsU0FBS3hDLFFBQUwsR0FBZ0IsS0FBaEI7QUFDQXdDLFNBQUtjLE9BQUw7QUFDRDtBQUNEUixTQUFPQyxxQkFBUCxDQUE2QkMsUUFBN0I7QUFDRCxDIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9saWIvaW5kZXguanNcIik7XG4iLCJjb25zdCBHYW1lUGllY2UgPSByZXF1aXJlKCcuL0dhbWVQaWVjZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIEJsb2NrIGV4dGVuZHMgR2FtZVBpZWNlIHtcbiAgY29uc3RydWN0b3IoeCwgeSwgaGVpZ2h0LCB3aWR0aCwgY29sb3IsIGR4KSB7XG4gICAgc3VwZXIoeCwgeSwgaGVpZ2h0LCB3aWR0aCwgY29sb3IsIGR4KTtcbiAgICB0aGlzLmR4ID0gZHg7XG4gICAgdGhpcy5saXZlcyA9IDM7XG4gIH0gXG59OyIsImNvbnN0IEJsb2NrID0gcmVxdWlyZSgnLi9CbG9jaycpO1xuY29uc3QgVGFpbCA9IHJlcXVpcmUgKCcuL1RhaWwnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBHYW1lIHtcbiAgY29uc3RydWN0b3IoY3R4KSB7XG4gICAgdGhpcy5jdHggPSBjdHg7XG4gICAgdGhpcy5nYW1lT3ZlciA9IGZhbHNlO1xuICAgIHRoaXMubGl2ZXMgPSAzO1xuICAgIHRoaXMucGF1c2VkID0gZmFsc2U7XG4gICAgdGhpcy50YWlsID0gWzFdO1xuICAgIHRoaXMuYmxvY2tzID0gW1xuICAgICAgbmV3IEJsb2NrKDIwLCAyNzAsIDEwLCAxMCwgJ3JnYigyNTUsIDI1NSwgODEpJywgMSwgMCksXG4gICAgICBuZXcgQmxvY2soNTgwLCAyNzAsIDEwLCAxMCwgJ3JnYigwLCAxNTMsIDI1NSknLCAtMSwgMCksXG4gICAgXTtcbiAgfVxuXG4gIGhhbmRsZUdhbWVPdmVyKCkge1xuICAgIHRoaXMuZ2FtZU92ZXIgPSB0cnVlO1xuICB9XG5cbiAgdG9nZ2xlUGF1c2UoKSB7XG4gICAgdGhpcy5wYXVzZWQgPSAhdGhpcy5wYXVzZWQ7XG4gIH1cblxuICBhbmltYXRlKCkge1xuICAgIHRoaXMuYmxvY2tzLmZvckVhY2goIGJsb2NrID0+IHtcblxuICAgICAgdGhpcy50YWlsLnB1c2goXG4gICAgICAgIG5ldyBUYWlsKGJsb2NrLngsIGJsb2NrLnksIGJsb2NrLmhlaWdodCwgYmxvY2sud2lkdGgsIGJsb2NrLmNvbG9yKVxuICAgICAgKTtcblxuICAgICAgdGhpcy5tZXRhUGxheWVyKGJsb2NrKTtcbiAgICAgIGJsb2NrLmRyYXcodGhpcy5jdHgpO1xuICAgIH0pO1xuICB9XG5cbiAgbWV0YVBsYXllcihibG9jaykge1xuICAgIGNvbnN0IHtjYW52YXN9ID0gdGhpcy5jdHg7XG5cbiAgICBpZiAoYmxvY2suaXNDb2xsaWRpbmdXaXRoV2FsbChjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpKSB7XG4gICAgICB0aGlzLmxpdmVzIC0tO1xuICAgICAgdGhpcy5oYW5kbGVHYW1lT3ZlcigpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5ibG9ja3NbMF0uaXNDb2xsaWRpbmdXaXRoKHRoaXMuYmxvY2tzWzFdKSkge1xuICAgICAgdGhpcy5saXZlcyAtLTtcbiAgICAgIHRoaXMuaGFuZGxlR2FtZU92ZXIoKTtcbiAgICB9IGVsc2UgaWYgKGJsb2NrLmlzQ29sbGlkaW5nV2l0aFRhaWwgKHRoaXMudGFpbCkpIHtcbiAgICAgIHRoaXMubGl2ZXMtLTtcbiAgICAgIHRoaXMuaGFuZGxlR2FtZU92ZXIoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYmxvY2subW92ZSgpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUtleVByZXNzKGUpIHtcbiAgICBjb25zdCBkaXJlY3Rpb24gPSB7XG4gICAgICBkeDogMCxcbiAgICAgIGR5OiAwXG4gICAgfTtcblxuICAgIGlmIChlLmtleSA9PT0gJ0Fycm93VXAnKSB7XG4gICAgICBkaXJlY3Rpb24uZHkgPSAtMTtcbiAgICAgIHRoaXMuYmxvY2tzWzFdLmNoYW5nZURpcmVjdGlvbihkaXJlY3Rpb24pO1xuXG4gICAgfSBlbHNlIGlmIChlLmtleSA9PT0gJ0Fycm93RG93bicpIHtcbiAgICAgIGRpcmVjdGlvbi5keSA9IDE7XG4gICAgICB0aGlzLmJsb2Nrc1sxXS5jaGFuZ2VEaXJlY3Rpb24oZGlyZWN0aW9uKTtcblxuICAgIH0gZWxzZSBpZiAoZS5rZXkgPT09ICdBcnJvd0xlZnQnKSB7XG4gICAgICBkaXJlY3Rpb24uZHggPSAtMTtcbiAgICAgIHRoaXMuYmxvY2tzWzFdLmNoYW5nZURpcmVjdGlvbihkaXJlY3Rpb24pOyAgICAgIFxuXG4gICAgfSBlbHNlIGlmIChlLmtleSA9PT0gJ0Fycm93UmlnaHQnKSB7XG4gICAgICBkaXJlY3Rpb24uZHggPSAxO1xuICAgICAgdGhpcy5ibG9ja3NbMV0uY2hhbmdlRGlyZWN0aW9uKGRpcmVjdGlvbik7ICAgICBcblxuICAgIH0gZWxzZSBpZiAoZS5rZXkgPT09ICd3Jykge1xuICAgICAgZGlyZWN0aW9uLmR5ID0gLTE7XG4gICAgICB0aGlzLmJsb2Nrc1swXS5jaGFuZ2VEaXJlY3Rpb24oZGlyZWN0aW9uKTtcbiAgICAgIFxuICAgIH0gZWxzZSBpZiAoZS5rZXkgPT09ICdhJykge1xuICAgICAgZGlyZWN0aW9uLmR4ID0gLTE7XG4gICAgICB0aGlzLmJsb2Nrc1swXS5jaGFuZ2VEaXJlY3Rpb24oZGlyZWN0aW9uKTtcbiAgICAgIFxuICAgIH0gZWxzZSBpZiAoZS5rZXkgPT09ICdzJykge1xuICAgICAgZGlyZWN0aW9uLmR5ID0gMTtcbiAgICAgIHRoaXMuYmxvY2tzWzBdLmNoYW5nZURpcmVjdGlvbihkaXJlY3Rpb24pO1xuICAgICAgXG4gICAgfSBlbHNlIGlmIChlLmtleSA9PT0gJ2QnKSB7XG4gICAgICBkaXJlY3Rpb24uZHggPSAxO1xuICAgICAgdGhpcy5ibG9ja3NbMF0uY2hhbmdlRGlyZWN0aW9uKGRpcmVjdGlvbik7XG4gICAgfVxuICB9XG59OyIsIm1vZHVsZS5leHBvcnRzID0gY2xhc3MgR2FtZVBpZWNlIHtcbiAgY29uc3RydWN0b3IoeCwgeSwgaGVpZ2h0LCB3aWR0aCwgY29sb3IpIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICB0aGlzLmR4ID0gMTtcbiAgICB0aGlzLmR5ID0gMDtcbiAgICB0aGlzLmR4diA9IDI7XG4gICAgdGhpcy5keXYgPSAyO1xuICB9XG5cbiAgZHJhdyhjdHgpIHtcbiAgICBjb25zdCB7IHgsIHksIGhlaWdodCwgd2lkdGgsIGNvbG9yIH0gPSB0aGlzO1xuXG4gICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgIGN0eC5maWxsUmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcbiAgfVxuXG4gIG1vdmUoKSB7XG4gICAgdGhpcy54ICs9IHRoaXMuZHggKiB0aGlzLmR4djtcbiAgICB0aGlzLnkgKz0gdGhpcy5keSAqIHRoaXMuZHl2O1xuICB9XG5cbiAgaXNDb2xsaWRpbmdXaXRoKG9iamVjdCkge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLnggPCBvYmplY3QueCArIG9iamVjdC53aWR0aCAmJiBcbiAgICAgIHRoaXMueCArIHRoaXMud2lkdGggPiBvYmplY3QueCAmJlxuICAgICAgdGhpcy55IDwgb2JqZWN0LnkgKyBvYmplY3QuaGVpZ2h0ICYmXG4gICAgICB0aGlzLnkgKyB0aGlzLmhlaWdodCA+IG9iamVjdC55XG4gICAgKTtcbiAgfVxuXG4gIGlzQ29sbGlkaW5nV2l0aFdhbGwoY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodCkge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLnggPCAwIHx8XG4gICAgICB0aGlzLnggKyB0aGlzLndpZHRoID4gY2FudmFzV2lkdGggfHxcbiAgICAgIHRoaXMueSA8IDAgfHwgXG4gICAgICB0aGlzLnkgKyB0aGlzLmhlaWdodCA+IGNhbnZhc0hlaWdodFxuICAgICk7XG4gIH1cblxuICBpc0NvbGxpZGluZ1dpdGhUYWlsKHRhaWwpIHtcbiAgICBsZXQgeWVsbG93VGFpbCA9IHRhaWwuZmlsdGVyICh0YWlsID0+IHRhaWwuY29sb3IgPT0gJ3JnYigyNTUsIDI1NSwgODEpJyk7XG4gICAgbGV0IGJsdWVUYWlsICAgPSB0YWlsLmZpbHRlciAodGFpbCA9PiB0YWlsLmNvbG9yID09ICdyZ2IoMCwgMTUzLCAyNTUpJyk7XG5cbiAgICB5ZWxsb3dUYWlsLnBvcCgpO1xuICAgIGJsdWVUYWlsLnBvcCgpO1xuXG4gICAgaWYgKCh0aGlzLmNvbG9yQ2hlY2tlcihibHVlVGFpbCkgfHwgdGhpcy5jb2xvckNoZWNrZXIoeWVsbG93VGFpbCkpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBjb2xvckNoZWNrZXIodGFpbHMpIHtcbiAgICBsZXQgY29sbGlkZSA9IGZhbHNlO1xuICAgIFxuICAgIHRhaWxzLmZvckVhY2godGFpbCA9PiB7XG4gICAgICBpZiAodGhpcy54ID09IHRhaWwueCAmJiB0aGlzLnkgPT0gdGFpbC55KSB7XG4gICAgICAgIGNvbGxpZGUgPSB0cnVlO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKGNvbGxpZGUgPT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcHJldmVudERyaXZpbmdCYWNrd2FyZHMoZGlyZWN0aW9uKSB7XG4gICAgbGV0IHByZXZpb3VzID0ge1xuICAgICAgZHg6IGRpcmVjdGlvbi5keCxcbiAgICAgIGR5OiBkaXJlY3Rpb24uZHlcbiAgICB9O1xuXG4gICAgaWYgXG4gICAgKCggdGhpcy5keCA9PSAxICYmIHByZXZpb3VzLmR4ID09IC0xICkgfHwgXG4gICAgKCAgdGhpcy5keCA9PSAtMSAmJiBwcmV2aW91cy5keCA9PSAxICkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgXG4gICAgKCggdGhpcy5keSA9PSAxICYmIHByZXZpb3VzLmR5ID09IC0xKSB8fCBcbiAgICAoICB0aGlzLmR5ID09IC0xICYmIHByZXZpb3VzLmR5ID09IDEpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgY2hhbmdlRGlyZWN0aW9uKGRpcmVjdGlvbikge1xuICAgIGlmICh0aGlzLnByZXZlbnREcml2aW5nQmFja3dhcmRzIChkaXJlY3Rpb24pKSB7XG4gICAgICB0aGlzLmR4ID0gZGlyZWN0aW9uLmR4O1xuICAgICAgdGhpcy5keSA9IGRpcmVjdGlvbi5keTtcbiAgICB9XG4gIH1cblxufTsiLCJjb25zdCBHYW1lUGllY2UgPSByZXF1aXJlKCcuL0dhbWVQaWVjZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIFRhaWwgZXh0ZW5kcyBHYW1lUGllY2Uge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCBoZWlnaHQsIHdpZHRoLCBjb2xvcikge1xuICAgIHN1cGVyKHgsIHksIGhlaWdodCwgd2lkdGgsIGNvbG9yKTtcbiAgfVxuXG4gIGRyYXcoY3R4KSB7XG4gICAgY29uc3QgeyB4LCB5LCBoZWlnaHQsIHdpZHRoIH0gPSB0aGlzO1xuXG4gICAgc3VwZXIuZHJhdyhjdHgpO1xuICAgIGN0eC5maWxsUmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcbiAgfVxufTtcblxuXG4iLCJjb25zdCBHYW1lID0gcmVxdWlyZSgnLi9HYW1lJyk7XG5cbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnYW1lJyk7XG5jb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbmNvbnN0IGdhbWUgPSBuZXcgR2FtZShjdHgpO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlS2V5UHJlc3MpO1xuXG5mdW5jdGlvbiBoYW5kbGVLZXlQcmVzcyhlKSB7XG4gIGdhbWUuaGFuZGxlS2V5UHJlc3MoZSk7XG59XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gIGhpZGVXZWxjb21lU2NyZWVuKCk7XG4gIGhpZGVTdGFydEJ1dHRvbigpO1xuICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKTtcbn0pO1xuXG5jb25zdCBoaWRlV2VsY29tZVNjcmVlbiA9ICgpID0+IHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlbGNvbWUtc2NyZWVuJykuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScpO1xufTtcblxuY29uc3QgaGlkZVN0YXJ0QnV0dG9uID0gKCkgPT4ge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnQnKS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJyk7XG59O1xuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG93VG9QbGF5JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgaGlkZVdlbGNvbWVTY3JlZW4oKTtcbn0pO1xuXG5jb25zdCB0b2dnbGVHYW1lT3ZlciA9ICgpID0+IHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUtb3Zlci1zY3JlZW4nKS5jbGFzc0xpc3QudG9nZ2xlKCdzaG93Jyk7XG59O1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheS1hZ2FpbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gIHRvZ2dsZUdhbWVPdmVyKCk7XG59KTtcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc2V0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgcmVzZXRHYW1lKCk7XG4gIC8vIGxvY2F0aW9uLnJlbG9hZCgpO1xufSk7XG5cbmNvbnN0IHJlc2V0R2FtZSA9ICgpID0+IHtcbiAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICBnYW1lLmJsb2Nrc1swXS54ID0gMjA7XG4gIGdhbWUuYmxvY2tzWzFdLnggPSA1ODA7XG4gIGdhbWUuYmxvY2tzWzBdLnkgPSAyNzA7XG4gIGdhbWUuYmxvY2tzWzFdLnkgPSAyNzA7XG4gIGdhbWUuYmxvY2tzWzBdLmR4ID0gMTtcbiAgZ2FtZS5ibG9ja3NbMV0uZHggPSAtMTtcbiAgZ2FtZS5ibG9ja3NbMF0uZHkgPSAwO1xuICBnYW1lLmJsb2Nrc1sxXS5keSA9IDA7XG4gIGdhbWUuYmxvY2tzWzFdLmR4diA9IDI7XG4gIGdhbWUuYmxvY2s7XG4gIGdhbWUuZ2FtZU92ZXIgPSBmYWxzZTtcbiAgZ2FtZS50YWlsID0gW107XG59O1xuXG5mdW5jdGlvbiBnYW1lTG9vcCAoKSB7XG5cbiAgaWYgKGdhbWUuZ2FtZU92ZXIgPT09IHRydWUpIHtcbiAgICB0b2dnbGVHYW1lT3ZlcigpO1xuXG4gIH0gZWxzZSB7XG4gICAgZ2FtZS5nYW1lT3ZlciA9IGZhbHNlO1xuICAgIGdhbWUuYW5pbWF0ZSgpO1xuICB9XG4gIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApO1xufSJdLCJzb3VyY2VSb290IjoiIn0=