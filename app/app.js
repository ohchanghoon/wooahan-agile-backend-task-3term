"use strict";

//모듈
const express = require("express");
const app = express();
const dotenv = require("dotenv");

dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const board = require("./src/routes/index");
// index.js와 연결
app.use("/api/", board);
//바로 위에서 연결 해 주었던 index.js에 있는 놈들을 가져다 쓸수 있게 함

module.exports = app;
