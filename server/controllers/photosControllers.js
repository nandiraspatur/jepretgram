const Photo = require('../models/photoModel')
require('dotenv').config()
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

module.exports = {
  getAll: (req, res) => {
    Photo.find()
    .then(photos => {
      res.send(photos)
    })
    .catch(err => {
      res.status(500).send({err : err})
    })
  },
  create: (req, res) => {
    console.log(req.body)
    req.body.userId = req.userLogin.id
    if  (!req.body.imageUrl) {
      req.body.imageUrl = '../assets/img/sample.jpg'
    }
    Photo.create(req.body)
    .then(photo => {
      res.send(photo)
    })
    .catch(err => {
      res.status(500).send({err: err})
    })
  },
  update: (req, res) => {
    Photo.findByIdAndUpdate(req.params.id, {$set: req.body}, { new: true })
    .then(photoUpdated => {
      res.send(photoUpdated)
    })
    .catch(err => {
      res.status(500).send({err: err})
    })
  },
  remove: (req, res) => {
    User.findByIdAndRemove(req.params.id)
    .then(photoDeleted => {
      res.send({status: 'deleted', data: photoDeleted})
    })
    .catch(err => {
      res.status(500).send({err: err})
    })
  }
}