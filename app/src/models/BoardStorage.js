"use strict";

const mysql = require("../config/mysql");

class BoardStorage {
  static async findAllByBoards() {
    const query = `SELECT * FROM boards;`;
    return await mysql.query(query);
  }

  static async findOneByBoardNum(userNum) {
    const query = `SELECT * FROM boards Where no = ?;`;
    const find = await mysql.query(query, [userNum]);
    return find[0];
  }

  static async createBoard(userInfo) {
    const query = `INSERT INTO boards(writer, title, description) VALUES(?, ?, ?);`;
    const create = await mysql.query(query, [
      userInfo.writer,
      userInfo.title,
      userInfo.description,
    ]);
    return create;
  }

  static async updateBoard(userInfo) {
    const query = `UPDATE boards SET title = ?, description = ? WHERE no = ?`;
    const update = await mysql.query(query, [
      userInfo.title,
      userInfo.description,
      userInfo.no,
    ]);
    return update;
  }

  static async deleteBoard(userNum) {
    const query = `DELETE FROM boards WHERE no = ?`;
    const del = await mysql.query(query, [userNum]);
    return del[0];
  }
}

module.exports = BoardStorage;
