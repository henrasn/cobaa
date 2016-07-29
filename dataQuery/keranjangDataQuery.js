var keranjangModel = require('../models/keranjangModel');

module.exports.addDoesntExist = (obj, callback) => {
  var newModel = new keranjangModel.main({
    idUser: obj.idUser,
    produks: {
      idProduk: obj.idProduk,
      jumlah: obj.jumlah,
      tanggal: new Date()
    }
  })

  newModel.save((err) => {
    callback(err)
  })
}

module.exports.addExist = (obj, callback) => {
  var newModel = new keranjangModel.prod({
    idProduk: obj.idProduk,
    jumlah: obj.jumlah,
    tanggal: new Date()
  })

  keranjangModel.main.update({
    'idUser': obj.idUser
  }, {
    $addToSet: {
      produks: newModel
    }
  }, (err) => {
    callback(err)
  })
}

module.exports.delKeranjang = (obj, callback) => {
  keranjangModel.main.update({
    'idUser': obj.idUser
  }, {
    $pull: {
      produks: {
        idProduk: obj.idProduk
      }
    }
  }, (err) => {
    callback(err)
  })
}