"use strict";

const BoardStorage = require("./BoardStorage");

class Board {
  constructor(req) {
    this.params = req.params;
    this.body = req.body;
  }
  async boardAll() {
    return await BoardStorage.findAllByBoards();
  }

  async boardFind() {
    return await BoardStorage.findOneByBoardNum(this.params.no);
  }

  async boardCreate() {
    const data = this.body;
    const response = await BoardStorage.createBoard(data);
    return response;
  }

  async boardUpdate() {
    const data = this.body;
    const response = await BoardStorage.updateBoard(data);
    return response;
  }

  async boardDelete() {
    return await BoardStorage.deleteBoard(this.params.no);
  }
}

module.exports = Board;
