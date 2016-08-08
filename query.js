var graphql = require('graphql');
var Schema = require('./graph');

var allProdukQuery = "{allProduk{id,sku,type,configurable_attributes,name,description,short_description,price,thumbnail,small_image,image,media_gallery,gender,brand,material_baju,momen_penggunaan,neck_type,childs{weight,color,size,qty}}}";
var detailProdukQuery = '{detailProduk(idProduk:"950"){id,sku,type,configurable_attributes,name,description,short_description,price,thumbnail,small_image,image,media_gallery,gender,brand,material_baju,momen_penggunaan,neck_type,childs{weight,color,size,qty}}}';
var keranjangQuery = '{keranjang(idUser:"72415"){idUser,produks{idProduk,jumlah,tanggal}}}';
var ratingQuery = '{rating(idProduk:"45317"){idProduk,ratings{comment,rate,user}}}';
var wishlistQuery = '{wishlist(idUser:"27142"){idUser,produks}}';
var addKeranjangQuery = 'mutation{keranjangAdd(idUser:"72415",idProduk:"345435",jumlah:99){...on keranjangUpdated{ok,n,nModified}...on keranjangType{idUser,produks{idProduk,jumlah,tanggal}}}}';
var addRatingQuery = 'mutation{ratingAdd(idProduk:"45317",comment:"graph comment",user:"graphql",rate:10){...on ratingUpdate{ok,n,nModified}...on ratingType{idProduk,ratings{comment,rate,user}}}}';
var addWishlistQuery = 'mutation{wishlistAdd(idUser:"27142",idProduk:"34243"){...on wishlistUpdate{ok,n,nModified}...on wishlistType{idUser,produks}}}';
var addKeranjangDEQuery = 'mutation{saveKeranjang(idUser:"34234",idProduk:"324234",jumlah:99){idUser,produks{idProduk,jumlah,tanggal}}}';
var addRatingDEQuery = 'mutation{saveRating(idProduk:"23432",comment:"graph comment",user:"graphql",rate:10){idProduk,ratings{comment,rate,user}}}';

module.exports.allProduk = (req, res) => {
  graphql.graphql(Schema, allProdukQuery).then((result) => {
    console.log(result);
    res.json(result)
  })
}

module.exports.detailProduk = (req, res) => {
  graphql.graphql(Schema, detailProdukQuery).then((result) => {
    console.log(result);
    res.json(result)
  })
}

module.exports.keranjang = (req, res) => {
  graphql.graphql(Schema, keranjangQuery).then((result) => {
    console.log(result);
    res.json(JSON.stringify(result))
  })
}

module.exports.rating = (req, res) => {
  graphql.graphql(Schema, ratingQuery).then((result) => {
    console.log(result);
    res.json(result)
  })
}

module.exports.wishlist = (req, res) => {
  graphql.graphql(Schema, wishlistQuery).then((result) => {
    console.log(result);
    res.json(result)
  })
}
module.exports.addKeranjang = (req, res) => {
  graphql.graphql(Schema, addKeranjangQuery).then((result) => {
    console.log(result);
    res.json(result)
  })
}
module.exports.addRating = (req, res) => {
  graphql.graphql(Schema, addRatingQuery).then((result) => {
    console.log(result);
    res.json(result)
  })
}
module.exports.addWishlist = (req, res) => {
  graphql.graphql(Schema, addWishlistQuery).then((result) => {
    console.log(result);
    res.json(result)
  })
}
module.exports.addRatingDE = (req, res) => {
  graphql.graphql(Schema, addRatingDEQuery).then((result) => {
    console.log(result);
    res.json(result)
  })
}
module.exports.addKeranjangDE = (req, res) => {
  graphql.graphql(Schema, addKeranjangDEQuery).then((result) => {
    console.log(result);
    res.json(result)
  })
}
