/* eslint-disable function-paren-newline */
/* eslint-disable prettier/prettier */
/* eslint-disable max-len */
'use strict';

export const GAME_STATUS = {
  idle: 'idle',
  playing: 'playing',
  lose: 'lose',
  win: 'win',
};

const TABLE_SIZE= 4;

export default class Game {
  gameStatus = GAME_STATUS.idle;
  gameTable = [[]];
  score = 0;

  /**
   * @param {number[][]} initialState
   * @default
   * [[0, 0, 0, 0],
   *  [0, 0, 0, 0],
   *  [0, 0, 0, 0],
   *  [0, 0, 0, 0]]
   */
  constructor(initialState) {
    if (initialState) {
      this.gameTable = initialState.map((row) => [...row]);
    } else {
      this.gameTable = Array.from({ length: TABLE_SIZE }, () =>
        Array(TABLE_SIZE).fill(0),
      );
    }
  }

  createCell() {
    const emptyCels = [];

    for (let i = 0; i < TABLE_SIZE; i++) {
      for (let j = 0; j < TABLE_SIZE; j++) {
        if (this.gameTable[i][j] === 0) {
          emptyCels.push({ row: i, cell: j });
        } else if (this.gameTable[i][j] === 2048) {
          this.gameWin();

          return;
        }
      }
    }

    if (emptyCels.length === 0) {
      this.gameLose();

      return;
    }

    const randomNum = Math.floor(Math.random() * emptyCels.length);

    this.gameTable[emptyCels[randomNum].row][emptyCels[randomNum].cell] = 2;
    this.render();
  }

  moveLeft() {
    this.createCell();
  }
  moveRight() {
    this.createCell();
  }
  moveUp() {
    this.createCell();
  }
  moveDown() {
    this.createCell();
  }

  /**
   * @returns {number}
   */
  getScore() {
    return this.score;
  }

  addScore(num) {
    this.score += num;
  }

  /**
   * @returns {number[][]}
   */
  getState() {
    return this.gameTable;
  }

  /**
   * @returns {string} One of: 'idle', 'playing', 'win', 'lose'
   */
  getStatus() {
    return this.gameStatus;
  }

  start() {
    this.gameStatus = GAME_STATUS.playing;

    const message = document.querySelector('.message-start');

    message.classList.add('hidden') ;
  }

  restart() {}

  render() {
    const rows = document.querySelectorAll('.field-row');

    this.gameTable.forEach((rowGT, i) => {
      const cells = rows[i].querySelectorAll('.field-cell');

      rowGT.forEach((value, j) => {
        cells[j].className = `field-cell`;
        cells[j].textContent = '';

        if (value !== 0) {
          cells[j].textContent = value;
          cells[j].className = `field-cell field-cell--${value}`;
        }
      });
    });
  }

  gameLose() {
    this.gameStatus = GAME_STATUS.lose;

    const message = document.querySelector('.message-lose');

    message.classList.remove('hidden');
  }

  gameWin() {
    this.gameStatus = GAME_STATUS.win;

    const message = document.querySelector('.message-win');

    message.classList.remove('hidden');
  }
}

// module.exports = Game;
