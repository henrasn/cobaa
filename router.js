var express = require('express');
var router = express.Router();
var query = require('./query');

router.route('/produk/all')
  .get(query.allProduk)
router.route('/produk/detail')
  .get(query.detailProduk)
router.route('/produk/rating')
  .get(query.rating)
  .post(query.addRating)
router.route('/produk/wishlist')
  .get(query.wishlist)
  .post(query.addWishlist)
router.route('/keranjang')
  .get(query.keranjang)
  .post(query.addKeranjang)
router.route('/keranjang/new')
  .post(query.addKeranjangDE)
router.route('/produk/rating/new')
  .post(query.addRatingDE)

module.exports = router;