const express = require('express');
const createError = require('http-errors');
const mongoose = require('mongoose');

const router = express.Router();

const User = require('../models/user');
//const Media = require('../models/media');

//MIDDLEWARE functions
const {isLoggedIn, isNotLoggedIn, validationLoggin,} = require('../helpers/middlewares');


//  POST '/favorites'   add users favorite
router.post('/', isLoggedIn(), (req, res, next) => {
  const { userId, favoriteId } = req.body;

  let favId = mongoose.Types.ObjectId(favoriteId);

  User.findByIdAndUpdate(userId, { $push: { favorites: favId }} , {new: true})
  .then((user) => res.json(user))
  .catch((err) => res.status(400).send(err))
})

//GET users favorite
router.get('/:userId', isLoggedIn(),(req, res, next) => {
  const { userId } = req.params;

  User.findById(userId, 'favorites')
  .populate('favorites')
  .then((favorites) => res.json(favorites))
  .catch((err) => console.log(err))
})


module.exports = router;
