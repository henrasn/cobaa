var graphql = require('graphql');
var produkType = require('../type/produkType');
var Model = require('../../models/produkmodel');

var produkQuery = new graphql.GraphQLObjectType({
  name: 'queryProduk',
  fields: () => {
    return {
      produk: {
        type: new graphql.GraphQLList(produkType),
        resolve: () => {
          return new Promise((resolve, rejected) => {
            Model.find((err, data) => {
              if (err)
                rejected({
                  "error": true,
                  "message": err
                })
              else
                resolve(data)
            });
          })
        }
      }
    }
  }
})

module.exports.all = {
  type: new graphql.GraphQLList(produkType),
  resolve: () => {
    return new Promise((resolve, rejected) => {
      Model.find((err, data) => {
        if (err)
          rejected({
            "error": true,
            "message": err
          })
        else
          resolve(data)
      });
    })
  }
}

module.exports.detail = {
  type: new graphql.GraphQLList(produkType),
  args: {
    idProduk: {
      type: graphql.GraphQLString,
      name: 'idProduk'
    }
  },
  resolve(_, args) {
    return new Promise((resolve, rejected) => {
      Model.find({
        'id': args.idProduk
      }, (err, data) => {
        if (err)
        rejected({
          "error": true,
          "message": err
        })
        else
          resolve(data)
      })
    })
  }
}