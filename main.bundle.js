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

/***/ "./lib/Player.js":
/*!**********************!*\
  !*** ./lib/Player.js ***!
  \**********************/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL0Jsb2NrLmpzIiwid2VicGFjazovLy8uL2xpYi9HYW1lLmpzIiwid2VicGFjazovLy8uL2xpYi9HYW1lUGllY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL1RhaWwuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2luZGV4LmpzIl0sIm5hbWVzIjpbIkdhbWVQaWVjZSIsInJlcXVpcmUiLCJtb2R1bGUiLCJleHBvcnRzIiwieCIsInkiLCJoZWlnaHQiLCJ3aWR0aCIsImNvbG9yIiwiZHgiLCJsaXZlcyIsIkJsb2NrIiwiVGFpbCIsImN0eCIsImdhbWVPdmVyIiwicGF1c2VkIiwidGFpbCIsImJsb2NrcyIsImZvckVhY2giLCJwdXNoIiwiYmxvY2siLCJtZXRhUGxheWVyIiwiZHJhdyIsImNhbnZhcyIsImlzQ29sbGlkaW5nV2l0aFdhbGwiLCJoYW5kbGVHYW1lT3ZlciIsImlzQ29sbGlkaW5nV2l0aCIsImlzQ29sbGlkaW5nV2l0aFRhaWwiLCJtb3ZlIiwiZSIsImRpcmVjdGlvbiIsImR5Iiwia2V5IiwiY2hhbmdlRGlyZWN0aW9uIiwiZHh2IiwiZHl2IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJvYmplY3QiLCJjYW52YXNXaWR0aCIsImNhbnZhc0hlaWdodCIsInllbGxvd1RhaWwiLCJmaWx0ZXIiLCJibHVlVGFpbCIsInBvcCIsImNvbG9yQ2hlY2tlciIsInRhaWxzIiwiY29sbGlkZSIsInByZXZpb3VzIiwicHJldmVudERyaXZpbmdCYWNrd2FyZHMiLCJHYW1lIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0Q29udGV4dCIsImdhbWUiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlS2V5UHJlc3MiLCJnZXRFbGVtZW50QnlJZCIsImhpZGVXZWxjb21lU2NyZWVuIiwiaGlkZVN0YXJ0QnV0dG9uIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZ2FtZUxvb3AiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJ0b2dnbGVHYW1lT3ZlciIsImNsZWFyUmVjdCIsInNldFRpbWVvdXQiLCJhbmltYXRlIiwiY29udGV4dCIsImxvY2F0aW9uIiwicmVsb2FkIiwicmVzZXRHYW1lIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkEsSUFBTUEsWUFBWSxtQkFBQUMsQ0FBUSx1Q0FBUixDQUFsQjs7QUFFQUMsT0FBT0MsT0FBUDtBQUFBOztBQUNFLGlCQUFZQyxDQUFaLEVBQWVDLENBQWYsRUFBa0JDLE1BQWxCLEVBQTBCQyxLQUExQixFQUFpQ0MsS0FBakMsRUFBd0NDLEVBQXhDLEVBQTRDO0FBQUE7O0FBQUEsOEdBQ3BDTCxDQURvQyxFQUNqQ0MsQ0FEaUMsRUFDOUJDLE1BRDhCLEVBQ3RCQyxLQURzQixFQUNmQyxLQURlLEVBQ1JDLEVBRFE7O0FBRTFDLFVBQUtBLEVBQUwsR0FBVUEsRUFBVjtBQUNBLFVBQUtDLEtBQUwsR0FBYSxDQUFiO0FBSDBDO0FBSTNDOztBQUxIO0FBQUEsRUFBcUNWLFNBQXJDLEU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBLElBQU1XLFFBQVEsbUJBQUFWLENBQVEsK0JBQVIsQ0FBZDtBQUNBLElBQU1XLE9BQU8sbUJBQUFYLENBQVMsNkJBQVQsQ0FBYjs7QUFFQUMsT0FBT0MsT0FBUDtBQUNFLGdCQUFZVSxHQUFaLEVBQWlCO0FBQUE7O0FBQ2YsU0FBS0EsR0FBTCxHQUFXQSxHQUFYO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQixLQUFoQjtBQUNBLFNBQUtKLEtBQUwsR0FBYSxDQUFiO0FBQ0EsU0FBS0ssTUFBTCxHQUFjLEtBQWQ7QUFDQSxTQUFLQyxJQUFMLEdBQVksQ0FBQyxDQUFELENBQVo7QUFDQSxTQUFLQyxNQUFMLEdBQWMsQ0FDWixJQUFJTixLQUFKLENBQVUsRUFBVixFQUFjLEdBQWQsRUFBbUIsRUFBbkIsRUFBdUIsRUFBdkIsRUFBMkIsbUJBQTNCLEVBQWdELENBQWhELEVBQW1ELENBQW5ELENBRFksRUFFWixJQUFJQSxLQUFKLENBQVUsR0FBVixFQUFlLEdBQWYsRUFBb0IsRUFBcEIsRUFBd0IsRUFBeEIsRUFBNEIsa0JBQTVCLEVBQWdELENBQUMsQ0FBakQsRUFBb0QsQ0FBcEQsQ0FGWSxDQUFkO0FBSUQ7O0FBWEg7QUFBQTtBQUFBLHFDQWFtQjtBQUNmLFdBQUtHLFFBQUwsR0FBZ0IsSUFBaEI7QUFDRDtBQWZIO0FBQUE7QUFBQSxrQ0FpQmdCO0FBQ1osV0FBS0MsTUFBTCxHQUFjLENBQUMsS0FBS0EsTUFBcEI7QUFDRDtBQW5CSDtBQUFBO0FBQUEsOEJBcUJZO0FBQUE7O0FBQ1IsV0FBS0UsTUFBTCxDQUFZQyxPQUFaLENBQXFCLGlCQUFTOztBQUU1QixjQUFLRixJQUFMLENBQVVHLElBQVYsQ0FDRSxJQUFJUCxJQUFKLENBQVNRLE1BQU1oQixDQUFmLEVBQWtCZ0IsTUFBTWYsQ0FBeEIsRUFBMkJlLE1BQU1kLE1BQWpDLEVBQXlDYyxNQUFNYixLQUEvQyxFQUFzRGEsTUFBTVosS0FBNUQsQ0FERjs7QUFJQSxjQUFLYSxVQUFMLENBQWdCRCxLQUFoQjtBQUNBQSxjQUFNRSxJQUFOLENBQVcsTUFBS1QsR0FBaEI7QUFDRCxPQVJEO0FBU0Q7QUEvQkg7QUFBQTtBQUFBLCtCQWlDYU8sS0FqQ2IsRUFpQ29CO0FBQUEsVUFDVEcsTUFEUyxHQUNDLEtBQUtWLEdBRE4sQ0FDVFUsTUFEUzs7O0FBR2hCLFVBQUlILE1BQU1JLG1CQUFOLENBQTBCRCxPQUFPaEIsS0FBakMsRUFBd0NnQixPQUFPakIsTUFBL0MsQ0FBSixFQUE0RDtBQUMxRGMsY0FBTVYsS0FBTjtBQUNBLGFBQUtlLGNBQUw7QUFDRCxPQUhELE1BR08sSUFBSSxLQUFLUixNQUFMLENBQVksQ0FBWixFQUFlUyxlQUFmLENBQStCLEtBQUtULE1BQUwsQ0FBWSxDQUFaLENBQS9CLENBQUosRUFBb0Q7QUFDekRHLGNBQU1WLEtBQU47QUFDQSxhQUFLZSxjQUFMO0FBQ0QsT0FITSxNQUdBLElBQUlMLE1BQU1PLG1CQUFOLENBQTJCLEtBQUtYLElBQWhDLENBQUosRUFBMkM7QUFDaERJLGNBQU1WLEtBQU47QUFDQSxhQUFLZSxjQUFMO0FBQ0QsT0FITSxNQUdBO0FBQ0xMLGNBQU1RLElBQU47QUFDRDtBQUNGO0FBaERIO0FBQUE7QUFBQSxtQ0FrRGlCQyxDQWxEakIsRUFrRG9CO0FBQ2hCLFVBQU1DLFlBQVk7QUFDaEJyQixZQUFJLENBRFk7QUFFaEJzQixZQUFJO0FBRlksT0FBbEI7O0FBS0EsVUFBSUYsRUFBRUcsR0FBRixLQUFVLFNBQWQsRUFBeUI7QUFDdkJGLGtCQUFVQyxFQUFWLEdBQWUsQ0FBQyxDQUFoQjtBQUNBLGFBQUtkLE1BQUwsQ0FBWSxDQUFaLEVBQWVnQixlQUFmLENBQStCSCxTQUEvQjtBQUVELE9BSkQsTUFJTyxJQUFJRCxFQUFFRyxHQUFGLEtBQVUsV0FBZCxFQUEyQjtBQUNoQ0Ysa0JBQVVDLEVBQVYsR0FBZSxDQUFmO0FBQ0EsYUFBS2QsTUFBTCxDQUFZLENBQVosRUFBZWdCLGVBQWYsQ0FBK0JILFNBQS9CO0FBRUQsT0FKTSxNQUlBLElBQUlELEVBQUVHLEdBQUYsS0FBVSxXQUFkLEVBQTJCO0FBQ2hDRixrQkFBVXJCLEVBQVYsR0FBZSxDQUFDLENBQWhCO0FBQ0EsYUFBS1EsTUFBTCxDQUFZLENBQVosRUFBZWdCLGVBQWYsQ0FBK0JILFNBQS9CO0FBQ0QsT0FITSxNQUdBLElBQUlELEVBQUVHLEdBQUYsS0FBVSxZQUFkLEVBQTRCO0FBQ2pDRixrQkFBVXJCLEVBQVYsR0FBZSxDQUFmO0FBQ0EsYUFBS1EsTUFBTCxDQUFZLENBQVosRUFBZWdCLGVBQWYsQ0FBK0JILFNBQS9CO0FBRUQsT0FKTSxNQUlBLElBQUlELEVBQUVHLEdBQUYsS0FBVSxHQUFkLEVBQW1CO0FBQ3hCRixrQkFBVUMsRUFBVixHQUFlLENBQUMsQ0FBaEI7QUFDQSxhQUFLZCxNQUFMLENBQVksQ0FBWixFQUFlZ0IsZUFBZixDQUErQkgsU0FBL0I7QUFFRCxPQUpNLE1BSUEsSUFBSUQsRUFBRUcsR0FBRixLQUFVLEdBQWQsRUFBbUI7QUFDeEJGLGtCQUFVckIsRUFBVixHQUFlLENBQUMsQ0FBaEI7QUFDQSxhQUFLUSxNQUFMLENBQVksQ0FBWixFQUFlZ0IsZUFBZixDQUErQkgsU0FBL0I7QUFFRCxPQUpNLE1BSUEsSUFBSUQsRUFBRUcsR0FBRixLQUFVLEdBQWQsRUFBbUI7QUFDeEJGLGtCQUFVQyxFQUFWLEdBQWUsQ0FBZjtBQUNBLGFBQUtkLE1BQUwsQ0FBWSxDQUFaLEVBQWVnQixlQUFmLENBQStCSCxTQUEvQjtBQUVELE9BSk0sTUFJQSxJQUFJRCxFQUFFRyxHQUFGLEtBQVUsR0FBZCxFQUFtQjtBQUN4QkYsa0JBQVVyQixFQUFWLEdBQWUsQ0FBZjtBQUNBLGFBQUtRLE1BQUwsQ0FBWSxDQUFaLEVBQWVnQixlQUFmLENBQStCSCxTQUEvQjtBQUNEO0FBQ0Y7QUF2Rkg7O0FBQUE7QUFBQSxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQTVCLE9BQU9DLE9BQVA7QUFDRSxxQkFBWUMsQ0FBWixFQUFlQyxDQUFmLEVBQWtCQyxNQUFsQixFQUEwQkMsS0FBMUIsRUFBaUNDLEtBQWpDLEVBQXdDO0FBQUE7O0FBQ3RDLFNBQUtKLENBQUwsR0FBU0EsQ0FBVDtBQUNBLFNBQUtDLENBQUwsR0FBU0EsQ0FBVDtBQUNBLFNBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtDLEVBQUwsR0FBVSxDQUFWO0FBQ0EsU0FBS3NCLEVBQUwsR0FBVSxDQUFWO0FBQ0EsU0FBS0csR0FBTCxHQUFXLENBQVg7QUFDQSxTQUFLQyxHQUFMLEdBQVcsQ0FBWDtBQUNEOztBQVhIO0FBQUE7QUFBQSx5QkFhT3RCLEdBYlAsRUFhWTtBQUFBLFVBQ0FULENBREEsR0FDK0IsSUFEL0IsQ0FDQUEsQ0FEQTtBQUFBLFVBQ0dDLENBREgsR0FDK0IsSUFEL0IsQ0FDR0EsQ0FESDtBQUFBLFVBQ01DLE1BRE4sR0FDK0IsSUFEL0IsQ0FDTUEsTUFETjtBQUFBLFVBQ2NDLEtBRGQsR0FDK0IsSUFEL0IsQ0FDY0EsS0FEZDtBQUFBLFVBQ3FCQyxLQURyQixHQUMrQixJQUQvQixDQUNxQkEsS0FEckI7OztBQUdSSyxVQUFJdUIsU0FBSixHQUFnQjVCLEtBQWhCO0FBQ0FLLFVBQUl3QixRQUFKLENBQWFqQyxDQUFiLEVBQWdCQyxDQUFoQixFQUFtQkUsS0FBbkIsRUFBMEJELE1BQTFCO0FBQ0Q7QUFsQkg7QUFBQTtBQUFBLDJCQW9CUztBQUNMLFdBQUtGLENBQUwsSUFBVSxLQUFLSyxFQUFMLEdBQVUsS0FBS3lCLEdBQXpCO0FBQ0EsV0FBSzdCLENBQUwsSUFBVSxLQUFLMEIsRUFBTCxHQUFVLEtBQUtJLEdBQXpCO0FBQ0Q7QUF2Qkg7QUFBQTtBQUFBLG9DQXlCa0JHLE1BekJsQixFQXlCMEI7QUFDdEIsYUFDRSxLQUFLbEMsQ0FBTCxHQUFTa0MsT0FBT2xDLENBQVAsR0FBV2tDLE9BQU8vQixLQUEzQixJQUNBLEtBQUtILENBQUwsR0FBUyxLQUFLRyxLQUFkLEdBQXNCK0IsT0FBT2xDLENBRDdCLElBRUEsS0FBS0MsQ0FBTCxHQUFTaUMsT0FBT2pDLENBQVAsR0FBV2lDLE9BQU9oQyxNQUYzQixJQUdBLEtBQUtELENBQUwsR0FBUyxLQUFLQyxNQUFkLEdBQXVCZ0MsT0FBT2pDLENBSmhDO0FBTUQ7QUFoQ0g7QUFBQTtBQUFBLHdDQWtDc0JrQyxXQWxDdEIsRUFrQ21DQyxZQWxDbkMsRUFrQ2lEO0FBQzdDLGFBQ0UsS0FBS3BDLENBQUwsR0FBUyxDQUFULElBQ0EsS0FBS0EsQ0FBTCxHQUFTLEtBQUtHLEtBQWQsR0FBc0JnQyxXQUR0QixJQUVBLEtBQUtsQyxDQUFMLEdBQVMsQ0FGVCxJQUdBLEtBQUtBLENBQUwsR0FBUyxLQUFLQyxNQUFkLEdBQXVCa0MsWUFKekI7QUFNRDtBQXpDSDtBQUFBO0FBQUEsd0NBMkNzQnhCLElBM0N0QixFQTJDNEI7QUFDeEIsVUFBSXlCLGFBQWF6QixLQUFLMEIsTUFBTCxDQUFhO0FBQUEsZUFBUTFCLEtBQUtSLEtBQUwsSUFBYyxtQkFBdEI7QUFBQSxPQUFiLENBQWpCO0FBQ0EsVUFBSW1DLFdBQWEzQixLQUFLMEIsTUFBTCxDQUFhO0FBQUEsZUFBUTFCLEtBQUtSLEtBQUwsSUFBYyxrQkFBdEI7QUFBQSxPQUFiLENBQWpCOztBQUVBaUMsaUJBQVdHLEdBQVg7QUFDQUQsZUFBU0MsR0FBVDs7QUFFQSxVQUFLLEtBQUtDLFlBQUwsQ0FBa0JGLFFBQWxCLEtBQStCLEtBQUtFLFlBQUwsQ0FBa0JKLFVBQWxCLENBQXBDLEVBQW9FO0FBQ2xFLGVBQU8sSUFBUDtBQUNEO0FBQ0Y7QUFyREg7QUFBQTtBQUFBLGlDQXVEZUssS0F2RGYsRUF1RHNCO0FBQUE7O0FBQ2xCLFVBQUlDLFVBQVUsS0FBZDs7QUFFQUQsWUFBTTVCLE9BQU4sQ0FBYyxnQkFBUTtBQUNwQixZQUFJLE1BQUtkLENBQUwsSUFBVVksS0FBS1osQ0FBZixJQUFvQixNQUFLQyxDQUFMLElBQVVXLEtBQUtYLENBQXZDLEVBQTBDO0FBQ3hDMEMsb0JBQVUsSUFBVjtBQUNBO0FBQ0Q7QUFDRixPQUxEO0FBTUEsVUFBSUEsV0FBVyxJQUFmLEVBQXFCO0FBQ25CLGVBQU8sSUFBUDtBQUNEO0FBQ0Y7QUFuRUg7QUFBQTtBQUFBLDRDQXFFMEJqQixTQXJFMUIsRUFxRXFDO0FBQ2pDLFVBQUlrQixXQUFXO0FBQ2J2QyxZQUFJcUIsVUFBVXJCLEVBREQ7QUFFYnNCLFlBQUlELFVBQVVDO0FBRkQsT0FBZjs7QUFLQSxVQUNHLEtBQUt0QixFQUFMLElBQVcsQ0FBWCxJQUFnQnVDLFNBQVN2QyxFQUFULElBQWUsQ0FBQyxDQUFsQyxJQUNFLEtBQUtBLEVBQUwsSUFBVyxDQUFDLENBQVosSUFBaUJ1QyxTQUFTdkMsRUFBVCxJQUFlLENBRm5DLEVBRXdDO0FBQ3RDLGVBQU8sS0FBUDtBQUNEO0FBQ0QsVUFDRyxLQUFLc0IsRUFBTCxJQUFXLENBQVgsSUFBZ0JpQixTQUFTakIsRUFBVCxJQUFlLENBQUMsQ0FBbEMsSUFDRSxLQUFLQSxFQUFMLElBQVcsQ0FBQyxDQUFaLElBQWlCaUIsU0FBU2pCLEVBQVQsSUFBZSxDQUZuQyxFQUV1QztBQUNyQyxlQUFPLEtBQVA7QUFDRDtBQUNELGFBQU8sSUFBUDtBQUNEO0FBdEZIO0FBQUE7QUFBQSxvQ0F3RmtCRCxTQXhGbEIsRUF3RjZCO0FBQ3pCLFVBQUksS0FBS21CLHVCQUFMLENBQThCbkIsU0FBOUIsQ0FBSixFQUE4QztBQUM1QyxhQUFLckIsRUFBTCxHQUFVcUIsVUFBVXJCLEVBQXBCO0FBQ0EsYUFBS3NCLEVBQUwsR0FBVUQsVUFBVUMsRUFBcEI7QUFDRDtBQUNGO0FBN0ZIOztBQUFBO0FBQUEsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUEsSUFBTS9CLFlBQVksbUJBQUFDLENBQVEsdUNBQVIsQ0FBbEI7O0FBRUFDLE9BQU9DLE9BQVA7QUFBQTs7QUFDRSxnQkFBWUMsQ0FBWixFQUFlQyxDQUFmLEVBQWtCQyxNQUFsQixFQUEwQkMsS0FBMUIsRUFBaUNDLEtBQWpDLEVBQXdDO0FBQUE7O0FBQUEsdUdBQ2hDSixDQURnQyxFQUM3QkMsQ0FENkIsRUFDMUJDLE1BRDBCLEVBQ2xCQyxLQURrQixFQUNYQyxLQURXO0FBRXZDOztBQUhIO0FBQUE7QUFBQSx5QkFLT0ssR0FMUCxFQUtZO0FBQUEsVUFDQVQsQ0FEQSxHQUN3QixJQUR4QixDQUNBQSxDQURBO0FBQUEsVUFDR0MsQ0FESCxHQUN3QixJQUR4QixDQUNHQSxDQURIO0FBQUEsVUFDTUMsTUFETixHQUN3QixJQUR4QixDQUNNQSxNQUROO0FBQUEsVUFDY0MsS0FEZCxHQUN3QixJQUR4QixDQUNjQSxLQURkOzs7QUFHUix1R0FBV00sR0FBWDtBQUNBQSxVQUFJd0IsUUFBSixDQUFhakMsQ0FBYixFQUFnQkMsQ0FBaEIsRUFBbUJFLEtBQW5CLEVBQTBCRCxNQUExQjtBQUNEO0FBVkg7O0FBQUE7QUFBQSxFQUFvQ04sU0FBcEMsRTs7Ozs7Ozs7Ozs7Ozs7QUNGQSxJQUFNa0QsT0FBTyxtQkFBQWpELENBQVEsNkJBQVIsQ0FBYjs7QUFFQSxJQUFNc0IsU0FBUzRCLFNBQVNDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBZjtBQUNBLElBQU12QyxNQUFNVSxPQUFPOEIsVUFBUCxDQUFrQixJQUFsQixDQUFaO0FBQ0EsSUFBTUMsT0FBTyxJQUFJSixJQUFKLENBQVNyQyxHQUFULENBQWI7O0FBRUFzQyxTQUFTSSxnQkFBVCxDQUEwQixTQUExQixFQUFxQ0MsY0FBckM7O0FBRUEsU0FBU0EsY0FBVCxDQUF3QjNCLENBQXhCLEVBQTJCO0FBQ3pCeUIsT0FBS0UsY0FBTCxDQUFvQjNCLENBQXBCO0FBQ0Q7O0FBRURzQixTQUFTTSxjQUFULENBQXdCLE9BQXhCLEVBQWlDRixnQkFBakMsQ0FBa0QsT0FBbEQsRUFBMkQsWUFBVztBQUNwRUc7QUFDQUM7QUFDQUMsU0FBT0MscUJBQVAsQ0FBNkJDLFFBQTdCO0FBQ0QsQ0FKRDs7QUFNQSxJQUFNSixvQkFBb0IsU0FBcEJBLGlCQUFvQixHQUFNO0FBQzlCUCxXQUFTQyxhQUFULENBQXVCLGlCQUF2QixFQUEwQ1csU0FBMUMsQ0FBb0RDLE1BQXBELENBQTJELE1BQTNEO0FBQ0QsQ0FGRDs7QUFJQSxJQUFNTCxrQkFBa0IsU0FBbEJBLGVBQWtCLEdBQU07QUFDNUJSLFdBQVNNLGNBQVQsQ0FBd0IsT0FBeEIsRUFBaUNNLFNBQWpDLENBQTJDQyxNQUEzQyxDQUFrRCxNQUFsRDtBQUNELENBRkQ7O0FBSUFiLFNBQVNNLGNBQVQsQ0FBd0IsV0FBeEIsRUFBcUNGLGdCQUFyQyxDQUFzRCxPQUF0RCxFQUErRCxZQUFXO0FBQ3hFRztBQUNELENBRkQ7O0FBSUEsSUFBTU8saUJBQWlCLFNBQWpCQSxjQUFpQixHQUFNO0FBQzNCLE1BQUlYLEtBQUt4QyxRQUFMLEtBQWtCLElBQXRCLEVBQTRCO0FBQzFCcUMsYUFBU0MsYUFBVCxDQUF1QixtQkFBdkIsRUFBNENXLFNBQTVDLENBQXNEQyxNQUF0RCxDQUE2RCxPQUE3RDtBQUNBbkQsUUFBSXFELFNBQUosQ0FBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CM0MsT0FBT2hCLEtBQTNCLEVBQWtDZ0IsT0FBT2pCLE1BQXpDO0FBQ0E7QUFDRCxHQUpELE1BSU87QUFDTHNELFdBQU9PLFVBQVAsQ0FBa0IsWUFBTTtBQUN0QmIsV0FBS2MsT0FBTCxDQUFhQyxPQUFiO0FBQ0FSLDRCQUFzQkMsUUFBdEI7QUFDRCxLQUhELEVBR0csR0FISDtBQUlEO0FBQ0YsQ0FYRDs7QUFhQVgsU0FBU0MsYUFBVCxDQUF1QixhQUF2QixFQUFzQ0csZ0JBQXRDLENBQXVELE9BQXZELEVBQWdFLFlBQVc7QUFDekVlLFdBQVNDLE1BQVQ7QUFDRCxDQUZEOztBQUlBcEIsU0FBU00sY0FBVCxDQUF3QixPQUF4QixFQUFpQ0YsZ0JBQWpDLENBQWtELE9BQWxELEVBQTJELFlBQVc7QUFDcEVpQjtBQUNELENBRkQ7O0FBSUEsSUFBTUEsWUFBWSxTQUFaQSxTQUFZLEdBQU07QUFDdEIzRCxNQUFJcUQsU0FBSixDQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IzQyxPQUFPaEIsS0FBM0IsRUFBa0NnQixPQUFPakIsTUFBekM7QUFDQWdELE9BQUtyQyxNQUFMLENBQVksQ0FBWixFQUFlYixDQUFmLEdBQW1CLEVBQW5CO0FBQ0FrRCxPQUFLckMsTUFBTCxDQUFZLENBQVosRUFBZWIsQ0FBZixHQUFtQixHQUFuQjtBQUNBa0QsT0FBS3JDLE1BQUwsQ0FBWSxDQUFaLEVBQWVaLENBQWYsR0FBbUIsR0FBbkI7QUFDQWlELE9BQUtyQyxNQUFMLENBQVksQ0FBWixFQUFlWixDQUFmLEdBQW1CLEdBQW5CO0FBQ0FpRCxPQUFLckMsTUFBTCxDQUFZLENBQVosRUFBZVIsRUFBZixHQUFvQixDQUFwQjtBQUNBNkMsT0FBS3JDLE1BQUwsQ0FBWSxDQUFaLEVBQWVSLEVBQWYsR0FBb0IsQ0FBQyxDQUFyQjtBQUNBNkMsT0FBS3JDLE1BQUwsQ0FBWSxDQUFaLEVBQWVjLEVBQWYsR0FBb0IsQ0FBcEI7QUFDQXVCLE9BQUtyQyxNQUFMLENBQVksQ0FBWixFQUFlYyxFQUFmLEdBQW9CLENBQXBCO0FBQ0F1QixPQUFLckMsTUFBTCxDQUFZLENBQVosRUFBZWlCLEdBQWYsR0FBcUIsQ0FBckI7QUFDQW9CLE9BQUtsQyxLQUFMO0FBQ0FrQyxPQUFLeEMsUUFBTCxHQUFnQixLQUFoQjtBQUNBd0MsT0FBS3RDLElBQUwsR0FBWSxFQUFaO0FBQ0QsQ0FkRDs7QUFnQkEsU0FBUzhDLFFBQVQsR0FBcUI7O0FBRW5CLE1BQUlSLEtBQUt4QyxRQUFMLEtBQWtCLElBQXRCLEVBQTRCO0FBQzFCbUQ7QUFDQSxXQUFPLEtBQVA7QUFFRCxHQUpELE1BSU87QUFDTFgsU0FBS3hDLFFBQUwsR0FBZ0IsS0FBaEI7QUFDQXdDLFNBQUtjLE9BQUw7QUFDRDtBQUNEUixTQUFPQyxxQkFBUCxDQUE2QkMsUUFBN0I7QUFDRCxDIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9saWIvaW5kZXguanNcIik7XG4iLCJjb25zdCBHYW1lUGllY2UgPSByZXF1aXJlKCcuL0dhbWVQaWVjZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIEJsb2NrIGV4dGVuZHMgR2FtZVBpZWNlIHtcbiAgY29uc3RydWN0b3IoeCwgeSwgaGVpZ2h0LCB3aWR0aCwgY29sb3IsIGR4KSB7XG4gICAgc3VwZXIoeCwgeSwgaGVpZ2h0LCB3aWR0aCwgY29sb3IsIGR4KTtcbiAgICB0aGlzLmR4ID0gZHg7XG4gICAgdGhpcy5saXZlcyA9IDM7XG4gIH0gXG59OyIsImNvbnN0IEJsb2NrID0gcmVxdWlyZSgnLi9CbG9jaycpO1xuY29uc3QgVGFpbCA9IHJlcXVpcmUgKCcuL1RhaWwnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBHYW1lIHtcbiAgY29uc3RydWN0b3IoY3R4KSB7XG4gICAgdGhpcy5jdHggPSBjdHg7XG4gICAgdGhpcy5nYW1lT3ZlciA9IGZhbHNlO1xuICAgIHRoaXMubGl2ZXMgPSAzO1xuICAgIHRoaXMucGF1c2VkID0gZmFsc2U7XG4gICAgdGhpcy50YWlsID0gWzFdO1xuICAgIHRoaXMuYmxvY2tzID0gW1xuICAgICAgbmV3IEJsb2NrKDIwLCAyNzAsIDEwLCAxMCwgJ3JnYigyNTUsIDI1NSwgODEpJywgMSwgMCksXG4gICAgICBuZXcgQmxvY2soNTgwLCAyNzAsIDEwLCAxMCwgJ3JnYigwLCAxNTMsIDI1NSknLCAtMSwgMCksXG4gICAgXTtcbiAgfVxuXG4gIGhhbmRsZUdhbWVPdmVyKCkge1xuICAgIHRoaXMuZ2FtZU92ZXIgPSB0cnVlO1xuICB9XG5cbiAgdG9nZ2xlUGF1c2UoKSB7XG4gICAgdGhpcy5wYXVzZWQgPSAhdGhpcy5wYXVzZWQ7XG4gIH1cblxuICBhbmltYXRlKCkge1xuICAgIHRoaXMuYmxvY2tzLmZvckVhY2goIGJsb2NrID0+IHtcblxuICAgICAgdGhpcy50YWlsLnB1c2goXG4gICAgICAgIG5ldyBUYWlsKGJsb2NrLngsIGJsb2NrLnksIGJsb2NrLmhlaWdodCwgYmxvY2sud2lkdGgsIGJsb2NrLmNvbG9yKVxuICAgICAgKTtcblxuICAgICAgdGhpcy5tZXRhUGxheWVyKGJsb2NrKTtcbiAgICAgIGJsb2NrLmRyYXcodGhpcy5jdHgpO1xuICAgIH0pO1xuICB9XG5cbiAgbWV0YVBsYXllcihibG9jaykge1xuICAgIGNvbnN0IHtjYW52YXN9ID0gdGhpcy5jdHg7XG5cbiAgICBpZiAoYmxvY2suaXNDb2xsaWRpbmdXaXRoV2FsbChjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpKSB7XG4gICAgICBibG9jay5saXZlcyAtLTtcbiAgICAgIHRoaXMuaGFuZGxlR2FtZU92ZXIoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuYmxvY2tzWzBdLmlzQ29sbGlkaW5nV2l0aCh0aGlzLmJsb2Nrc1sxXSkpIHtcbiAgICAgIGJsb2NrLmxpdmVzIC0tO1xuICAgICAgdGhpcy5oYW5kbGVHYW1lT3ZlcigpO1xuICAgIH0gZWxzZSBpZiAoYmxvY2suaXNDb2xsaWRpbmdXaXRoVGFpbCAodGhpcy50YWlsKSkge1xuICAgICAgYmxvY2subGl2ZXMtLTtcbiAgICAgIHRoaXMuaGFuZGxlR2FtZU92ZXIoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYmxvY2subW92ZSgpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUtleVByZXNzKGUpIHtcbiAgICBjb25zdCBkaXJlY3Rpb24gPSB7XG4gICAgICBkeDogMCxcbiAgICAgIGR5OiAwXG4gICAgfTtcblxuICAgIGlmIChlLmtleSA9PT0gJ0Fycm93VXAnKSB7XG4gICAgICBkaXJlY3Rpb24uZHkgPSAtMTtcbiAgICAgIHRoaXMuYmxvY2tzWzFdLmNoYW5nZURpcmVjdGlvbihkaXJlY3Rpb24pO1xuXG4gICAgfSBlbHNlIGlmIChlLmtleSA9PT0gJ0Fycm93RG93bicpIHtcbiAgICAgIGRpcmVjdGlvbi5keSA9IDE7XG4gICAgICB0aGlzLmJsb2Nrc1sxXS5jaGFuZ2VEaXJlY3Rpb24oZGlyZWN0aW9uKTtcblxuICAgIH0gZWxzZSBpZiAoZS5rZXkgPT09ICdBcnJvd0xlZnQnKSB7XG4gICAgICBkaXJlY3Rpb24uZHggPSAtMTtcbiAgICAgIHRoaXMuYmxvY2tzWzFdLmNoYW5nZURpcmVjdGlvbihkaXJlY3Rpb24pOyAgICAgIFxuICAgIH0gZWxzZSBpZiAoZS5rZXkgPT09ICdBcnJvd1JpZ2h0Jykge1xuICAgICAgZGlyZWN0aW9uLmR4ID0gMTtcbiAgICAgIHRoaXMuYmxvY2tzWzFdLmNoYW5nZURpcmVjdGlvbihkaXJlY3Rpb24pOyAgICAgXG5cbiAgICB9IGVsc2UgaWYgKGUua2V5ID09PSAndycpIHtcbiAgICAgIGRpcmVjdGlvbi5keSA9IC0xO1xuICAgICAgdGhpcy5ibG9ja3NbMF0uY2hhbmdlRGlyZWN0aW9uKGRpcmVjdGlvbik7XG4gICAgICBcbiAgICB9IGVsc2UgaWYgKGUua2V5ID09PSAnYScpIHtcbiAgICAgIGRpcmVjdGlvbi5keCA9IC0xO1xuICAgICAgdGhpcy5ibG9ja3NbMF0uY2hhbmdlRGlyZWN0aW9uKGRpcmVjdGlvbik7XG4gICAgICBcbiAgICB9IGVsc2UgaWYgKGUua2V5ID09PSAncycpIHtcbiAgICAgIGRpcmVjdGlvbi5keSA9IDE7XG4gICAgICB0aGlzLmJsb2Nrc1swXS5jaGFuZ2VEaXJlY3Rpb24oZGlyZWN0aW9uKTtcbiAgICAgIFxuICAgIH0gZWxzZSBpZiAoZS5rZXkgPT09ICdkJykge1xuICAgICAgZGlyZWN0aW9uLmR4ID0gMTtcbiAgICAgIHRoaXMuYmxvY2tzWzBdLmNoYW5nZURpcmVjdGlvbihkaXJlY3Rpb24pO1xuICAgIH1cbiAgfVxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGNsYXNzIEdhbWVQaWVjZSB7XG4gIGNvbnN0cnVjdG9yKHgsIHksIGhlaWdodCwgd2lkdGgsIGNvbG9yKSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgdGhpcy5keCA9IDE7XG4gICAgdGhpcy5keSA9IDA7XG4gICAgdGhpcy5keHYgPSAyO1xuICAgIHRoaXMuZHl2ID0gMjtcbiAgfVxuXG4gIGRyYXcoY3R4KSB7XG4gICAgY29uc3QgeyB4LCB5LCBoZWlnaHQsIHdpZHRoLCBjb2xvciB9ID0gdGhpcztcblxuICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICBjdHguZmlsbFJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gIH1cblxuICBtb3ZlKCkge1xuICAgIHRoaXMueCArPSB0aGlzLmR4ICogdGhpcy5keHY7XG4gICAgdGhpcy55ICs9IHRoaXMuZHkgKiB0aGlzLmR5djtcbiAgfVxuXG4gIGlzQ29sbGlkaW5nV2l0aChvYmplY3QpIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy54IDwgb2JqZWN0LnggKyBvYmplY3Qud2lkdGggJiYgXG4gICAgICB0aGlzLnggKyB0aGlzLndpZHRoID4gb2JqZWN0LnggJiZcbiAgICAgIHRoaXMueSA8IG9iamVjdC55ICsgb2JqZWN0LmhlaWdodCAmJlxuICAgICAgdGhpcy55ICsgdGhpcy5oZWlnaHQgPiBvYmplY3QueVxuICAgICk7XG4gIH1cblxuICBpc0NvbGxpZGluZ1dpdGhXYWxsKGNhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHQpIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy54IDwgMCB8fFxuICAgICAgdGhpcy54ICsgdGhpcy53aWR0aCA+IGNhbnZhc1dpZHRoIHx8XG4gICAgICB0aGlzLnkgPCAwIHx8IFxuICAgICAgdGhpcy55ICsgdGhpcy5oZWlnaHQgPiBjYW52YXNIZWlnaHRcbiAgICApO1xuICB9XG5cbiAgaXNDb2xsaWRpbmdXaXRoVGFpbCh0YWlsKSB7XG4gICAgbGV0IHllbGxvd1RhaWwgPSB0YWlsLmZpbHRlciAodGFpbCA9PiB0YWlsLmNvbG9yID09ICdyZ2IoMjU1LCAyNTUsIDgxKScpO1xuICAgIGxldCBibHVlVGFpbCAgID0gdGFpbC5maWx0ZXIgKHRhaWwgPT4gdGFpbC5jb2xvciA9PSAncmdiKDAsIDE1MywgMjU1KScpO1xuXG4gICAgeWVsbG93VGFpbC5wb3AoKTtcbiAgICBibHVlVGFpbC5wb3AoKTtcblxuICAgIGlmICgodGhpcy5jb2xvckNoZWNrZXIoYmx1ZVRhaWwpIHx8IHRoaXMuY29sb3JDaGVja2VyKHllbGxvd1RhaWwpKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgY29sb3JDaGVja2VyKHRhaWxzKSB7XG4gICAgbGV0IGNvbGxpZGUgPSBmYWxzZTtcbiAgICBcbiAgICB0YWlscy5mb3JFYWNoKHRhaWwgPT4ge1xuICAgICAgaWYgKHRoaXMueCA9PSB0YWlsLnggJiYgdGhpcy55ID09IHRhaWwueSkge1xuICAgICAgICBjb2xsaWRlID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChjb2xsaWRlID09IHRydWUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHByZXZlbnREcml2aW5nQmFja3dhcmRzKGRpcmVjdGlvbikge1xuICAgIGxldCBwcmV2aW91cyA9IHtcbiAgICAgIGR4OiBkaXJlY3Rpb24uZHgsXG4gICAgICBkeTogZGlyZWN0aW9uLmR5XG4gICAgfTtcblxuICAgIGlmIFxuICAgICgoIHRoaXMuZHggPT0gMSAmJiBwcmV2aW91cy5keCA9PSAtMSApIHx8IFxuICAgICggIHRoaXMuZHggPT0gLTEgJiYgcHJldmlvdXMuZHggPT0gMSApKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIFxuICAgICgoIHRoaXMuZHkgPT0gMSAmJiBwcmV2aW91cy5keSA9PSAtMSkgfHwgXG4gICAgKCAgdGhpcy5keSA9PSAtMSAmJiBwcmV2aW91cy5keSA9PSAxKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGNoYW5nZURpcmVjdGlvbihkaXJlY3Rpb24pIHtcbiAgICBpZiAodGhpcy5wcmV2ZW50RHJpdmluZ0JhY2t3YXJkcyAoZGlyZWN0aW9uKSkge1xuICAgICAgdGhpcy5keCA9IGRpcmVjdGlvbi5keDtcbiAgICAgIHRoaXMuZHkgPSBkaXJlY3Rpb24uZHk7XG4gICAgfVxuICB9XG5cbn07IiwiY29uc3QgR2FtZVBpZWNlID0gcmVxdWlyZSgnLi9HYW1lUGllY2UnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBUYWlsIGV4dGVuZHMgR2FtZVBpZWNlIHtcbiAgY29uc3RydWN0b3IoeCwgeSwgaGVpZ2h0LCB3aWR0aCwgY29sb3IpIHtcbiAgICBzdXBlcih4LCB5LCBoZWlnaHQsIHdpZHRoLCBjb2xvcik7XG4gIH1cblxuICBkcmF3KGN0eCkge1xuICAgIGNvbnN0IHsgeCwgeSwgaGVpZ2h0LCB3aWR0aCB9ID0gdGhpcztcblxuICAgIHN1cGVyLmRyYXcoY3R4KTtcbiAgICBjdHguZmlsbFJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gIH1cbn07XG5cblxuIiwiY29uc3QgR2FtZSA9IHJlcXVpcmUoJy4vR2FtZScpO1xuXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2FtZScpO1xuY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5jb25zdCBnYW1lID0gbmV3IEdhbWUoY3R4KTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZUtleVByZXNzKTtcblxuZnVuY3Rpb24gaGFuZGxlS2V5UHJlc3MoZSkge1xuICBnYW1lLmhhbmRsZUtleVByZXNzKGUpO1xufVxuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICBoaWRlV2VsY29tZVNjcmVlbigpO1xuICBoaWRlU3RhcnRCdXR0b24oKTtcbiAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcCk7XG59KTtcblxuY29uc3QgaGlkZVdlbGNvbWVTY3JlZW4gPSAoKSA9PiB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWxjb21lLXNjcmVlbicpLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKTtcbn07XG5cbmNvbnN0IGhpZGVTdGFydEJ1dHRvbiA9ICgpID0+IHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0JykuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScpO1xufTtcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvd1RvUGxheScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gIGhpZGVXZWxjb21lU2NyZWVuKCk7XG59KTtcblxuY29uc3QgdG9nZ2xlR2FtZU92ZXIgPSAoKSA9PiB7XG4gIGlmIChnYW1lLmdhbWVPdmVyID09PSB0cnVlKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUtb3Zlci1zY3JlZW4nKS5jbGFzc0xpc3QudG9nZ2xlKCdzaG93bicpO1xuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICByZXR1cm47XG4gIH0gZWxzZSB7XG4gICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZ2FtZS5hbmltYXRlKGNvbnRleHQpO1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKTtcbiAgICB9LCAxMjApO1xuICB9XG59O1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheS1hZ2FpbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gIGxvY2F0aW9uLnJlbG9hZCgpO1xufSk7XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNldCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gIHJlc2V0R2FtZSgpO1xufSk7XG5cbmNvbnN0IHJlc2V0R2FtZSA9ICgpID0+IHtcbiAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICBnYW1lLmJsb2Nrc1swXS54ID0gMjA7XG4gIGdhbWUuYmxvY2tzWzFdLnggPSA1ODA7XG4gIGdhbWUuYmxvY2tzWzBdLnkgPSAyNzA7XG4gIGdhbWUuYmxvY2tzWzFdLnkgPSAyNzA7XG4gIGdhbWUuYmxvY2tzWzBdLmR4ID0gMTtcbiAgZ2FtZS5ibG9ja3NbMV0uZHggPSAtMTtcbiAgZ2FtZS5ibG9ja3NbMF0uZHkgPSAwO1xuICBnYW1lLmJsb2Nrc1sxXS5keSA9IDA7XG4gIGdhbWUuYmxvY2tzWzFdLmR4diA9IDI7XG4gIGdhbWUuYmxvY2s7XG4gIGdhbWUuZ2FtZU92ZXIgPSBmYWxzZTtcbiAgZ2FtZS50YWlsID0gW107XG59O1xuXG5mdW5jdGlvbiBnYW1lTG9vcCAoKSB7XG5cbiAgaWYgKGdhbWUuZ2FtZU92ZXIgPT09IHRydWUpIHtcbiAgICB0b2dnbGVHYW1lT3ZlcigpO1xuICAgIHJldHVybiBmYWxzZTtcblxuICB9IGVsc2Uge1xuICAgIGdhbWUuZ2FtZU92ZXIgPSBmYWxzZTtcbiAgICBnYW1lLmFuaW1hdGUoKTtcbiAgfVxuICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9