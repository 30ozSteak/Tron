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

/***/ "./lib/Game.js":
/*!*********************!*\
  !*** ./lib/Game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Player = __webpack_require__(/*! ./Player */ "./lib/Player.js");
var Tail = __webpack_require__(/*! ./Tail */ "./lib/Tail.js");

module.exports = function () {
  function Game(ctx) {
    _classCallCheck(this, Game);

    this.ctx = ctx;
    this.gameOver = false;
    this.lives = 3;
    this.paused = false;
    this.tail = [1];
    this.players = [new Player(20, 270, 10, 10, 'rgb(255, 255, 81)', 1, 0), new Player(580, 270, 10, 10, 'rgb(0, 153, 255)', -1, 0)];
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

      this.players.forEach(function (player) {

        _this.tail.push(new Tail(player.x, player.y, player.height, player.width, player.color));

        _this.metaPlayer(player);
        player.draw(_this.ctx);
      });
    }
  }, {
    key: 'metaPlayer',
    value: function metaPlayer(player) {
      var canvas = this.ctx.canvas;


      if (player.isCollidingWithWall(canvas.width, canvas.height)) {
        player.lives--;
        this.handleGameOver();
      } else if (this.players[0].isCollidingWith(this.players[1])) {
        player.lives--;
        this.handleGameOver();
      } else if (player.isCollidingWithTail(this.tail)) {
        player.lives--;
        this.handleGameOver();
      } else {
        player.move();
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
        this.players[1].changeDirection(direction);
      } else if (e.key === 'ArrowDown') {
        direction.dy = 1;
        this.players[1].changeDirection(direction);
      } else if (e.key === 'ArrowLeft') {
        direction.dx = -1;
        this.players[1].changeDirection(direction);
      } else if (e.key === 'ArrowRight') {
        direction.dx = 1;
        this.players[1].changeDirection(direction);
      } else if (e.key === 'w') {
        direction.dy = -1;
        this.players[0].changeDirection(direction);
      } else if (e.key === 'a') {
        direction.dx = -1;
        this.players[0].changeDirection(direction);
      } else if (e.key === 's') {
        direction.dy = 1;
        this.players[0].changeDirection(direction);
      } else if (e.key === 'd') {
        direction.dx = 1;
        this.players[0].changeDirection(direction);
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

/***/ "./lib/Player.js":
/*!***********************!*\
  !*** ./lib/Player.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GamePiece = __webpack_require__(/*! ./GamePiece */ "./lib/GamePiece.js");

module.exports = function (_GamePiece) {
  _inherits(Player, _GamePiece);

  function Player(x, y, height, width, color, dx) {
    _classCallCheck(this, Player);

    var _this = _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this, x, y, height, width, color, dx));

    _this.dx = dx;
    _this.lives = 3;
    return _this;
  }

  return Player;
}(GamePiece);

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
  game.players[0].x = 20;
  game.players[1].x = 580;
  game.players[0].y = 270;
  game.players[1].y = 270;
  game.players[0].dx = 1;
  game.players[1].dx = -1;
  game.players[0].dy = 0;
  game.players[1].dy = 0;
  game.players[1].dxv = 2;
  game.player;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL0dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL0dhbWVQaWVjZS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvUGxheWVyLmpzIiwid2VicGFjazovLy8uL2xpYi9UYWlsLmpzIiwid2VicGFjazovLy8uL2xpYi9pbmRleC5qcyJdLCJuYW1lcyI6WyJQbGF5ZXIiLCJyZXF1aXJlIiwiVGFpbCIsIm1vZHVsZSIsImV4cG9ydHMiLCJjdHgiLCJnYW1lT3ZlciIsImxpdmVzIiwicGF1c2VkIiwidGFpbCIsInBsYXllcnMiLCJmb3JFYWNoIiwicHVzaCIsInBsYXllciIsIngiLCJ5IiwiaGVpZ2h0Iiwid2lkdGgiLCJjb2xvciIsIm1ldGFQbGF5ZXIiLCJkcmF3IiwiY2FudmFzIiwiaXNDb2xsaWRpbmdXaXRoV2FsbCIsImhhbmRsZUdhbWVPdmVyIiwiaXNDb2xsaWRpbmdXaXRoIiwiaXNDb2xsaWRpbmdXaXRoVGFpbCIsIm1vdmUiLCJlIiwiZGlyZWN0aW9uIiwiZHgiLCJkeSIsImtleSIsImNoYW5nZURpcmVjdGlvbiIsImR4diIsImR5diIsImZpbGxTdHlsZSIsImZpbGxSZWN0Iiwib2JqZWN0IiwiY2FudmFzV2lkdGgiLCJjYW52YXNIZWlnaHQiLCJ5ZWxsb3dUYWlsIiwiZmlsdGVyIiwiYmx1ZVRhaWwiLCJwb3AiLCJjb2xvckNoZWNrZXIiLCJ0YWlscyIsImNvbGxpZGUiLCJwcmV2aW91cyIsInByZXZlbnREcml2aW5nQmFja3dhcmRzIiwiR2FtZVBpZWNlIiwiR2FtZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImdldENvbnRleHQiLCJnYW1lIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZUtleVByZXNzIiwiZ2V0RWxlbWVudEJ5SWQiLCJoaWRlV2VsY29tZVNjcmVlbiIsImhpZGVTdGFydEJ1dHRvbiIsIndpbmRvdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImdhbWVMb29wIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwidG9nZ2xlR2FtZU92ZXIiLCJjbGVhclJlY3QiLCJzZXRUaW1lb3V0IiwiYW5pbWF0ZSIsImNvbnRleHQiLCJsb2NhdGlvbiIsInJlbG9hZCIsInJlc2V0R2FtZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQSxJQUFNQSxTQUFTLG1CQUFBQyxDQUFRLGlDQUFSLENBQWY7QUFDQSxJQUFNQyxPQUFPLG1CQUFBRCxDQUFTLDZCQUFULENBQWI7O0FBRUFFLE9BQU9DLE9BQVA7QUFDRSxnQkFBWUMsR0FBWixFQUFpQjtBQUFBOztBQUNmLFNBQUtBLEdBQUwsR0FBV0EsR0FBWDtBQUNBLFNBQUtDLFFBQUwsR0FBZ0IsS0FBaEI7QUFDQSxTQUFLQyxLQUFMLEdBQWEsQ0FBYjtBQUNBLFNBQUtDLE1BQUwsR0FBYyxLQUFkO0FBQ0EsU0FBS0MsSUFBTCxHQUFZLENBQUMsQ0FBRCxD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QUFMLENBQWEsQ0FBYixFQUFnQkksQ0FBaEIsR0FBb0IsRUFBcEI7QUFDQXdDLE9BQUs1QyxPQUFMLENBQWEsQ0FBYixFQUFnQkksQ0FBaEIsR0FBb0IsR0FBcEI7QUFDQXdDLE9BQUs1QyxPQUFMLENBQWEsQ0FBYixFQUFnQkssQ0FBaEIsR0FBb0IsR0FBcEI7QUFDQXVDLE9BQUs1QyxPQUFMLENBQWEsQ0FBYixFQUFnQkssQ0FBaEIsR0FBb0IsR0FBcEI7QUFDQXVDLE9BQUs1QyxPQUFMLENBQWEsQ0FBYixFQUFnQm1CLEVBQWhCLEdBQXFCLENBQXJCO0FBQ0F5QixPQUFLNUMsT0FBTCxDQUFhLENBQWIsRUFBZ0JtQixFQUFoQixHQUFxQixDQUFDLENBQXRCO0FBQ0F5QixPQUFLNUMsT0FBTCxDQUFhLENBQWIsRUFBZ0JvQixFQUFoQixHQUFxQixDQUFyQjtBQUNBd0IsT0FBSzVDLE9BQUwsQ0FBYSxDQUFiLEVBQWdCb0IsRUFBaEIsR0FBcUIsQ0FBckI7QUFDQXdCLE9BQUs1QyxPQUFMLENBQWEsQ0FBYixFQUFnQnVCLEdBQWhCLEdBQXNCLENBQXRCO0FBQ0FxQixPQUFLekMsTUFBTDtBQUNBeUMsT0FBS2hELFFBQUwsR0FBZ0IsS0FBaEI7QUFDQWdELE9BQUs3QyxJQUFMLEdBQVksRUFBWjtBQUNELENBZEQ7O0FBZ0JBLFNBQVNxRCxRQUFULEdBQXFCOztBQUVuQixNQUFJUixLQUFLaEQsUUFBTCxLQUFrQixJQUF0QixFQUE0QjtBQUMxQjJEO0FBQ0EsV0FBTyxLQUFQO0FBRUQsR0FKRCxNQUlPO0FBQ0xYLFNBQUtoRCxRQUFMLEdBQWdCLEtBQWhCO0FBQ0FnRCxTQUFLYyxPQUFMO0FBQ0Q7QUFDRFIsU0FBT0MscUJBQVAsQ0FBNkJDLFFBQTdCO0FBQ0QsQyIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vbGliL2luZGV4LmpzXCIpO1xuIiwiY29uc3QgUGxheWVyID0gcmVxdWlyZSgnLi9QbGF5ZXInKTtcbmNvbnN0IFRhaWwgPSByZXF1aXJlICgnLi9UYWlsJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgR2FtZSB7XG4gIGNvbnN0cnVjdG9yKGN0eCkge1xuICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgIHRoaXMuZ2FtZU92ZXIgPSBmYWxzZTtcbiAgICB0aGlzLmxpdmVzID0gMztcbiAgICB0aGlzLnBhdXNlZCA9IGZhbHNlO1xuICAgIHRoaXMudGFpbCA9IFsxXTtcbiAgICB0aGlzLnBsYXllcnMgPSBbXG4gICAgICBuZXcgUGxheWVyKDIwLCAyNzAsIDEwLCAxMCwgJ3JnYigyNTUsIDI1NSwgODEpJywgMSwgMCksXG4gICAgICBuZXcgUGxheWVyKDU4MCwgMjcwLCAxMCwgMTAsICdyZ2IoMCwgMTUzLCAyNTUpJywgLTEsIDApLFxuICAgIF07XG4gIH1cblxuICBoYW5kbGVHYW1lT3ZlcigpIHtcbiAgICB0aGlzLmdhbWVPdmVyID0gdHJ1ZTtcbiAgfVxuXG4gIHRvZ2dsZVBhdXNlKCkge1xuICAgIHRoaXMucGF1c2VkID0gIXRoaXMucGF1c2VkO1xuICB9XG5cbiAgYW5pbWF0ZSgpIHtcbiAgICB0aGlzLnBsYXllcnMuZm9yRWFjaCggcGxheWVyID0+IHtcblxuICAgICAgdGhpcy50YWlsLnB1c2goXG4gICAgICAgIG5ldyBUYWlsKHBsYXllci54LCBwbGF5ZXIueSwgcGxheWVyLmhlaWdodCwgcGxheWVyLndpZHRoLCBwbGF5ZXIuY29sb3IpXG4gICAgICApO1xuXG4gICAgICB0aGlzLm1ldGFQbGF5ZXIocGxheWVyKTtcbiAgICAgIHBsYXllci5kcmF3KHRoaXMuY3R4KTtcbiAgICB9KTtcbiAgfVxuXG4gIG1ldGFQbGF5ZXIocGxheWVyKSB7XG4gICAgY29uc3Qge2NhbnZhc30gPSB0aGlzLmN0eDtcblxuICAgIGlmIChwbGF5ZXIuaXNDb2xsaWRpbmdXaXRoV2FsbChjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpKSB7XG4gICAgICBwbGF5ZXIubGl2ZXMgLS07XG4gICAgICB0aGlzLmhhbmRsZUdhbWVPdmVyKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnBsYXllcnNbMF0uaXNDb2xsaWRpbmdXaXRoKHRoaXMucGxheWVyc1sxXSkpIHtcbiAgICAgIHBsYXllci5saXZlcyAtLTtcbiAgICAgIHRoaXMuaGFuZGxlR2FtZU92ZXIoKTtcbiAgICB9IGVsc2UgaWYgKHBsYXllci5pc0NvbGxpZGluZ1dpdGhUYWlsICh0aGlzLnRhaWwpKSB7XG4gICAgICBwbGF5ZXIubGl2ZXMtLTtcbiAgICAgIHRoaXMuaGFuZGxlR2FtZU92ZXIoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGxheWVyLm1vdmUoKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVLZXlQcmVzcyhlKSB7XG4gICAgY29uc3QgZGlyZWN0aW9uID0ge1xuICAgICAgZHg6IDAsXG4gICAgICBkeTogMFxuICAgIH07XG5cbiAgICBpZiAoZS5rZXkgPT09ICdBcnJvd1VwJykge1xuICAgICAgZGlyZWN0aW9uLmR5ID0gLTE7XG4gICAgICB0aGlzLnBsYXllcnNbMV0uY2hhbmdlRGlyZWN0aW9uKGRpcmVjdGlvbik7XG5cbiAgICB9IGVsc2UgaWYgKGUua2V5ID09PSAnQXJyb3dEb3duJykge1xuICAgICAgZGlyZWN0aW9uLmR5ID0gMTtcbiAgICAgIHRoaXMucGxheWVyc1sxXS5jaGFuZ2VEaXJlY3Rpb24oZGlyZWN0aW9uKTtcblxuICAgIH0gZWxzZSBpZiAoZS5rZXkgPT09ICdBcnJvd0xlZnQnKSB7XG4gICAgICBkaXJlY3Rpb24uZHggPSAtMTtcbiAgICAgIHRoaXMucGxheWVyc1sxXS5jaGFuZ2VEaXJlY3Rpb24oZGlyZWN0aW9uKTsgICAgICBcbiAgICB9IGVsc2UgaWYgKGUua2V5ID09PSAnQXJyb3dSaWdodCcpIHtcbiAgICAgIGRpcmVjdGlvbi5keCA9IDE7XG4gICAgICB0aGlzLnBsYXllcnNbMV0uY2hhbmdlRGlyZWN0aW9uKGRpcmVjdGlvbik7ICAgICBcblxuICAgIH0gZWxzZSBpZiAoZS5rZXkgPT09ICd3Jykge1xuICAgICAgZGlyZWN0aW9uLmR5ID0gLTE7XG4gICAgICB0aGlzLnBsYXllcnNbMF0uY2hhbmdlRGlyZWN0aW9uKGRpcmVjdGlvbik7XG4gICAgICBcbiAgICB9IGVsc2UgaWYgKGUua2V5ID09PSAnYScpIHtcbiAgICAgIGRpcmVjdGlvbi5keCA9IC0xO1xuICAgICAgdGhpcy5wbGF5ZXJzWzBdLmNoYW5nZURpcmVjdGlvbihkaXJlY3Rpb24pO1xuICAgICAgXG4gICAgfSBlbHNlIGlmIChlLmtleSA9PT0gJ3MnKSB7XG4gICAgICBkaXJlY3Rpb24uZHkgPSAxO1xuICAgICAgdGhpcy5wbGF5ZXJzWzBdLmNoYW5nZURpcmVjdGlvbihkaXJlY3Rpb24pO1xuICAgICAgXG4gICAgfSBlbHNlIGlmIChlLmtleSA9PT0gJ2QnKSB7XG4gICAgICBkaXJlY3Rpb24uZHggPSAxO1xuICAgICAgdGhpcy5wbGF5ZXJzWzBdLmNoYW5nZURpcmVjdGlvbihkaXJlY3Rpb24pO1xuICAgIH1cbiAgfVxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGNsYXNzIEdhbWVQaWVjZSB7XG4gIGNvbnN0cnVjdG9yKHgsIHksIGhlaWdodCwgd2lkdGgsIGNvbG9yKSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgdGhpcy5keCA9IDE7XG4gICAgdGhpcy5keSA9IDA7XG4gICAgdGhpcy5keHYgPSAyO1xuICAgIHRoaXMuZHl2ID0gMjtcbiAgfVxuXG4gIGRyYXcoY3R4KSB7XG4gICAgY29uc3QgeyB4LCB5LCBoZWlnaHQsIHdpZHRoLCBjb2xvciB9ID0gdGhpcztcblxuICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICBjdHguZmlsbFJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gIH1cblxuICBtb3ZlKCkge1xuICAgIHRoaXMueCArPSB0aGlzLmR4ICogdGhpcy5keHY7XG4gICAgdGhpcy55ICs9IHRoaXMuZHkgKiB0aGlzLmR5djtcbiAgfVxuXG4gIGlzQ29sbGlkaW5nV2l0aChvYmplY3QpIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy54IDwgb2JqZWN0LnggKyBvYmplY3Qud2lkdGggJiYgXG4gICAgICB0aGlzLnggKyB0aGlzLndpZHRoID4gb2JqZWN0LnggJiZcbiAgICAgIHRoaXMueSA8IG9iamVjdC55ICsgb2JqZWN0LmhlaWdodCAmJlxuICAgICAgdGhpcy55ICsgdGhpcy5oZWlnaHQgPiBvYmplY3QueVxuICAgICk7XG4gIH1cblxuICBpc0NvbGxpZGluZ1dpdGhXYWxsKGNhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHQpIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy54IDwgMCB8fFxuICAgICAgdGhpcy54ICsgdGhpcy53aWR0aCA+IGNhbnZhc1dpZHRoIHx8XG4gICAgICB0aGlzLnkgPCAwIHx8IFxuICAgICAgdGhpcy55ICsgdGhpcy5oZWlnaHQgPiBjYW52YXNIZWlnaHRcbiAgICApO1xuICB9XG5cbiAgaXNDb2xsaWRpbmdXaXRoVGFpbCh0YWlsKSB7XG4gICAgbGV0IHllbGxvd1RhaWwgPSB0YWlsLmZpbHRlciAodGFpbCA9PiB0YWlsLmNvbG9yID09ICdyZ2IoMjU1LCAyNTUsIDgxKScpO1xuICAgIGxldCBibHVlVGFpbCAgID0gdGFpbC5maWx0ZXIgKHRhaWwgPT4gdGFpbC5jb2xvciA9PSAncmdiKDAsIDE1MywgMjU1KScpO1xuXG4gICAgeWVsbG93VGFpbC5wb3AoKTtcbiAgICBibHVlVGFpbC5wb3AoKTtcblxuICAgIGlmICgodGhpcy5jb2xvckNoZWNrZXIoYmx1ZVRhaWwpIHx8IHRoaXMuY29sb3JDaGVja2VyKHllbGxvd1RhaWwpKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgY29sb3JDaGVja2VyKHRhaWxzKSB7XG4gICAgbGV0IGNvbGxpZGUgPSBmYWxzZTtcbiAgICBcbiAgICB0YWlscy5mb3JFYWNoKHRhaWwgPT4ge1xuICAgICAgaWYgKHRoaXMueCA9PSB0YWlsLnggJiYgdGhpcy55ID09IHRhaWwueSkge1xuICAgICAgICBjb2xsaWRlID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChjb2xsaWRlID09IHRydWUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHByZXZlbnREcml2aW5nQmFja3dhcmRzKGRpcmVjdGlvbikge1xuICAgIGxldCBwcmV2aW91cyA9IHtcbiAgICAgIGR4OiBkaXJlY3Rpb24uZHgsXG4gICAgICBkeTogZGlyZWN0aW9uLmR5XG4gICAgfTtcblxuICAgIGlmIFxuICAgICgoIHRoaXMuZHggPT0gMSAmJiBwcmV2aW91cy5keCA9PSAtMSApIHx8IFxuICAgICggIHRoaXMuZHggPT0gLTEgJiYgcHJldmlvdXMuZHggPT0gMSApKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIFxuICAgICgoIHRoaXMuZHkgPT0gMSAmJiBwcmV2aW91cy5keSA9PSAtMSkgfHwgXG4gICAgKCAgdGhpcy5keSA9PSAtMSAmJiBwcmV2aW91cy5keSA9PSAxKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGNoYW5nZURpcmVjdGlvbihkaXJlY3Rpb24pIHtcbiAgICBpZiAodGhpcy5wcmV2ZW50RHJpdmluZ0JhY2t3YXJkcyAoZGlyZWN0aW9uKSkge1xuICAgICAgdGhpcy5keCA9IGRpcmVjdGlvbi5keDtcbiAgICAgIHRoaXMuZHkgPSBkaXJlY3Rpb24uZHk7XG4gICAgfVxuICB9XG5cbn07IiwiY29uc3QgR2FtZVBpZWNlID0gcmVxdWlyZSgnLi9HYW1lUGllY2UnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBQbGF5ZXIgZXh0ZW5kcyBHYW1lUGllY2Uge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCBoZWlnaHQsIHdpZHRoLCBjb2xvciwgZHgpIHtcbiAgICBzdXBlcih4LCB5LCBoZWlnaHQsIHdpZHRoLCBjb2xvciwgZHgpO1xuICAgIHRoaXMuZHggPSBkeDtcbiAgICB0aGlzLmxpdmVzID0gMztcbiAgfSBcbn07IiwiY29uc3QgR2FtZVBpZWNlID0gcmVxdWlyZSgnLi9HYW1lUGllY2UnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBUYWlsIGV4dGVuZHMgR2FtZVBpZWNlIHtcbiAgY29uc3RydWN0b3IoeCwgeSwgaGVpZ2h0LCB3aWR0aCwgY29sb3IpIHtcbiAgICBzdXBlcih4LCB5LCBoZWlnaHQsIHdpZHRoLCBjb2xvcik7XG4gIH1cblxuICBkcmF3KGN0eCkge1xuICAgIGNvbnN0IHsgeCwgeSwgaGVpZ2h0LCB3aWR0aCB9ID0gdGhpcztcblxuICAgIHN1cGVyLmRyYXcoY3R4KTtcbiAgICBjdHguZmlsbFJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gIH1cbn07XG5cblxuIiwiY29uc3QgR2FtZSA9IHJlcXVpcmUoJy4vR2FtZScpO1xuXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2FtZScpO1xuY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5jb25zdCBnYW1lID0gbmV3IEdhbWUoY3R4KTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZUtleVByZXNzKTtcblxuZnVuY3Rpb24gaGFuZGxlS2V5UHJlc3MoZSkge1xuICBnYW1lLmhhbmRsZUtleVByZXNzKGUpO1xufVxuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICBoaWRlV2VsY29tZVNjcmVlbigpO1xuICBoaWRlU3RhcnRCdXR0b24oKTtcbiAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcCk7XG59KTtcblxuY29uc3QgaGlkZVdlbGNvbWVTY3JlZW4gPSAoKSA9PiB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWxjb21lLXNjcmVlbicpLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKTtcbn07XG5cbmNvbnN0IGhpZGVTdGFydEJ1dHRvbiA9ICgpID0+IHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0JykuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScpO1xufTtcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvd1RvUGxheScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gIGhpZGVXZWxjb21lU2NyZWVuKCk7XG59KTtcblxuY29uc3QgdG9nZ2xlR2FtZU92ZXIgPSAoKSA9PiB7XG4gIGlmIChnYW1lLmdhbWVPdmVyID09PSB0cnVlKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUtb3Zlci1zY3JlZW4nKS5jbGFzc0xpc3QudG9nZ2xlKCdzaG93bicpO1xuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICByZXR1cm47XG4gIH0gZWxzZSB7XG4gICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZ2FtZS5hbmltYXRlKGNvbnRleHQpO1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKTtcbiAgICB9LCAxMjApO1xuICB9XG59O1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheS1hZ2FpbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gIGxvY2F0aW9uLnJlbG9hZCgpO1xufSk7XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNldCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gIHJlc2V0R2FtZSgpO1xufSk7XG5cbmNvbnN0IHJlc2V0R2FtZSA9ICgpID0+IHtcbiAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICBnYW1lLnBsYXllcnNbMF0ueCA9IDIwO1xuICBnYW1lLnBsYXllcnNbMV0ueCA9IDU4MDtcbiAgZ2FtZS5wbGF5ZXJzWzBdLnkgPSAyNzA7XG4gIGdhbWUucGxheWVyc1sxXS55ID0gMjcwO1xuICBnYW1lLnBsYXllcnNbMF0uZHggPSAxO1xuICBnYW1lLnBsYXllcnNbMV0uZHggPSAtMTtcbiAgZ2FtZS5wbGF5ZXJzWzBdLmR5ID0gMDtcbiAgZ2FtZS5wbGF5ZXJzWzFdLmR5ID0gMDtcbiAgZ2FtZS5wbGF5ZXJzWzFdLmR4diA9IDI7XG4gIGdhbWUucGxheWVyO1xuICBnYW1lLmdhbWVPdmVyID0gZmFsc2U7XG4gIGdhbWUudGFpbCA9IFtdO1xufTtcblxuZnVuY3Rpb24gZ2FtZUxvb3AgKCkge1xuXG4gIGlmIChnYW1lLmdhbWVPdmVyID09PSB0cnVlKSB7XG4gICAgdG9nZ2xlR2FtZU92ZXIoKTtcbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgfSBlbHNlIHtcbiAgICBnYW1lLmdhbWVPdmVyID0gZmFsc2U7XG4gICAgZ2FtZS5hbmltYXRlKCk7XG4gIH1cbiAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcCk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==