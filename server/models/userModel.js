const db = require('../config/database');
const bcrypt = require('bcryptjs');

const createUser = (username, password, role, callback) => {
  const hashedPassword = bcrypt.hashSync(password, 8);
  const sql = 'INSERT INTO users (username, password, role) VALUES (?, ?, ?)';
  db.query(sql, [username, hashedPassword, role], callback);
};

const findUserByUsername = (username, callback) => {
  const sql = 'SELECT * FROM users WHERE username = ?';
  db.query(sql, [username], callback);
};

module.exports = { createUser, findUserByUsername };
