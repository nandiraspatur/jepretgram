var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  username:  String,
  password: String,
  first_name:   String,
  last_name: String,
  email: String
});

const userModel = mongoose.model('User', userSchema)

module.exports = userModel