var graphql = require('graphql');
var keranjangType = require('../type/keranjangType');
var keranjangInput = require('../type/keranjangTypeInput');
var Model = require('../../models/keranjangModel');
var keranjangDataQuery = require('../../dataQuery/keranjangDataQuery');

module.exports.add = {
  type: keranjangType,
  args: keranjangInput,
  resolve(_, args) {
    return new Promise((resolve, rejected) => {
      Model.main.find({
        'idUser': args.idUser
      }, {
        '_id': 0,
        '__v': 0,
        'produks': 0
      }, (err, data) => {
        console.log(data);
        if (data[0] == null) {
          keranjangDataQuery.addDoesntExist(args, (err) => {
            if (err)
              rejected(err)
            else
              resolve(args)
          })
        } else {
          keranjangDataQuery.addExist(args, (err) => {
            if (err)
              rejected(err)
            else
              resolve(args)
          })
        }
      })
    })
  }
}

module.exports.delete = {
  type: graphql.GraphQLString,
  args: {
    idUser: {
      type: graphql.GraphQLString,
      name: 'idUser'
    },
    idProduk: {
      type: graphql.GraphQLString,
      name: 'idProduk'
    }
  },
  resolve(_, args) {
    return new Promise((resolve, rejected) => {
      keranjangDataQuery.delKeranjang(args, (err) => {
        if (err)
          rejected(err)
        else
          resolve("success")
      })
    })
  }
}