const User = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

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
  signup: (req, res) => {
    bcrypt.hash(req.body.password, 10, function(err, hash) {
      req.body.password = hash
      User.create(req.body)
      .then(user => {
        res.send(user)
      })
      .catch(err => {
        res.status(500).send({err: err})
      })
    })
  },
  login: (req, res) => {
    User.findOne({username: req.body.username})
    .then(user => {
      bcrypt.compare(req.body.password, user.password, function(err, result) {
        if(!err) {
          let payload = {
            id: user._id,
            username: user.username,
            fisrt_name: user.fisrt_name,
            last_name: user.last_name,
            email: user.email
          }
          jwt.sign(payload, process.env.SECRET_JWT,function(err, token) {
            res.send({accesstoken: token})
          })
        } else {
          res.status(401).send({message: 'username/password incorrect!!'})
        }  
      })
    })
    .catch(err => {
      res.status(401).send({err: err})
    })
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