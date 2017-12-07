var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var photoSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
  caption: String,
  imageUrl: String,
  likes: [{ type: Schema.Types.ObjectId, ref: 'User' }]
});

const photoModel = mongoose.model('Photo', photoSchema)

module.exports = photoModel