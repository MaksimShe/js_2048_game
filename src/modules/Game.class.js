/* eslint-disable prettier/prettier */
/* eslint-disable no-console */
/* eslint-disable max-len */
'use strict';

export const GAME_STATUS = {
  idle: 'idle',
  playing: 'playing',
  lose: 'lose',
  win: 'win',
};

const TABLE_SIZE = 4;

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
    let initialStateValid = true;

    if (initialState) {
      for (const row of initialState) {
        row.map((num) => {
          if (this.isPowerOfTwo(num) === false) {
            console.error(
              'All numbers in initialState must be power of two or zero',
            );
            initialStateValid = false;
          }
        });
      }

      if (initialStateValid) {
        this.gameTable = initialState.map((row) => [...row]);
      } else {
        this.createEmptyTable();
      }
    } else {
      this.createEmptyTable();
    }
  }

  createCell() {
    this.updateScore();

    const emptyCels = [];

    for (let i = 0; i < TABLE_SIZE; i++) {
      for (let j = 0; j < TABLE_SIZE; j++) {
        if (this.gameTable[i][j] === 0) {
          emptyCels.push({ row: i, cell: j });
        } else if (this.gameTable[i][j] === 2048) {
          this.render();
          this.addScore(2048);
          this.gameWin();

          return;
        }
      }
    }

    if (emptyCels.length === 0) {
      if (this.isLose()) {
        this.gameLose();
      }

      return;
    }

    let numberToAdd = 2;

    const randomNum = Math.floor(Math.random() * emptyCels.length);
    const randomValue = Math.floor(Math.random() * 10);

    if (randomValue === 9) {// created cells with num 4 (10% chance of this event);
      numberToAdd = 4;
    }

    this.gameTable[emptyCels[randomNum].row][emptyCels[randomNum].cell] =
      numberToAdd;
    this.render();
  }

  moveLeft() {
    for (let i = 0; i < TABLE_SIZE; i++) {
      const row = this.gameTable[i].filter((n) => n !== 0);

      for (let k = 0; k < row.length - 1; k++) {
        if (row[k] === row[k + 1]) {
          row[k] *= 2;
          this.addScore(row[k]);
          row.splice(k + 1, 1);
        }
      }

      while (row.length < TABLE_SIZE) {
        row.push(0);
      }

      this.gameTable[i] = row;
    }
    this.createCell();
  }

  moveRight() {
    for (let i = 0; i < TABLE_SIZE; i++) {
      const row = this.gameTable[i].filter((n) => n !== 0);

      for (let k = row.length - 1; k > 0; k--) {
        if (row[k] === row[k - 1]) {
          row[k] *= 2;
          this.addScore(row[k]);
          row.splice(k - 1, 1);
        }
      }

      while (row.length < TABLE_SIZE) {
        row.unshift(0);
      }

      this.gameTable[i] = row;
    }
    this.createCell();
  }

  moveUp() {
    for (let i = 0; i < TABLE_SIZE; i++) {
      const col = [];

      for (let r = 0; r < TABLE_SIZE; r++) {
        if (this.gameTable[r][i] !== 0) {
          col.push(this.gameTable[r][i]);
        }
      }

      for (let k = 0; k < col.length - 1; k++) {
        if (col[k] === col[k + 1]) {
          col[k] *= 2;
          this.addScore(col[k]);
          col.splice(k + 1, 1);
        }
      }

      while (col.length < TABLE_SIZE) {
        col.push(0);
      }

      for (let r = 0; r < TABLE_SIZE; r++) {
        this.gameTable[r][i] = col[r];
      }
    }

    this.createCell();
  }

  moveDown() {
    for (let i = 0; i < TABLE_SIZE; i++) {
      const col = [];

      for (let r = 0; r < TABLE_SIZE; r++) {
        if (this.gameTable[r][i] !== 0) {
          col.push(this.gameTable[r][i]);
        }
      }

      for (let k = col.length - 1; k > 0; k--) {
        if (col[k] === col[k - 1]) {
          col[k] *= 2;
          this.addScore(col[k]);
          col.splice(k - 1, 1);
        }
      }

      while (col.length < TABLE_SIZE) {
        col.unshift(0);
      }

      for (let r = 0; r < TABLE_SIZE; r++) {
        this.gameTable[r][i] = col[r];
      }
    }
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

  updateScore() {
    const scoreElement = document.querySelector('.game-score');

    if (!scoreElement) {
      return;
    }
    scoreElement.textContent = this.score;
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
    this.score = 0;

    const button = document.querySelector('.button');

    button.textContent = 'Restart';
    button.classList.add('restart');
    button.classList.remove('start');

    const messageStart = document.querySelector('.message-start');
    const messageWin = document.querySelector('.message-win');
    const messageLose = document.querySelector('.message-lose');

    if (messageStart) {
      messageStart.classList.add('hidden');
    }

    if (messageWin) {
      messageWin.classList.add('hidden');
    }

    if (messageLose) {
      messageLose.classList.add('hidden');
    }

    this.createCell();
    this.updateScore();
  }

  restart() {
    this.gameTable = Array.from({ length: TABLE_SIZE }, () =>
      Array(TABLE_SIZE).fill(0));
    this.score = 0;
    this.gameStatus = GAME_STATUS.playing;

    const messageWin = document.querySelector('.message-win');
    const messageLose = document.querySelector('.message-lose');

    if (messageWin) {
      messageWin.classList.add('hidden');
    }

    if (messageLose) {
      messageLose.classList.add('hidden');
    }

    this.updateScore();
    this.createCell();
  }

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
    this.addTransitionEffect();
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

  isLose() {
    // check ability to make not lose move
    for (let i = 1; i < TABLE_SIZE - 1; i++) {
      for (let j = 0; j < TABLE_SIZE; j++) {
        if (
          this.gameTable[i][j] === this.gameTable[i - 1][j] ||
          this.gameTable[i][j] === this.gameTable[i + 1][j]
        ) {
          return false;
        }
      }
    }

    for (let i = 0; i < TABLE_SIZE; i++) {
      for (let j = 1; j < TABLE_SIZE - 1; j++) {
        if (
          this.gameTable[i][j] === this.gameTable[i][j - 1] ||
          this.gameTable[i][j] === this.gameTable[i][j + 1]
        ) {
          return false;
        }
      }
    }

    return true;
  }

  addTransitionEffect() {
    const rows = document.querySelectorAll('.field-row');

    this.gameTable.forEach((rowGT, i) => {
      const cells = rows[i].querySelectorAll('.field-cell');

      rowGT.forEach((_, j) => {
        cells[j].classList.add('transition-effect');
      });
    });
  }

  isPowerOfTwo(n) {
    return n > 0 && (n & (n - 1)) === 0 || n === 0;
  }

  createEmptyTable() {
    this.gameTable = Array.from({ length: TABLE_SIZE }, () =>
      Array(TABLE_SIZE).fill(0));
  }
}
