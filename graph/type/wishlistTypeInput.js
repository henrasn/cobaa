var graphql = require('graphql');

module.exports = {
  idUser: {
    type: graphql.GraphQLString,
    name: 'idUser'
  },
  idProduk: {
    type: new graphql.GraphQLList(graphql.GraphQLString),
    name: 'idProduk'
  }
}