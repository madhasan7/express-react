const { getAllReports } = require('../models/reportModel');

const getReport = (req, res) => {
  const userRole = req.user.role; // Mengambil peran pengguna dari token JWT

  // Hanya admin yang bisa mengakses semua report
  if (userRole !== 'admin') {
    return res.status(403).json({ error: 'Access denied' });
  }

  // Query untuk mengambil semua report dari database
  getAllReports((err, results) => {
    if (err) {
      console.error('Error fetching report:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }

    res.json(results); // Mengirimkan hasil query sebagai response
  });
};

module.exports = { getReport };
