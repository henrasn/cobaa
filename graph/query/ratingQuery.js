var graphql = require('graphql');
var ratingType = require('../type/ratingType');
var ratingInput = require('../type/ratingTypeInput');
var Model = require('../../models/ratingModel');
var dataQuery = require('../../dataQuery/ratingDataQuery');

//old Query
/*var ratingQuery = new graphql.GraphQLObjectType({
  name: 'queryRating',
  fields: () => {
    return {
      rating: {
        type: new graphql.GraphQLList(ratingType),
        args: {
          idProduk: {
            type: graphql.GraphQLString,
            name: 'idProduk'
          }
        },
        resolve: (_, args) => {
          return Model.main.find({
            'idProduk': args.idProduk
          });
        }
      }
    }
  }
})*/

//old mutation
/*var mutations = new graphql.GraphQLObjectType({
  name: 'mutationRate',
  fields: () => {
    return {
      add: {
        type: ratingType,
        args: ratingInput,
        resolve: (_, args) => {
          // console.log(args);
          return new Promise((resolve, rejected) => {
            Model.main.find({
              idProduk: args.idProduk
            }, {
              'ratings': 0,
              '_id': 0,
              '__v': 0
            }, (err, data) => {
              // console.log(data);
              if (data[0] == null) {
                console.log("data doesn't exist");
                dataQuery.addDoesntExist(args, (err) => {
                  if (err)
                    rejected(err)
                  else
                    resolve(args)
                })
              } else {
                console.log("data exist");
                dataQuery.addExist(args, (err) => {
                  if (err)
                    rejected(err)
                  else
                    resolve(args)
                })
              }
            })
          })
        }
      }
    }
  }
})*/


module.exports.ratingQuery = {
  type: new graphql.GraphQLList(ratingType),
  args: {
    idProduk: {
      type: graphql.GraphQLString,
      name: 'idProduk'
    }
  },
  resolve: (_, args) => {
    return new Promise((resolve, rejected) => {
      Model.main.find({
        'idProduk': args.idProduk
      }, {}, (err, data) => {
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
};

// module.exports = new graphql.GraphQLSchema({
//   query: ratingQuery,
//   mutation: mutations
// })