const User = require('../models/userModel')
require('dotenv').config()
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

module.exports = {
  getAll: (req, res) => {
    User.find()
    .then(users => {
      res.send(users)
    })
    .catch(err => {
      res.status(500).send({err : err})
    })
  },
  upload: (req, res) => {
    console.log(req.file)
  },
  update: (req, res) => {
    User.findByIdAndUpdate(req.params.id, {$set: req.body}, { new: true })
    .then(userUpdated => {
      res.send(userUpdated)
    })
    .catch(err => {
      res.status(500).send({err: err})
    })
  },
  remove: (req, res) => {
    User.findByIdAndRemove(req.params.id)
    .then(userDeleted => {
      res.send({status: 'deleted', data: userDeleted})
    })
    .catch(err => {
      res.status(500).send({err: err})
    })
  }
}