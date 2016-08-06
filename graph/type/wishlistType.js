var graphql = require('graphql');

module.exports = new graphql.GraphQLObjectType({
  name: 'wishlistType',
  fields: () => {
    return {
      idUser: {
        type: graphql.GraphQLString
      },
      produks: {
        type: new graphql.GraphQLList(graphql.GraphQLString)
      }
    }
  }
})