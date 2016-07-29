var graphql = require('graphql');
var Model = require('../../models/ratingModel').main;

var rateObject = new graphql.GraphQLObjectType({
  name: 'rateObject',
  fields: () => {
    return {
      comment: {
        type: graphql.GraphQLString
      },
      rate: {
        type: graphql.GraphQLInt
      },
      user: {
        type: graphql.GraphQLString
      }
    }
  }
})

var index = 0;
module.exports = new graphql.GraphQLObjectType({
  name: 'ratingType',
  fields: () => {
    return {
      idProduk: {
        type: graphql.GraphQLString
      },
      ratings: {
        type: new graphql.GraphQLList(rateObject),
        resolve(root) {
          return new Promise((resolve, rejected) => {
            Model.find({
              'idProduk': root.idProduk
            }, {
              '_id': 0,
              '__v': 0
            }, (err, data) => {
              var newData = JSON.parse(JSON.stringify(data));
              resolve(newData[0].ratings);
            })
          })
        }
      }
    }
  }
});