const mongoose = require('mongoose');
require('./team');
const driverSchema = require('./driverSchema');

module.exports = mongoose.model('Driver', driverSchema);