var graphql = require('graphql');

module.exports = {
  idProduk: {
    name: 'idProduk',
    type: graphql.GraphQLString
  },
  comment: {
    name: 'comment',
    type: graphql.GraphQLString
  },
  user: {
    name: 'user',
    type: graphql.GraphQLString
  },
  rate: {
    name: 'rate',
    type: graphql.GraphQLInt
  }
}