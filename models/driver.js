const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const driverSchema = new Schema({
  name: {type: String, required: true},
  age: {type: Number, required: true},
  nationality: {type: String, required: true},
});

module.exports = mongoose.model('Driver', driverSchema);