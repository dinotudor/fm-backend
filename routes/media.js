const express = require('express');
const createError = require('http-errors');

const router = express.Router();

const User = require('../models/user');
const Media = require('../models/media');


//MIDDLEWARE helper functions
const {isLoggedIn, isNotLoggedIn, validationLoggin,} = require('../helpers/middlewares');

//GET  '/media' get all users media
router.get('/', isLoggedIn(),(req, res, next) => {
  const { id } = req.params;
  console.log(id)

  Media.findById(id)
  .then((user) => res.json(user))
  .catch((err) => console.log(err))
})

//POST '/media' add new media object to user
router.post('/', isLoggedIn(), (req, res, next) => {

  const { type, url, title, description, year} = req.body;
  console.log(req.session.currentUser);

  Media.create({type, url, title, description, year, owner: req.session.currentUser._id})
   .then((media) => res.json(media))
   .catch((err) => console.log(err))
})


module.exports = router;
