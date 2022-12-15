const Schema = require('mongoose').Schema;

const driverSchema = new Schema({
  name: {type: String, required: true},
  age: {type: Number, required: true},
  nationality: {type: String, required: true},
  team: {type: Schema.Types.ObjectId, ref: 'Team'},
  profileUrl: {type: String, required: true},
});

module.exports = driverSchema;