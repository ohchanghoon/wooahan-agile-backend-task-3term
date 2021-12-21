'use strict';

const mysql = require('');

class BoardStorage {
  static async findAllByBoards() {
    const query = ``;

    await mysql.query(query, [], (err, result) => {
      if (err) throw err;
      return result;
    });
  }

  static async findOneByBoardNum() {
    const query = ``;

    await mysql.query(query, [], (err, result) => {
      if (err) throw err;
      return result;
    });
  }

  static async createBoard() {
    const query = ``;

    await mysql.query(query, [], (err, result) => {
      if (err) throw err;
      return result;
    });
  }

  static async updateBoard() {
    const query = ``;

    await mysql.query(query, [], (err, result) => {
      if (err) throw err;
      return result;
    });
  }

  static async deleteBoard() {
    const query = ``;

    await mysql.query(query, [], (err, result) => {
      if (err) throw err;
      return result;
    });
  }
}

module.exports = BoardStorage;
