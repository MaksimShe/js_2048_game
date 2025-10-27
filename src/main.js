/* eslint-disable no-console */
/* eslint-disable no-shadow */
'use strict';

import Game, { GAME_STATUS } from './modules/Game.class.js';

const button = document.querySelector('.game-control');
const infoBtn = document.querySelector('.game-description');
const arrows = document.querySelectorAll('.arrow');

// const game = new Game();
const game = new Game([
  [2, 4, 4, 8],
  [0, 16, 3, 64],
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

arrows.forEach((arrow) => {
  arrow.addEventListener('click', () => {
    console.log('Arrow clicked');

    if (game.gameStatus === GAME_STATUS.playing) {
      switch (arrow.classList[0]) {
        case 'up-arrow':
          console.log('up', arrow);
          console.log(arrow.classList[0]);
          game.moveUp();
          break;
        case 'down-arrow':
          console.log('down', arrow);
          game.moveDown();
          break;
        case 'left-arrow':
          console.log('left', arrow);
          game.moveLeft();
          break;
        case 'right-arrow':
          console.log('right', arrow);
          game.moveRight();
          break;
      }
    }
  });
});

infoBtn.addEventListener('click', () => {
  const infoText = `
    Use arrow keys or moving buttons to move the tiles.
    When two tiles with the same number touch, they merge into one!
    Reach 2048 to win!

    Developer: Maksym Shevcuk
  `;

  alert(infoText);
});
