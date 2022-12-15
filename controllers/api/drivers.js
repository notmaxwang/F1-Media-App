const Driver = require('../../models/driver');

module.exports = {
  index,
  show
};

async function index(req, res) {
  const drivers = await Driver.find({}).sort('name').populate('team').exec();
  // re-sort based upon the sortOrder of the populated categories
  res.json(drivers);
}

async function show(req, res) {
  const driver = await Driver.findById(req.params.id);
  res.json(driver);
}