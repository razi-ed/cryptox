
const userProfile = (req, res) => {
  let user = req.user;
  res.json({
    name: user.name,
    email: user.email,
  });
};

module.exports = userProfile;
