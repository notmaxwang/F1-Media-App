const Profile = require('../../models/profile');


module.exports = {
  create,
  getProfile,
}

async function create(req, res) {
  const profile = await Profile.create(req.body);
  res.json(profile);
}

async function getProfile(req, res) {
  const currProfile = await Profile.findOne({user: req.user});
  res.json(currProfile);
}