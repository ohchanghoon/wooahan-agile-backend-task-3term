"use strict";

const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
// module
// const bodyParser = require("body-parser");
const app = express();

// route
const board = require("./src/routes/board/index");

// app setting
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/board", board); //use >> middleware 등록

module.exports = app;
