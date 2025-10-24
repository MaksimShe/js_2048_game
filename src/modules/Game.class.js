'use strict';

const GAME_STATUS = {
  idle: 'idle',
  playing: 'playing',
  lose: 'lose',
  win: 'win',
};

class Game {
  gameStatus = GAME_STATUS.idle;
  gameTable = [[]];

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
      this.gameTable = Array.from({ length: 4 }, () => Array(4).fill(0));
    }
  }

  moveLeft() {}
  moveRight() {}
  moveUp() {}
  moveDown() {}

  /**
   * @returns {number}
   */
  getScore() {}

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
  }

  restart() {}

  render() {
    const rows = document.querySelectorAll('.field-row');
    console.log(rows);

    this.gameTable.forEach((rowGT, i) => {
      const cells = rows[i].querySelectorAll('.field-cell');
      console.log(cells);

      rowGT.forEach((value, j) => {
        if (value !== 0) {
          cells[j].textContent = value;
          cells[j].className += ` field-cell--${value}`;
        }
      });
    });
  }
}

module.exports = Game;
