const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const raceSchema = new Schema({
  season:'',
  round: '',
  url: '',
  raceName: '',
  date: '',
  Circuit:{},
  FirstPractice:{},
  SecondPractice:{},
  ThirdPractice:{},
  Qualifying:{},
});


module.exports = mongoose.model('Race', raceSchema);