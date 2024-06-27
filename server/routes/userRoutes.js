const express = require('express');
const verifyToken = require('../middlewares/authMiddleware');
const { getProfile } = require('../controllers/userController'); // Perhatikan perubahan di sini

const router = express.Router();

// console.log(typeof verifyToken); // Harusnya 'function'
// console.log(typeof getProfile);  // Harusnya 'function'

router.get('/me', verifyToken, getProfile);

module.exports = router;