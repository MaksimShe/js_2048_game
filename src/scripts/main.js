/* eslint-disable no-shadow */
'use strict';

import Game, { GAME_STATUS } from '../modules/Game.class.js';

const button = document.querySelector('.button');

// const game = new Game();
const game = new Game([
  [2, 4, 4, 8],
  [0, 16, 0, 64],
  [64, 128, 0, 256],
  [512, 0, 1024, 1024],
]);

button.addEventListener('click', () => {
  if (button.classList.contains('start')) {
    game.start();
    game.render();
  } else if (button.classList.contains('restart')) {
    game.restart();
    game.render();
  }
});

window.addEventListener('keydown', (event) => {
  if (game.gameStatus === GAME_STATUS.playing) {
    switch (event.key) {
      case 'ArrowUp':
        game.moveUp();
        break;
      case 'ArrowDown':
        game.moveDown();
        break;
      case 'ArrowLeft':
        game.moveLeft();
        break;
      case 'ArrowRight':
        game.moveRight();
        break;
    }
  }
});
