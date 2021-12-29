"use strict";

const mysql = require("../config/mysql");

class BoardStorage {
  static async findAllByBoards() {
    const query = `SELECT * FROM boards`;
    const allBoardsInfo = await mysql.query(query);

    return allBoardsInfo;
  }

  static async findOneByBoardNum(boardNo) {
    const query = `SELECT * FROM boards WHERE no = ?`;
    const oneBoardInfo = await mysql.query(query, [boardNo]);

    return oneBoardInfo[0];
  }

  static async createBoard(board) {
    const { no, writer, title, description, in_date } = board;
    const query = `INSERT INTO boards(no, writer, title, description, in_date) VALUES (?, ?, ?, ?, ?);`;
    const newBoard = mysql.query(query, [
      no,
      writer,
      title,
      description,
      in_date,
    ]);

    return newBoard;
  }

  static async updateBoard(boardInfo) {
    const { no, writer, title, description } = boardInfo;
    const query =
      "UPDATE boards SET writer=?, title=?, description=? WHERE no=?;";
    const editBoard = mysql.query(query, [writer, title, description, no]);

    return editBoard;
  }

  static async deleteBoard(boardNo) {
    const query = "DELETE FROM boards WHERE no = ?;";
    const deleteBoardNo = mysql.query(query, [boardNo]);

    return deleteBoardNo;
  }
}

module.exports = BoardStorage;
