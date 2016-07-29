var graphql = require('graphql');
var Model = require('../../models/keranjangModel').main;

var objectKeranjang = new graphql.GraphQLObjectType({
  name: 'keranjangObject',
  fields: () => {
    return {
      idProduk: {
        type: graphql.GraphQLString
      },
      jumlah: {
        type: graphql.GraphQLInt
      },
      tanggal: {
        type: graphql.GraphQLString
      }
    }
  }
})

module.exports = new graphql.GraphQLObjectType({
  name: 'keranjangType',
  fields: () => {
    return {
      idUser: {
        type: graphql.GraphQLString,
      },
      produks: {
        type: new graphql.GraphQLList(objectKeranjang),
        resolve(root) {
          return new Promise((resolve, rejected) => {
            Model.find({
              'idUser': root.idUser
            }, {
              '_id': 0,
              '__v': 0
            }, (err, data) => {
              var newData = JSON.parse(JSON.stringify(data));
              resolve(newData[0].produks)
            })
          })
        }
      }
    }
  }
})