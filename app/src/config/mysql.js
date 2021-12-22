'use strict';

const mysql = require('mysql2/promise');

const db = mysql.createPool({
  host:,
  user:,
  password:,
  database:,
});

module.exports = db;
