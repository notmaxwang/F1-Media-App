const Team = require('../../models/team');

module.exports = {
  index,
  show
};

async function index(req, res) {
  const teams = await Team.find({}).sort('name').populate('team').exec();
  // re-sort based upon the sortOrder of the populated categories
  res.json(teams);
}

async function show(req, res) {
  const team = await Team.find({name: req.params.name.toString().substring(1)});
  res.json(team);
}