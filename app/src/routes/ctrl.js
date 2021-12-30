"use strict";

const Board = require("../models/Board");

const lookUp = {
  searchAllBoards: async (req, res) => {
    const board = new Board();
    const response = await board.findAllBoards();

    if (response.success) {
      return res.status(200).json(response);
    } else {
      res.status(500).json(response);
    }
  },

  searchForOneBoard: async (req, res) => {
    const findBoardNo = req.params.no;
    const board = new Board();
    const response = await board.findOneBoard(findBoardNo);

    if (response.success) {
      return res.status(200).json(response);
    } else {
      res.status(500).json(response);
    }
  },
};

const process = {
  createBoard: async (req, res) => {
    const newBoardInfo = req.body;
    const board = new Board();
    const response = await board.newBoard(newBoardInfo);

    if (response.success) {
      return res.status(201).json(response);
    } else {
      res.status(500).json(response);
    }
  },

  updateBoard: async (req, res) => {
    const updateBoardInfo = req.body;
    const board = new Board();
    const response = await board.editBoard(updateBoardInfo);

    if (response.success) {
      return res.status(201).json(response);
    } else {
      res.status(500).json(response);
    }
  },

  deleteBoard: async (req, res) => {
    const deleteBoardNo = req.params.no;
    const board = new Board();
    const response = await board.dropBoard(deleteBoardNo);

    if (response.success) {
      return res.status(201).json(response);
    } else {
      res.status(500).json(response);
    }
  },
};

module.exports = {
  lookUp,
  process,
};
