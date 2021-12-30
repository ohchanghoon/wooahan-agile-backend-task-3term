"use strict";

const mysql = require("../config/mysql");

class BoardStorage {
    static async findAllByBoards() {
        try {
            const query = `SELECT * FROM boards;`;
            // console.log("1 :>> ", 1);
            const a = await mysql.query(query);
            return a;
        } catch (err) {
            // console.log(err);
        }
    }

    static async findOneByBoardNum(no) {
        const query = `SELECT * FROM boards WHERE no=?;`;
        return await mysql.query(query, [no]);
    }

    static async createBoard(boardInfo) {
        // console.log("boardInfo :>> ", boardInfo);
        const { writer, title, description } = boardInfo;
        const query = `INSERT INTO boards(writer,title,description) VALUES (?,?,?);`;
        return await mysql.query(query, [writer, title, description]);
    }

    static async updateBoard(no, newThings) {
        const { writer, title, description } = newThings;
        const query = `UPDATE boards SET writer=?, title=?, description=? WHERE no=?`;

        return await mysql.query(query, [writer, title, description, no]);
    }

    static async deleteBoard(no) {
        const query = `DELETE FROM boards WHERE no=?`;

        return await mysql.query(query, [no]);
    }
}

module.exports = BoardStorage;
