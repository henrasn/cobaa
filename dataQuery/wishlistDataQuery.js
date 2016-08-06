var Model = require('../models/wishlistModel');

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
  console.log(obj.idProduk[0]);
  Model.update({
    'idUser': obj.idUser
  }, {
    $addToSet: {
      produks: obj.idProduk[0]
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