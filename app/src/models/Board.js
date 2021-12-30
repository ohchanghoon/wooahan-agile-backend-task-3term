"use strict";

const BoardStorage = require("./BoardStorage");
class Board {
  constructor(body) {
    this.body = body;
    //constructor로 받은 body를 this.body로 User의 body로 만들어줌
  }
  async select() {
    try {
      const response = await BoardStorage.findAllByBoards();
      return response[0];
    } catch (err) {
      return { success: false, msg: err };
    }
  }
  async selectDetail(req) {
    const no = req.params.no;
    try {
      const response = await BoardStorage.findOneByBoardNum(no);
      return response[0][0];
    } catch (err) {
      return { success: false, msg: err };
    }
  }
  async createTable() {
    const createRowTable = this.body;
    // 이는 post로 온 body를 createBoard로 매개변수화 하여 넘겨주려고 만든 상수임
    try {
      const response = await BoardStorage.createBoard(createRowTable);
      return response;
    } catch (err) {
      return { success: false, msg: err };
    }
  }
  async updateTable() {
    const updateRowTable = this.body;
    // 이는 post로 온 body를 createBoard로 매개변수화 하여 넘겨주려고 만든 상수임
    try {
      const response = await BoardStorage.updateBoard(updateRowTable);
      return response;
    } catch (err) {
      return { success: false, msg: err };
    }
  }
  async deleteTable(req) {
    const no = req.params.no;
    try {
      const response = await BoardStorage.deleteBoard(no);
      return response;
    } catch (err) {
      return { success: false, msg: err };
    }
  }
}

module.exports = Board;
