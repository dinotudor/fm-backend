const express = require('express');
const createError = require('http-errors');

const router = express.Router();

const User = require('../models/user');
//const Media = require('../models/media');

//MIDDLEWARE functions
const {isLoggedIn, isNotLoggedIn, validationLoggin,} = require('../helpers/middlewares');

//GET PROFILE
router.get('/', isLoggedIn(), (req, res, next) => {
  User.find({})
    .then((users) => res.json(users))
    .catch((err) => console.log(err))
})

//GET PROFILE/:id
router.get('/:id', isLoggedIn(),(req, res, next) => {
  const { id } = req.params;
  console.log(id)

  User.findById(id)
  .then((user) => res.json(user))
  .catch((err) => console.log(err))
})

router.put('/edit', isLoggedIn(), (req, res, next) => {
  const { username, email, description, instruments, genres} = req.body;
  console.log(req.session.currentUser);
  User.findByIdAndUpdate(req.session.currentUser, {$set: req.body}, {new: true})
   .then((user) => res.json(user))
})

module.exports = router;
