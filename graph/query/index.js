var keranjang = require('./keranjangQuery').keranjangQuery;
var rating = require('./ratingQuery').ratingQuery;
var allProduk = require('./produkQuery').all;
var detailProduk = require('./produkQuery').detail;
var wishlist = require('./wishlistQuery');

module.exports = {
  keranjang,
  rating,
  allProduk,
  detailProduk,
  wishlist
}