'use strict';

const mysql = require('');

class BoardStorage {
  static async findAllByBoards() {
    const query = ``;

    return await mysql.query(query, [], (err, result) => {
      if (err) throw err;
      return result;
    });
  }

  static async findOneByBoardNum() {
    const query = ``;

    return await mysql.query(query, [], (err, result) => {
      if (err) throw err;
      return result;
    });
  }

  static async createBoard() {
    const query = ``;

    return await mysql.query(query, [], (err, result) => {
      if (err) throw err;
      return result;
    });
  }

  static async updateBoard() {
    const query = ``;

    return await mysql.query(query, [], (err, result) => {
      if (err) throw err;
      return result;
    });
  }

  static async deleteBoard() {
    const query = ``;

    return await mysql.query(query, [], (err, result) => {
      if (err) throw err;
      return result;
    });
  }
}

module.exports = BoardStorage;
