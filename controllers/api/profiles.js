const Profile = require('../../models/profile');


module.exports = {
  create,
}

async function create(req, res) {
  const profile = await Profile.create(req.body);
  res.json(profile);
}