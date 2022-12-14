const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const driver = require('./driver');

const profileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  favDrivers: [{type: Schema.Types.ObjectId, ref: 'Driver'}],
  // favRaces: [{type: Schema.Types.ObjectId, ref: 'Race'}],
  posts: [{type: Schema.Types.ObjectId, ref: 'Post'}],
}, {
  timestamps: true,
  toJSON: { virtuals: true }
});


module.exports = mongoose.model('Profile', profileSchema);