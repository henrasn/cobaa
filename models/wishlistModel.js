var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var model = new Schema({
  idUser: String,
  wishlists: [{
    gambar: String,
    namaBarang: String,
    harga: Number,
    diskon: Number
  }]
})

module.exports.main = mongoose.model('wishlist', model, 'wishlist')