const db = require('../config/database');

const getAllReports = (callback) => {
  const query = 'SELECT * FROM report';
  db.query(query, callback);
};

module.exports = { getAllReports };
