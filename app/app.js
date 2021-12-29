const express = require("express");
const dotenv = require("dotenv");
const app = express();

dotenv.config();

app.get("/", (req, res) => {
  res.send("루트");
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const board = require("./src/routes/index");

app.use("/api/", board);

module.exports = app;
