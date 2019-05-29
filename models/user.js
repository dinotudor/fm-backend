const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const userSchema = new Schema({
  username: String,
  description: String,
  instruments: String,
  genres: String,
  city: String,
  phone: String,
  facebook: String,
  email: String,
  image: String,
  password: String,
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

/* username, description, instruments, genres, city, facebook, phone, email, image */
