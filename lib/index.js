const Game = require('./Game');

const canvas = document.querySelector('#game');
const ctx = canvas.getContext('2d');
const game = new Game(ctx);

document.addEventListener('keydown', handleKeyPress);

function handleKeyPress(e) {
  game.handleKeyPress(e);
}

document.getElementById('start').addEventListener('click', function() {
  hideWelcomeScreen();
  hideStartButton();
  window.requestAnimationFrame(gameLoop);
});

const hideWelcomeScreen = () => {
  document.querySelector('.welcome-screen').classList.toggle('hide');
};

const hideStartButton = () => {
  document.getElementById('start').classList.toggle('hide');
};

document.getElementById('howToPlay').addEventListener('click', function() {
  hideWelcomeScreen();
});

const toggleGameOver = () => {
  if (game.gameOver === true) {
    document.querySelector('.game-over-screen').classList.toggle('shown');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    return;
  } else {
    window.setTimeout(() => {
      game.animate(context);
      requestAnimationFrame(gameLoop);
    }, 120);
  }
};

document.querySelector('.play-again').addEventListener('click', function() {
  location.reload();
});

document.getElementById('reset').addEventListener('click', function() {
  resetGame();
});

const resetGame = () => {
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

function gameLoop () {

  if (game.gameOver === true) {
    toggleGameOver();
    return false;

  } else {
    game.gameOver = false;
    game.animate();
  }
  window.requestAnimationFrame(gameLoop);
}