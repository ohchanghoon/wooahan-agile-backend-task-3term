"use strict";

const BoardStorage = require("./BoardStorage");
const { response } = require("express");

class Board {
    constructor(body) {
        this.body = body;
    }
    async getAll() {
        const boards = await BoardStorage.findAllByBoards();
        boards.pop();
        return boards;
    }
    async getOne(no) {
        const boards = await BoardStorage.findOneByBoardNum(no);
        boards.pop();
        return boards;
    }
    async add(boardInfo) {
        const boards = await BoardStorage.createBoard(boardInfo);
        boards.pop();
        return boards;
    }
    async edit(no, newThings) {
        const boards = await BoardStorage.updateBoard(no, newThings);
        console.log(boards);
        boards.pop();
        return boards;
    }
    async delOne(no) {
        const boards = await BoardStorage.deleteBoard(no);
        boards.pop();
        return boards;
    }
}

module.exports = Board;
