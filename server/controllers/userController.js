const getProfile = (req, res) => {
  res.send({ user: req.user });
};

module.exports = { getProfile };