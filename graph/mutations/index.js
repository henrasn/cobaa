var ratingAdd = require('./ratingMutation');
var keranjangAdd = require('./keranjangMutation').add;
var keranjangDel = require('./keranjangMutation').delete;

module.exports = {
  ratingAdd,
  keranjangAdd,
  keranjangDel
}