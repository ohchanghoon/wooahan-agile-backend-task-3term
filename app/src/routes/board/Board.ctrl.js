"use strict";

const Board = require("../../models/Board");

const process = {
    getBoard: async (req, res) => {
        const board = new Board();
        const response = await board.getAll();
        return res.json(response);
    },
    getOneBoard: async (req, res) => {
        const board = new Board(req.body);
        const response = await board.getOne(req.params.no);
        return res.json(response);
    },
    addBoard: async (req, res) => {
        const board = new Board(req.body);
        const response = await board.add(board.body);
        return res.json(response);
    },
    editBoard: async (req, res) => {
        const board = new Board(req.body);
        const response = await board.edit(req.params.no, board.body);
        return res.json(response);
    },
    delOneBoard: async (req, res) => {
        const board = new Board(req.body);
        const response = await board.delOne(req.params.no);
        return res.json(response);
    },
};

module.exports = {
    process,
};
