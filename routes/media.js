const express = require('express');
const createError = require('http-errors');

const router = express.Router();

const User = require('../models/user');
const Media = require('../models/media');


//MIDDLEWARE helper functions
const {isLoggedIn, isNotLoggedIn, validationLoggin,} = require('../helpers/middlewares');

//GET  '/media' get all users media
router.get('/', isLoggedIn(),(req, res, next) => {

  const { _id} = req.session.currentUser;

  User.findById(_id).populate('media')
  .then((user) => res.json(user))
  .catch((err) => console.log(err))
})

// TEST MEDIA POPULATE USER

//POST '/media' add new media object to user
router.post('/', isLoggedIn(), (req, res, next) => {

  const { type, url, title, description, year} = req.body;
  console.log(req.session.currentUser);

  Media.create({
    type,
    url,
    title,
    description,
    year,
    owner: req.session.currentUser._id
  }, {
    new: true
  })
    .then((newMedia) => {
      console.log('NEW MEDIA',newMedia)
      User.findByIdAndUpdate(req.session.currentUser._id, { $push: { media: newMedia[0]._id } }, { new: true })
        .then((data) => {
          console.log('DATA', data)
          res
            .status(201)
            .json(data);
        })
        .catch((err) => {
          res
            .status(500)
            .json(err)
        })
    })
  })


module.exports = router;
