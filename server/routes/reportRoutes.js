const express = require('express');
const { getReport } = require('../controllers/reportController');
const verifyToken = require('../middlewares/authMiddleware');

const router = express.Router();

// console.log(typeof verifyToken); // Harusnya 'function'
// console.log(typeof getReport);  // Harusnya 'function'

router.get('/laporan', verifyToken, getReport);

module.exports = router;