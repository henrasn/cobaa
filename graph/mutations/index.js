var ratingAdd = require('./ratingMutation');
var keranjangAdd = require('./keranjangMutation').add;
var keranjangDel = require('./keranjangMutation').delete;
var wishlistAdd = require('./wishlistMutation').add;
var wishlistDel = require('./wishlistMutation').delete;
var saveRating = require('./saveRatingMutation');
var saveKeranjang = require('./saveKeranjangMutation');

module.exports = {
  ratingAdd,
  keranjangAdd,
  keranjangDel,
  wishlistAdd,
  wishlistDel,
  saveRating,
  saveKeranjang
}