const express = require('express');
const { register, login, logout } = require('../controllers/authController');
const verifyToken = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/register', verifyToken, register);
router.post('/login', login);
router.post('/logout', logout);

module.exports = router;
