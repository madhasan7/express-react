const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { createUser, findUserByUsername } = require('../models/userModel');

exports.register = (req, res) => {
  const { username, password, role } = req.body;
  const userRole = req.user.role; // Mengambil peran pengguna dari token JWT

  // Hanya admin yang bisa registrasi
  if (userRole !== 'admin') {
    return res.status(403).json({ error: 'Access denied' });
  }
  
  createUser(username, password, role, (err, result) => {
    if (err) throw err;
    res.send({ message: 'User registered!' });
  });
};

exports.login = (req, res) => {
  const { username, password } = req.body;
  findUserByUsername(username, (err, results) => {
    if (err) throw err;

    if (results.length === 0) {
      return res.status(404).send({ message: 'User not found' });
    }

    const user = results[0];
    const passwordIsValid = bcrypt.compareSync(password, user.password);

    if (!passwordIsValid) {
      return res.status(401).send({ token: null, message: 'Invalid Password' });
    }

    const token = jwt.sign({ id: user.id, username: user.username, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.send({ token, user }); // Kembalikan token dan informasi pengguna
  });
};

exports.logout = (req, res) => {
  res.send({ token: null });
};
