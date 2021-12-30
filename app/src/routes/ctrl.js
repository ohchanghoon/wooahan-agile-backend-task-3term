"use strict";
// const UserStorage = require("../../models/UserStorage");
const Board = require("../models/Board");

const process = {
  selectAll: async (req, res) => {
    const board = new Board();
    const response = await board.select();
    return res.json(response);
  },
  selectDetail: async (req, res) => {
    const board = new Board(req);
    //여기서 board는 Postman에서 body에 실어 보내는 no값 형태가 Board {body:13} (여기서 13은 주소 맨뒤에 넣어준 숫자임) 형태로 받아와짐
    const response = await board.selectDetail(req);
    return res.json(response);
  },
  create: async (req, res) => {
    const board = new Board(req.body);
    console.log(board);
    const response = await board.createTable();
    return res.json(response);
  },
  update: async (req, res) => {
    const board = new Board(req.body);
    const response = await board.updateTable();
    return res.json(response);
  },
  delete: async (req, res) => {
    const board = new Board(req);
    const response = await board.deleteTable(req);
    return res.json(response);
  },
};

module.exports = {
  process,
};
