const express = require('express');
const createError = require('http-errors');
const parser = require('./../config/config');

const router = express.Router();

const User = require('../models/user');

//MIDDLEWARE helper functions
const {isLoggedIn, isNotLoggedIn, validationLoggin,} = require('../helpers/middlewares');

//GET PROFILES
router.get('/', isLoggedIn(), (req, res, next) => {
  User.find({})
    .then((users) => res.json(users))
    .catch((err) => console.log(err))
})

//GET  'profile/:id' get one user
router.get('/:id', isLoggedIn(),(req, res, next) => {
  const { id } = req.params;
  console.log(id)

  User.findById(id)
  .then((user) => res.json(user))
  .catch((err) => console.log(err))
})

//PUT '/edit'
router.put('/edit', isLoggedIn(), (req, res, next) => {
  const { username, email, description, instruments, genres} = req.body;
  console.log('req.body', req.body)
  console.log(req.session.currentUser);
  User.findByIdAndUpdate(req.session.currentUser, {$set: req.body}, {new: true})
   .then((user) => res.json(user))
})

//POST Upload Image '/picture/
router.post('/edit', parser.single('photo'), (req, res, next) => {
  console.log('file upload');
  if (!req.file) {
    next(new Error('No file uploaded!'));
  };
  const image = req.file.secure_url;
  res.json(image).status(200);
});



module.exports = router;
