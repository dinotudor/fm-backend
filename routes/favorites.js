const express = require('express');
const createError = require('http-errors');

const router = express.Router();

const User = require('../models/user');
//const Media = require('../models/media');

//MIDDLEWARE functions
const {isLoggedIn, isNotLoggedIn, validationLoggin,} = require('../helpers/middlewares');

//GET users favorite
router.get('/:userid', isLoggedIn(), (req, res, next) => {


})

//POST add users favorite
router.post('/', isLoggedIn(), (req, res, next) => {
  const { id } = req.body;
  const userId = req.session.currentUser;
  console.log('id', favorites);
  User.findByIdAndUpdate(userId, {$set: id}, {new: true})
    .then((user) => res.json(user))
})

module.exports = router;
