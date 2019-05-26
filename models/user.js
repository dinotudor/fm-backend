const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const userSchema = new Schema({
  username: String,
  password: String,
  email: String,
  description: String,
  image: String,
  instruments: String,
  genres: String,
  media: [{ type: ObjectId, ref: 'Media'}],
  favorites: [{ type: ObjectId, ref: 'User'}]
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
