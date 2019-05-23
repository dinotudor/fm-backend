const mongoose = require('mongoose');
const User = require('./../models/user');
const Medial = require('./../models/media');

User.collection.drop();
Media.collection.drop();

mongoose.connect('mongodb://localhost/fm')

const user = [
  {
    username: 'user1',
    password: 'user1',
    email: 'user1@user.com',
  },
  {
    username: 'user2',
    password: 'user2',
    email: 'user2@user.com',
  },
  {
    username: 'user3',
    password: 'user3',
    email: 'user3@user.com',
  },
  {
    username: 'user4',
    password: 'user4',
    email: 'user4@user.com',
  },
  {
    username: 'user5',
    password: 'user5',
    email: 'user5@user.com',
  }
]

User.create(user, (err, result) => {
  if (err) console.log('ERROR', err);
  else {
    console.log('Created users collection', result)
    mongoose.connection.close();
  }
});
