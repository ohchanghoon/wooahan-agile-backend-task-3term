const express = require("express");
const router = express.Router();

const ctrl = require("./Board.ctrl");

router.get("/", ctrl.process.getBoard);
router.get("/:no", ctrl.process.getOneBoard);

router.post("/", ctrl.process.addBoard);

router.put("/:no", ctrl.process.editBoard);

router.delete("/:no", ctrl.process.delOneBoard);

module.exports = router;
