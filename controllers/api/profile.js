const Profile = require('../../models/profile');


module.exports = {
  create,
}

async function create(req, res) {
  await Profile.create(req.body);
}