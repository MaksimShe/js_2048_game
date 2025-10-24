'use strict';

import Game from '../modules/Game.class.js';
// Uncomment the next lines to use your game instance in the browser
// const Game = require('../modules/Game.class');
// const game = new Game();

// Write your code here

const button = document.querySelector('.start');

button.addEventListener('click', () => {
  const game = new Game([
    [2, 4, 4, 8],
    [8, 16, 32, 64],
    [64, 128, 128, 256],
    [512, 0, 1024, 2048],
  ]);

  game.start();
  game.render();
});
