var graphql = require('graphql');
var keranjangType = require('../type/keranjangType');
var keranjangInput = require('../type/keranjangTypeInput');
var Model = require('../../models/keranjangModel');
var keranjangDataQuery = require('../../dataQuery/keranjangDataQuery');

var keranjangUpdated = new graphql.GraphQLObjectType({
  name: 'keranjangUpdated',
  fields: {
    ok: {
      type: graphql.GraphQLInt
    },
    n: {
      type: graphql.GraphQLInt
    },
    nModified: {
      type: graphql.GraphQLInt
    }
  }
})

var resolveType = (data) => {
  if (data.nModified)
    return keranjangUpdated;
  else
    return keranjangType;
}

var resultType = new graphql.GraphQLUnionType({
  name: 'resultType',
  types: [keranjangUpdated, keranjangType],
  resolveType: resolveType
})

module.exports.add = {
  type: resultType,
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
          keranjangDataQuery.addDoesntExist(args, (err, body) => {
            if (err)
              rejected(err)
            else
              resolve(body)
          })
        } else {
          keranjangDataQuery.addExist(args, (err, body) => {
            console.log(body);
            if (err)
              rejected(err)
            else
              resolve(body)
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
      keranjangDataQuery.delKeranjang(args, (err, body) => {
        if (err)
          rejected(err)
        else if (body.nModified == 0)
          rejected("failed")
        else
          resolve("success")
      })
    })
  }
}