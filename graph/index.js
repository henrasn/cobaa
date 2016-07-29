var graphql = require('graphql');

var keranjangType = require('./type/keranjangType');
var query = require('./query');
var mutation = require('./mutations');

/*var test = {
  keranjang: {
    type: new graphql.GraphQLList(keranjangType),
    args: {
      idUser: {
        type: graphql.GraphQLString
      }
    },
    resolve(_, args) {
      return Model.main.find({
        'idUser': args.idUser
      })
    }
  }
}*/

module.exports = new graphql.GraphQLSchema({
  query: new graphql.GraphQLObjectType({
    name: 'query',
    fields: query
  }),
  mutation: new graphql.GraphQLObjectType({
    name: 'mutation',
    fields: mutation
  })
})