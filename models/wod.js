const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const wodSchema = new Schema({
  name: String,
  movements: [String],
  difficulty: String,
  groupId: String
});

module.exports = mongoose.model('Wod', wodSchema);
