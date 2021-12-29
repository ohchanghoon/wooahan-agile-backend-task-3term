"use strict";

const Board = require("../models/Board");

const lookUp = {
  searchAllBoards: async (req, res) => {
    const board = new Board(req.body);
    const response = await board.findAllBoards();

    return res.json(response);
  },

  searchForOneBoard: async (req, res) => {
    const board = new Board(req.params.no);
    const response = await board.findOneBoard();

    return res.json(response);
  },
};

const process = {
  createBoard: async (req, res) => {
    const board = new Board(req.body);
    const response = await board.newBoard();

    return res.json(response);
  },

  updateBoard: async (req, res) => {
    const board = new Board(req.body);
    const response = await board.editBoard();

    return res.json(response);
  },

  deleteBoard: async (req, res) => {
    const board = new Board(req.params.no);
    const response = await board.dropBoard();

    return res.json(response);
  },
};

module.exports = {
  lookUp,
  process,
};
