const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mediaSchema = new Schema ({
  type: String, enum:['song', 'video'],
  url: String,
  title: String,
  description: String,
  year: Number,
  month: Number,
  userID: userID
});

const Media = mongoose.model('Model' , mediaSchema);

module.exports = Media;
