"use strict";

const express = require("express");
const router = express.Router();
const ctrl = require("./ctrl");

router.get("/post", ctrl.process.all);
router.get("/post/:no", ctrl.process.find);
router.post("/post", ctrl.process.create);
router.put("/post/", ctrl.process.upDate);
router.delete("/post/:no", ctrl.process.delete);

module.exports = router;
