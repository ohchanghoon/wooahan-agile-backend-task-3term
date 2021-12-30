const express = require("express");
const dotenv = require("dotenv");
const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const board = require("./src/routes/home");
app.use("/", board);

module.exports = app;
