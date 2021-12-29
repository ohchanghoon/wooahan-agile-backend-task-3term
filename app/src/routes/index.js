"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./ctrl");

router.get("/boards", ctrl.lookUp.searchAllBoards);
router.get("/board/:no", ctrl.lookUp.searchForOneBoard);

router.post("/board/submit", ctrl.process.createBoard);
router.put("/board/:no", ctrl.process.updateBoard);
router.delete("/board/:no", ctrl.process.deleteBoard);

module.exports = router;
