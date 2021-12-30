"use strict";

const Boards = require("../../models/Boards");

const process = {
  all: async (req, res) => {
    const board = new Boards(req);
    const boards = await board.boardAll(req);
    return res.json(boards);
  },

  find: async (req, res) => {
    const board = new Boards(req);
    const oneBoard = await board.boardFind(req);
    return res.json(oneBoard);
  },

  create: async (req, res) => {
    const board = new Boards(req.body);
    const createBoard = await board.boardCreate();
    return res.json(createBoard);
  },

  upDate: async (req, res) => {
    const board = new Boards(req.body);
    const updateBoard = await board.boardUpdate();
    return res.json(updateBoard);
  },

  delete: async (req, res) => {
    const board = new Boards(req);
    const deleteBoard = await board.boardDelete(req.params.no);
    return res.json(deleteBoard);
  },
};

module.exports = { process };
