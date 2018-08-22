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
  document.querySelector('.game-over-screen').classList.toggle('show');
};

document.querySelector('.play-again').addEventListener('click', function() {
  toggleGameOver();
});

document.getElementById('reset').addEventListener('click', function() {
  resetGame();
  // location.reload();
});

const resetGame = () => {
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

function gameLoop () {

  if (game.gameOver === true) {
    toggleGameOver();

  } else {
    game.gameOver = false;
    game.animate();
  }
  window.requestAnimationFrame(gameLoop);
}