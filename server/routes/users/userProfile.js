
const userProfile = (req, res) => {
  let user = req.user;
  res.send(user);
};

module.exports = userProfile;
