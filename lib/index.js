const Game = require('./Game');

const canvas = document.querySelector('#game');
const ctx = canvas.getContext('2d');
const game = new Game(ctx);

const hideWelcomeScreen = () => 
  document.querySelector('.welcome-screen').classList.toggle('hide');

const hideStartButton = () => 
  document.getElementById('start').classList.toggle('hide');

document.getElementById('start').addEventListener('click', function() {
  hideWelcomeScreen();
  hideStartButton();
  window.requestAnimationFrame(gameLoop);
});

document.getElementById('howToPlay').addEventListener('click', function() {
  hideWelcomeScreen();
});

document.getElementById('reset').addEventListener('click', function() {
  resetGame();
});

const resetGame = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  game.blocks[0].x = 26;
  game.blocks[1].x = 500;
  game.blocks[0].y = 270;
  game.blocks[1].y = 270;
  game.blocks[0].dx = 1;
  game.blocks[1].dx = -1;
  game.blocks[0].dy = 0;
  game.blocks[1].dy = 0;
  game.block;
};

function gameLoop () {

  if (game.endGame()) {
    alert('Game Over');
    // create a dropdown/popup that appears, 
    // one player loses a life
    //  restarts animation loop on click

  } else {
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    game.animate();
  }
  window.requestAnimationFrame(gameLoop);
}


document.addEventListener('keydown', handleKeyPress);

function handleKeyPress(e) {
  game.handleKeyPress(e);
}

// document.addEventListener('keyup', function(event){
//   if(event.keyCode === 80){
//     game.togglePause();
//   }
// })
