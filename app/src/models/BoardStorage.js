"use strict";

const mysql = require("../config/mysql");

class BoardStorage {
  static async findAllByBoards() {
    const query = `SELECT * FROM boards;`;
    return await mysql.query(query);
  }

  static async findOneByBoardNum(no) {
    const query = `SELECT * FROM boards WHERE no = ?;`;
    return await db.query(query, [no]);
  }
  static async createBoard(createRowTable) {
    const { writer, title, description } = createRowTable;
    //객체의 키 값들을  writer, title, description로 저장하는 방법임
    const query = `INSERT INTO boards(writer,title, description) VALUES (?,?,?);`;

    return await mysql.query(query, [writer, title, description]);
  }

  static async updateBoard(updateRowTable) {
    const { no, writer, title, description } = updateRowTable;
    //update로 넘겨 줄때는 no받아와야함!!
    const query = ` UPDATE boards SET writer=?,title=?,description=? WHERE no=?;`;

    return await mysql.query(query, [writer, title, description, no]);
  }

  static async deleteBoard(no) {
    const query = `DELETE FROM boards WHERE no=? ;`;

    return await mysql.query(query, [no]);
  }
}

module.exports = BoardStorage;
