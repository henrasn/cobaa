var ModelRating = require('../models/ratingModel');

module.exports.addDoesntExist = (obj, callback) => {
  console.log(obj);
  newModel = new ModelRating.main({
    idProduk: obj.idProduk,
    ratings: [{
      comment: obj.comment,
      rate: obj.rate,
      user: obj.user
    }]
  })

  newModel.save((err) => {
    callback(err)
  })
}

module.exports.addExist = (obj, callback) => {
  newNested = new ModelRating.nestedRating({
    comment: obj.comment,
    rate: obj.rate,
    user: obj.user
  })

  ModelRating.main.update({
    'idProduk': obj.idProduk
  }, {
    $addToSet: {
      ratings: newNested
    }
  }, (err) => {
    callback(err)
  })
}