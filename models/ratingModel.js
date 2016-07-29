var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var model = new Schema({
  idProduk: String,
  ratings: [{
    user: String,
    rate: Number,
    comment: String
  }]
})

var modelNestedRating = new Schema({
  user: String,
  rate: Number,
  comment: String
})

module.exports.main = mongoose.model('rating', model, 'rating');
module.exports.nestedRating = mongoose.model('model', modelNestedRating);