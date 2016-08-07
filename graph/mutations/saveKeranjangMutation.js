var graphql = require('graphql');
var keranjangType = require('../type/keranjangType');
var keranjangInput = require('../type/keranjangTypeInput');
var Model = require('../../models/keranjangModel');
var keranjangDataQuery = require('../../dataQuery/keranjangDataQuery');
var faker = require('faker');

module.exports = {
  type: keranjangType,
  args: keranjangInput,
  resolve(_, args) {
    return new Promise((resolve, rejected) => {
      const date = new Date()
      var newModel = new Model.main({
        idUser: faker.random.number(999999),
        produks: {
          idProduk: args.idProduk,
          jumlah: args.jumlah,
          tanggal: date.toLocaleString()
        }
      })

      newModel.save((err, body) => {
        if (err)
          rejected(err)
        else
          resolve(body)
      })
    })
  }
}