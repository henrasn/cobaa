var graphql = require('graphql');

module.exports = {
  idUser: {
    type: graphql.GraphQLString,
    name: 'idUser'
  },
  idProduk: {
    type: graphql.GraphQLString,
    name: 'idProduk'
  },
  jumlah: {
    type: graphql.GraphQLInt,
    name: 'jumlah'
  },
  tanggal: {
    type: graphql.GraphQLString,
    name: 'tanggal'
  }
}