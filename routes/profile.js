const express = require('express');
const createError = require('http-errors');

const router = express.Router();

const User = require('../models/user');
// const Media = require('../models/media');

const {isLoggedIn, isNotLoggedIn, validationLoggin,} = require('../helpers/middlewares');

//GET PROFILE
router.get('/', isLoggedIn(), (req, res, next) => {
  User.find({})
    .then((users) => res.json(users))
    .catch((err) => console.log(err))
})
module.exports = router;

//GET PROFILE/:id
// router.get('/:id', isLoggedIn(),(req, res, next) => {
//   User.findById({_id})
//     .then((user) => res.json(user))
// })
