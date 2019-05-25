const cloudinary = require('cloudinary')
const cloudinaryStorage = require('multer-storage-cloudinary')
const multer = require('multer')

cloudinary.config({
  cloud_name: 'dinotudor',
  api_key: '364826398594494',
  api_secret: 'os4QWLPf4pTo5bQ86_abyqDjdGI'
})

const storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: 'demo',
  allowedFormats: ['jpg', 'png']
})

const parser = multer({ storage: storage })

module.exports = parser
