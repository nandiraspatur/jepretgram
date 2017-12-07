const jwt = require('jsonwebtoken')
require('dotenv').config()

module.exports = {
  isLogin: (req, res, next) => {
    jwt.verify(req.headers.accesstoken, process.env.SECRET_JWT, function(err, decoded) {
      if(!err) {
        req.userLogin = decoded
        next()
      } else {
        res.status(401).send({status: 'Permission Denied!!'})
      }
    });
  }
}