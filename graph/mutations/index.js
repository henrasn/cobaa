var ratingAdd = require('./ratingMutation');
var keranjangAdd = require('./keranjangMutation').add;
var keranjangDel = require('./keranjangMutation').delete;
var wishlistAdd = require('./wishlistMutation').add;
var wishlistDel = require('./wishlistMutation').delete;

module.exports = {
  ratingAdd,
  keranjangAdd,
  keranjangDel,
  wishlistAdd,
  wishlistDel
}