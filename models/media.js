const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const mediaSchema = new Schema ({
  type: String, enum:['song', 'video'],
  url: String,
  title: String,
  description: String,
  year: Number,
  month: Number,
  owner:  [{
    type: ObjectId,
    ref: 'User'
}]
});

const Media = mongoose.model('Media' , mediaSchema);

module.exports = Media;
