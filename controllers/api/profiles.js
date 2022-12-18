const Profile = require('../../models/profile');


module.exports = {
  create,
  getProfile,
  addFavorite,
}

async function addFavorite(req, res) {
  // const currList = await Profile.getFavDriverList(req.user);
  const currProfile = await Profile.findOne({user: req.user});
  await currProfile.addFavorite(req.params.driver);
  res.json(currProfile);
}

async function create(req, res) {
  const profile = await Profile.create(req.body);
  res.json(profile);
}

async function getProfile(req, res) {
  const currProfile = await Profile.findOne({user: req.user});
  res.json(currProfile);
}