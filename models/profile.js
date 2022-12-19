const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const driverSchema = require('./driverSchema');

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

profileSchema.statics.getFavDriverList = function(user) {
  return this.find({user: user}).favDrivers;
}

// Instance method for adding a favorite driver to profile page
profileSchema.methods.addFavorite = async function (driverId) {
  // 'this' keyword is bound to the profile
  const currProfile = this;
  // Check if the driver already exists in favorites
  const driver = currProfile.favDrivers.find(driver => driver === driverId);
  if (driver) {
    // It already exists
    console.log('in list');
  } else {
    // Get the driver
    // Note how the mongoose.model method behaves as a getter when passed one arg vs. two
    const Driver = mongoose.model('Driver');
    const getDriver = await Driver.findById(driverId);
    currProfile.favDrivers.push(getDriver._id);
  }
  // return the save() method's promise
  return currProfile.save();
};


module.exports = mongoose.model('Profile', profileSchema);