"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./ctrl");

router.get("/", ctrl.lookUp.searchAllBoards);
router.get("/:findBoardNo", ctrl.lookUp.searchForOneBoard);

router.post("/newBoard", ctrl.process.createBoard);
router.put("/updateBoard", ctrl.process.updateBoard);
router.delete("/:delBoardNo", ctrl.process.deleteBoard);

module.exports = router;
