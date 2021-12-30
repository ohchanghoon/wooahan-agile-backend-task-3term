"use strict";

const mysql = require("../config/mysql");

class BoardStorage {
  static async findAllByBoards() {
    try {
      const query = `SELECT * FROM boards;`;
      const allBoardsInfo = await mysql.query(query);

      return { success: true, boards: allBoardsInfo };
    } catch (err) {
      throw { err: "Server Error", code: err.code };
    }
  }

  static async findOneByBoardNum(boardNo) {
    try {
      const query = `SELECT * FROM boards WHERE no = ?`;
      const oneBoardInfo = await mysql.query(query, [boardNo]);

      if (oneBoardInfo[0].length) {
        return { success: true, board: oneBoardInfo[0] };
      } else {
        return { success: false };
      }
    } catch (err) {
      throw { err: "Server Error", code: err.code };
    }
  }

  static async createBoard(boardInfo) {
    try {
      const { writer, title, description } = boardInfo;
      const query = `INSERT INTO boards(writer, title, description) VALUES (?, ?, ?);`;
      const newBoard = await mysql.query(query, [writer, title, description]);

      if (newBoard[0].affectedRows) {
        return { success: true, newBoardNo: newBoard[0].insertId };
      } else {
        return { success: false };
      }
    } catch (err) {
      throw { err: "Server Error", code: err.code };
    }
  }

  static async updateBoard(boardInfo) {
    try {
      const { no, writer, title, description } = boardInfo;
      const query =
        "UPDATE boards SET writer=?, title=?, description=? WHERE no=?;";
      const editBoard = await mysql.query(query, [
        writer,
        title,
        description,
        no,
      ]);

      if (editBoard[0].affectedRows) {
        return { success: true, updateBoardNo: no };
      } else {
        return { success: false };
      }
    } catch (err) {
      throw { err: "Server Error", code: err.code };
    }
  }

  static async deleteBoard(boardNo) {
    try {
      const query = "DELETE FROM boards WHERE no = ;";
      const result = await mysql.query(query, [boardNo]);

      if (result[0].affectedRows) {
        return { success: true };
      } else {
        return { success: false };
      }
    } catch (err) {
      throw { err: "Server Error", code: err.code };
    }
  }
}

module.exports = BoardStorage;
