var graphql = require('graphql');
var ratingType = require('../type/ratingType');
var ratingInput = require('../type/ratingTypeInput');
var Model = require('../../models/ratingModel');
var dataQuery = require('../../dataQuery/ratingDataQuery');

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

var updateType = new graphql.GraphQLObjectType({
  name: 'ratingUpdate',
  fields: {
    ok: {
      type: graphql.GraphQLInt
    },
    n: {
      type: graphql.GraphQLInt
    },
    nModified: {
      type: graphql.GraphQLInt
    }
  }
})

var resolveType = (data) => {
  console.log({
    "data": data
  });
  if (data.nModified)
    return updateType
  else
    return ratingType
}

var resultType = new graphql.GraphQLUnionType({
  name: 'resultRatingType',
  types: [updateType, ratingType],
  resolveType: resolveType
})

module.exports = {
  type: resultType,
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
          dataQuery.addDoesntExist(args, (err, body) => {
            console.log({
              "br": body
            });
            if (err)
              rejected(err)
            else
              resolve(body)
          })
        } else {
          console.log("data exist");
          dataQuery.addExist(args, (err, body) => {
            console.log(err);
            console.log(body);
            if (err)
              rejected(err)
            else
              resolve(body)
          })
        }
      })
    })
  }
}