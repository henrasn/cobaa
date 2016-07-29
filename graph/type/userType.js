var graphql = require('graphql');

var userType = new graphql.GraphQLObjectType({
  name: 'user',
  fields: {
    _id: {
      type: graphql.GraphQLString
    },
    name: {
      type: graphql.GraphQLString
    }
  }
});

module.exports = graphql.GraphQLObjectType(userType);