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
    this.paused = false;
    this.gameOver = false;
    this.player = 0;
    this.lives = 3;
    this.blocks = [new Block(20, 270, 10, 10, 'rgb(255, 255, 81)', 1, 0), new Block(580, 270, 10, 10, 'rgb(0, 153, 255)', -1, 0)];
    this.tail = [];
  }

  _createClass(Game, [{
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
        this.endRound(block);
      } else if (this.blocks[0].isCollidingWith(this.blocks[1])) {
        this.endRound(block);
      } else if (block.isCollidingWithTail(this.tail)) {
        this.endRound(block);
      } else {
        block.move();
      }
    }
  }, {
    key: 'endRound',
    value: function endRound() {
      // console.log('someone died');
    }
  }, {
    key: 'isOver',
    value: function isOver() {
      return this.gameOver;
    }

    // togglePause() {
    //   this.paused = !this.paused;
    // }

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
    value: function isCollidingWithTail(tails) {
      var yellowTail = tails.filter(function (tail) {
        return tail.color == 'rgb(255, 255, 81)';
      });
      var blueTail = tails.filter(function (tail) {
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

      // this is fascinating. and infinitely easier than what we did last time.
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

var hideWelcomeScreen = function hideWelcomeScreen() {
  document.querySelector('.welcome-screen').classList.toggle('hide');
};

var hideStartButton = function hideStartButton() {
  document.getElementById('start').classList.toggle('hide');
};

document.getElementById('start').addEventListener('click', function () {
  hideWelcomeScreen();
  hideStartButton();
  window.requestAnimationFrame(gameLoop);
});

document.getElementById('howToPlay').addEventListener('click', function () {
  hideWelcomeScreen();
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
  game.block;
};

function gameLoop() {

  if (game.endRound()) {
    alert('Game Over');
    // create a dropdown/popup that appears, 
    // one player loses a life
    //  restarts animation loop on click
  } else {
    game.animate();
  }
  window.requestAnimationFrame(gameLoop);
}

document.addEventListener('keydown', handleKeyPress);

function handleKeyPress(e) {
  game.handleKeyPress(e);
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL0Jsb2NrLmpzIiwid2VicGFjazovLy8uL2xpYi9HYW1lLmpzIiwid2VicGFjazovLy8uL2xpYi9HYW1lUGllY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL1RhaWwuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2luZGV4LmpzIl0sIm5hbWVzIjpbIkdhbWVQaWVjZSIsInJlcXVpcmUiLCJtb2R1bGUiLCJleHBvcnRzIiwieCIsInkiLCJoZWlnaHQiLCJ3aWR0aCIsImNvbG9yIiwiZHgiLCJsaXZlcyIsIkJsb2NrIiwiVGFpbCIsImN0eCIsInBhdXNlZCIsImdhbWVPdmVyIiwicGxheWVyIiwiYmxvY2tzIiwidGFpbCIsImZvckVhY2giLCJwdXNoIiwiYmxvY2siLCJtZXRhUGxheWVyIiwiZHJhdyIsImNhbnZhcyIsImlzQ29sbGlkaW5nV2l0aFdhbGwiLCJlbmRSb3VuZCIsImlzQ29sbGlkaW5nV2l0aCIsImlzQ29sbGlkaW5nV2l0aFRhaWwiLCJtb3ZlIiwiZSIsImRpcmVjdGlvbiIsImR5Iiwia2V5IiwiY2hhbmdlRGlyZWN0aW9uIiwiZHh2IiwiZHl2IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJvYmplY3QiLCJjYW52YXNXaWR0aCIsImNhbnZhc0hlaWdodCIsInRhaWxzIiwieWVsbG93VGFpbCIsImZpbHRlciIsImJsdWVUYWlsIiwicG9wIiwiY29vcmRpbmF0ZUNoZWNrIiwiY29sbGlkZSIsInByZXZpb3VzIiwicHJldmVudERyaXZpbmdCYWNrd2FyZHMiLCJHYW1lIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0Q29udGV4dCIsImdhbWUiLCJoaWRlV2VsY29tZVNjcmVlbiIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImhpZGVTdGFydEJ1dHRvbiIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsIndpbmRvdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImdhbWVMb29wIiwicmVzZXRHYW1lIiwiY2xlYXJSZWN0IiwiYWxlcnQiLCJhbmltYXRlIiwiaGFuZGxlS2V5UHJlc3MiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQSxJQUFNQSxZQUFZLG1CQUFBQyxDQUFRLHVDQUFSLENBQWxCOztBQUVBQyxPQUFPQyxPQUFQO0FBQUE7O0FBQ0UsaUJBQVlDLENBQVosRUFBZUMsQ0FBZixFQUFrQkMsTUFBbEIsRUFBMEJDLEtBQTFCLEVBQWlDQyxLQUFqQyxFQUF3Q0MsRUFBeEMsRUFBNEM7QUFBQTs7QUFBQSw4R0FDcENMLENBRG9DLEVBQ2pDQyxDQURpQyxFQUM5QkMsTUFEOEIsRUFDdEJDLEtBRHNCLEVBQ2ZDLEtBRGUsRUFDUkMsRUFEUTs7QUFFMUMsVUFBS0EsRUFBTCxHQUFVQSxFQUFWO0FBQ0EsVUFBS0MsS0FBTCxHQUFhLENBQWI7QUFIMEM7QUFJM0M7O0FBTEg7QUFB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d0J2QyxDQUF4QixFQUEyQjtBQUN6QnlCLE9BQUtjLGNBQUwsQ0FBb0J2QyxDQUFwQjtBQUNELEMiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2xpYi9pbmRleC5qc1wiKTtcbiIsImNvbnN0IEdhbWVQaWVjZSA9IHJlcXVpcmUoJy4vR2FtZVBpZWNlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgQmxvY2sgZXh0ZW5kcyBHYW1lUGllY2Uge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCBoZWlnaHQsIHdpZHRoLCBjb2xvciwgZHgpIHtcbiAgICBzdXBlcih4LCB5LCBoZWlnaHQsIHdpZHRoLCBjb2xvciwgZHgpO1xuICAgIHRoaXMuZHggPSBkeDtcbiAgICB0aGlzLmxpdmVzID0gMztcbiAgfSBcbn07IiwiY29uc3QgQmxvY2sgPSByZXF1aXJlKCcuL0Jsb2NrJyk7XG5jb25zdCBUYWlsID0gcmVxdWlyZSAoJy4vVGFpbCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIEdhbWUge1xuICBjb25zdHJ1Y3RvcihjdHgpIHtcbiAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICB0aGlzLnBhdXNlZCA9IGZhbHNlO1xuICAgIHRoaXMuZ2FtZU92ZXIgPSBmYWxzZTtcbiAgICB0aGlzLnBsYXllciA9IDA7XG4gICAgdGhpcy5saXZlcyA9IDM7XG4gICAgdGhpcy5ibG9ja3MgPSBbXG4gICAgICBuZXcgQmxvY2soMjAsIDI3MCwgMTAsIDEwLCAncmdiKDI1NSwgMjU1LCA4MSknLCAxLCAwKSxcbiAgICAgIG5ldyBCbG9jayg1ODAsIDI3MCwgMTAsIDEwLCAncmdiKDAsIDE1MywgMjU1KScsIC0xLCAwKSxcbiAgICBdO1xuICAgIHRoaXMudGFpbCA9IFtdO1xuICB9XG5cbiAgYW5pbWF0ZSgpIHtcbiAgICB0aGlzLmJsb2Nrcy5mb3JFYWNoKCBibG9jayA9PiB7XG5cbiAgICAgIHRoaXMudGFpbC5wdXNoKFxuICAgICAgICBuZXcgVGFpbChibG9jay54LCBibG9jay55LCBibG9jay5oZWlnaHQsIGJsb2NrLndpZHRoLCBibG9jay5jb2xvcilcbiAgICAgICk7XG5cbiAgICAgIHRoaXMubWV0YVBsYXllcihibG9jayk7XG4gICAgICBibG9jay5kcmF3KHRoaXMuY3R4KTtcbiAgICB9KTtcbiAgfVxuXG4gIG1ldGFQbGF5ZXIoYmxvY2spIHtcbiAgICBjb25zdCB7Y2FudmFzfSA9IHRoaXMuY3R4O1xuXG4gICAgaWYgKGJsb2NrLmlzQ29sbGlkaW5nV2l0aFdhbGwoY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KSkge1xuICAgICAgdGhpcy5lbmRSb3VuZChibG9jayk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmJsb2Nrc1swXS5pc0NvbGxpZGluZ1dpdGgodGhpcy5ibG9ja3NbMV0pKSB7XG4gICAgICB0aGlzLmVuZFJvdW5kKGJsb2NrKTtcbiAgICB9IGVsc2UgaWYgKGJsb2NrLmlzQ29sbGlkaW5nV2l0aFRhaWwgKHRoaXMudGFpbCkpIHtcbiAgICAgIHRoaXMuZW5kUm91bmQoYmxvY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICBibG9jay5tb3ZlKCk7XG4gICAgfVxuICB9XG5cbiAgZW5kUm91bmQoKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ3NvbWVvbmUgZGllZCcpO1xuICB9XG5cbiAgaXNPdmVyKCkge1xuICAgIHJldHVybiB0aGlzLmdhbWVPdmVyO1xuICB9XG5cbiAgLy8gdG9nZ2xlUGF1c2UoKSB7XG4gIC8vICAgdGhpcy5wYXVzZWQgPSAhdGhpcy5wYXVzZWQ7XG4gIC8vIH1cblxuICBoYW5kbGVLZXlQcmVzcyhlKSB7XG4gICAgY29uc3QgZGlyZWN0aW9uID0ge1xuICAgICAgZHg6IDAsXG4gICAgICBkeTogMFxuICAgIH07XG5cbiAgICBpZiAoZS5rZXkgPT09ICdBcnJvd1VwJykge1xuICAgICAgZGlyZWN0aW9uLmR5ID0gLTE7XG4gICAgICB0aGlzLmJsb2Nrc1sxXS5jaGFuZ2VEaXJlY3Rpb24oZGlyZWN0aW9uKTtcblxuICAgIH0gZWxzZSBpZiAoZS5rZXkgPT09ICdBcnJvd0Rvd24nKSB7XG4gICAgICBkaXJlY3Rpb24uZHkgPSAxO1xuICAgICAgdGhpcy5ibG9ja3NbMV0uY2hhbmdlRGlyZWN0aW9uKGRpcmVjdGlvbik7XG5cbiAgICB9IGVsc2UgaWYgKGUua2V5ID09PSAnQXJyb3dMZWZ0Jykge1xuICAgICAgZGlyZWN0aW9uLmR4ID0gLTE7XG4gICAgICB0aGlzLmJsb2Nrc1sxXS5jaGFuZ2VEaXJlY3Rpb24oZGlyZWN0aW9uKTsgICAgICBcblxuICAgIH0gZWxzZSBpZiAoZS5rZXkgPT09ICdBcnJvd1JpZ2h0Jykge1xuICAgICAgZGlyZWN0aW9uLmR4ID0gMTtcbiAgICAgIHRoaXMuYmxvY2tzWzFdLmNoYW5nZURpcmVjdGlvbihkaXJlY3Rpb24pOyAgICAgXG5cbiAgICB9IGVsc2UgaWYgKGUua2V5ID09PSAndycpIHtcbiAgICAgIGRpcmVjdGlvbi5keSA9IC0xO1xuICAgICAgdGhpcy5ibG9ja3NbMF0uY2hhbmdlRGlyZWN0aW9uKGRpcmVjdGlvbik7XG4gICAgICBcbiAgICB9IGVsc2UgaWYgKGUua2V5ID09PSAnYScpIHtcbiAgICAgIGRpcmVjdGlvbi5keCA9IC0xO1xuICAgICAgdGhpcy5ibG9ja3NbMF0uY2hhbmdlRGlyZWN0aW9uKGRpcmVjdGlvbik7XG4gICAgICBcbiAgICB9IGVsc2UgaWYgKGUua2V5ID09PSAncycpIHtcbiAgICAgIGRpcmVjdGlvbi5keSA9IDE7XG4gICAgICB0aGlzLmJsb2Nrc1swXS5jaGFuZ2VEaXJlY3Rpb24oZGlyZWN0aW9uKTtcbiAgICAgIFxuICAgIH0gZWxzZSBpZiAoZS5rZXkgPT09ICdkJykge1xuICAgICAgZGlyZWN0aW9uLmR4ID0gMTtcbiAgICAgIHRoaXMuYmxvY2tzWzBdLmNoYW5nZURpcmVjdGlvbihkaXJlY3Rpb24pO1xuICAgIH1cbiAgfVxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGNsYXNzIEdhbWVQaWVjZSB7XG4gIGNvbnN0cnVjdG9yKHgsIHksIGhlaWdodCwgd2lkdGgsIGNvbG9yKSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgdGhpcy5keCA9IDE7XG4gICAgdGhpcy5keSA9IDA7XG4gICAgdGhpcy5keHYgPSAyO1xuICAgIHRoaXMuZHl2ID0gMjtcbiAgfVxuXG4gIGRyYXcoY3R4KSB7XG4gICAgY29uc3QgeyB4LCB5LCBoZWlnaHQsIHdpZHRoLCBjb2xvciB9ID0gdGhpcztcblxuICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICBjdHguZmlsbFJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gIH1cblxuICBtb3ZlKCkge1xuICAgIHRoaXMueCArPSB0aGlzLmR4ICogdGhpcy5keHY7XG4gICAgdGhpcy55ICs9IHRoaXMuZHkgKiB0aGlzLmR5djtcbiAgfVxuXG4gIGlzQ29sbGlkaW5nV2l0aChvYmplY3QpIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy54IDwgb2JqZWN0LnggKyBvYmplY3Qud2lkdGggJiYgXG4gICAgICB0aGlzLnggKyB0aGlzLndpZHRoID4gb2JqZWN0LnggJiZcbiAgICAgIHRoaXMueSA8IG9iamVjdC55ICsgb2JqZWN0LmhlaWdodCAmJlxuICAgICAgdGhpcy55ICsgdGhpcy5oZWlnaHQgPiBvYmplY3QueVxuICAgICk7XG4gIH1cblxuICBpc0NvbGxpZGluZ1dpdGhXYWxsKGNhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHQpIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy54IDwgMCB8fFxuICAgICAgdGhpcy54ICsgdGhpcy53aWR0aCA+IGNhbnZhc1dpZHRoIHx8XG4gICAgICB0aGlzLnkgPCAwIHx8IFxuICAgICAgdGhpcy55ICsgdGhpcy5oZWlnaHQgPiBjYW52YXNIZWlnaHRcbiAgICApO1xuICB9XG5cbiAgaXNDb2xsaWRpbmdXaXRoVGFpbCh0YWlscykge1xuICAgIGxldCB5ZWxsb3dUYWlsID0gdGFpbHMuZmlsdGVyICh0YWlsID0+IHRhaWwuY29sb3IgPT0gJ3JnYigyNTUsIDI1NSwgODEpJyk7XG4gICAgbGV0IGJsdWVUYWlsICAgPSB0YWlscy5maWx0ZXIgKHRhaWwgPT4gdGFpbC5jb2xvciA9PSAncmdiKDAsIDE1MywgMjU1KScgKTtcblxuICAgIHllbGxvd1RhaWwucG9wKCk7XG4gICAgYmx1ZVRhaWwucG9wKCk7XG5cbiAgICBpZiAoKHRoaXMuY29vcmRpbmF0ZUNoZWNrKGJsdWVUYWlsKSB8fCB0aGlzLmNvb3JkaW5hdGVDaGVjayh5ZWxsb3dUYWlsKSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGNvb3JkaW5hdGVDaGVjayh0YWlscykge1xuICAgIGxldCBjb2xsaWRlID0gZmFsc2U7XG4gICAgXG4gICAgdGFpbHMuZm9yRWFjaCh0YWlsID0+IHtcbiAgICAgIGlmICh0aGlzLnggPT0gdGFpbC54ICYmIHRoaXMueSA9PSB0YWlsLnkpIHtcbiAgICAgICAgY29sbGlkZSA9IHRydWU7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoY29sbGlkZSA9PSB0cnVlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBwcmV2ZW50RHJpdmluZ0JhY2t3YXJkcyhkaXJlY3Rpb24pIHtcbiAgICBsZXQgcHJldmlvdXMgPSB7XG4gICAgICBkeDogZGlyZWN0aW9uLmR4LFxuICAgICAgZHk6IGRpcmVjdGlvbi5keVxuICAgIH07XG5cbiAgICAvLyB0aGlzIGlzIGZhc2NpbmF0aW5nLiBhbmQgaW5maW5pdGVseSBlYXNpZXIgdGhhbiB3aGF0IHdlIGRpZCBsYXN0IHRpbWUuXG4gICAgaWYgXG4gICAgKCggdGhpcy5keCA9PSAxICYmIHByZXZpb3VzLmR4ID09IC0xICkgfHwgXG4gICAgKCAgdGhpcy5keCA9PSAtMSAmJiBwcmV2aW91cy5keCA9PSAxICkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgXG4gICAgKCggdGhpcy5keSA9PSAxICYmIHByZXZpb3VzLmR5ID09IC0xKSB8fCBcbiAgICAoICB0aGlzLmR5ID09IC0xICYmIHByZXZpb3VzLmR5ID09IDEpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgY2hhbmdlRGlyZWN0aW9uKGRpcmVjdGlvbikge1xuICAgIGlmICh0aGlzLnByZXZlbnREcml2aW5nQmFja3dhcmRzIChkaXJlY3Rpb24pKSB7XG4gICAgICB0aGlzLmR4ID0gZGlyZWN0aW9uLmR4O1xuICAgICAgdGhpcy5keSA9IGRpcmVjdGlvbi5keTtcbiAgICB9XG4gIH1cblxufTsiLCJjb25zdCBHYW1lUGllY2UgPSByZXF1aXJlKCcuL0dhbWVQaWVjZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIFRhaWwgZXh0ZW5kcyBHYW1lUGllY2Uge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCBoZWlnaHQsIHdpZHRoLCBjb2xvcikge1xuICAgIHN1cGVyKHgsIHksIGhlaWdodCwgd2lkdGgsIGNvbG9yKTtcbiAgfVxuXG4gIGRyYXcoY3R4KSB7XG4gICAgY29uc3QgeyB4LCB5LCBoZWlnaHQsIHdpZHRoIH0gPSB0aGlzO1xuXG4gICAgc3VwZXIuZHJhdyhjdHgpO1xuICAgIGN0eC5maWxsUmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcbiAgfVxufTtcblxuXG4iLCJjb25zdCBHYW1lID0gcmVxdWlyZSgnLi9HYW1lJyk7XG5cbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnYW1lJyk7XG5jb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbmNvbnN0IGdhbWUgPSBuZXcgR2FtZShjdHgpO1xuXG5jb25zdCBoaWRlV2VsY29tZVNjcmVlbiA9ICgpID0+IHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlbGNvbWUtc2NyZWVuJykuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScpO1xufTtcblxuY29uc3QgaGlkZVN0YXJ0QnV0dG9uID0gKCkgPT4ge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnQnKS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJyk7XG59O1xuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICBoaWRlV2VsY29tZVNjcmVlbigpO1xuICBoaWRlU3RhcnRCdXR0b24oKTtcbiAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcCk7XG59KTtcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvd1RvUGxheScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gIGhpZGVXZWxjb21lU2NyZWVuKCk7XG59KTtcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc2V0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgcmVzZXRHYW1lKCk7XG59KTtcblxuY29uc3QgcmVzZXRHYW1lID0gKCkgPT4ge1xuICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gIGdhbWUuYmxvY2tzWzBdLnggPSAyMDtcbiAgZ2FtZS5ibG9ja3NbMV0ueCA9IDU4MDtcbiAgZ2FtZS5ibG9ja3NbMF0ueSA9IDI3MDtcbiAgZ2FtZS5ibG9ja3NbMV0ueSA9IDI3MDtcbiAgZ2FtZS5ibG9ja3NbMF0uZHggPSAxO1xuICBnYW1lLmJsb2Nrc1sxXS5keCA9IC0xO1xuICBnYW1lLmJsb2Nrc1swXS5keSA9IDA7XG4gIGdhbWUuYmxvY2tzWzFdLmR5ID0gMDtcbiAgZ2FtZS5ibG9jaztcbn07XG5cbmZ1bmN0aW9uIGdhbWVMb29wICgpIHtcblxuICBpZiAoZ2FtZS5lbmRSb3VuZCgpKSB7XG4gICAgYWxlcnQoJ0dhbWUgT3ZlcicpO1xuICAgIC8vIGNyZWF0ZSBhIGRyb3Bkb3duL3BvcHVwIHRoYXQgYXBwZWFycywgXG4gICAgLy8gb25lIHBsYXllciBsb3NlcyBhIGxpZmVcbiAgICAvLyAgcmVzdGFydHMgYW5pbWF0aW9uIGxvb3Agb24gY2xpY2tcblxuICB9IGVsc2Uge1xuICAgIGdhbWUuYW5pbWF0ZSgpO1xuICB9XG4gIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApO1xufVxuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVLZXlQcmVzcyk7XG5cbmZ1bmN0aW9uIGhhbmRsZUtleVByZXNzKGUpIHtcbiAgZ2FtZS5oYW5kbGVLZXlQcmVzcyhlKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9