var Model = require('../models/wishlistModel');
var faker = require('faker');

module.exports.addDoesntExist = (obj, callback) => {
  var newModel = new Model({
    idUser: obj.idUser,
    produks: [obj.idProduk]
  })

  newModel.save((err, body) => {
    callback(err, body)
  })
}

module.exports.addExist = (obj, callback) => {
  console.log(obj.idProduk);
  console.log(obj.idUser);
  Model.update({
    'idUser': obj.idUser
  }, {
    $addToSet: {
      produks: faker.random.number(999999)
    }
  }, (err, body) => {
    callback(err, body)
  })
}

module.exports.delWishlist = (obj, callback) => {
  Model.update({
    'idUser': obj.idUser
  }, {
    $pull: {
      produks: obj.idProduk
    }
  }, (err, body) => {
    callback(err, body)
  })
}