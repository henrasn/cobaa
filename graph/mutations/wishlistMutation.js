var graphql = require('graphql');
var wishlistType = require('../type/wishlistType');
var wishlistModel = require('../../models/wishlistModel');
var wishlistTypeInput = require('../type/wishlistTypeInput');
var wishlistDataQuery = require('../../dataQuery/wishlistDataQuery');

var wishlistUpdate = new graphql.GraphQLObjectType({
  name: 'wishlistUpdate',
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
  if (data.nModified)
    return wishlistUpdate;
  else
    return wishlistType;
}

var resultType = new graphql.GraphQLUnionType({
  name: 'wishlistResultType',
  types: [wishlistUpdate, wishlistType],
  resolveType: resolveType
})

module.exports.add = {
  type: resultType,
  args: wishlistTypeInput,
  resolve(_, args) {
    return new Promise((resolve, rejected) => {
      wishlistModel.find({
        'idUser': args.idUser
      }, {
        '_id': 0,
        '__v': 0,
      }, (err, data) => {
        console.log(data);
        if (data[0] == null) {
          wishlistDataQuery.addDoesntExist(args, (err, body) => {
            if (err)
              rejected(err)
            else
              resolve(body)
          })
        } else {
          wishlistDataQuery.addExist(args, (err, body) => {
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

module.exports.delete = {
  type: graphql.GraphQLString,
  args: {
    idUser: {
      type: graphql.GraphQLString,
      name: 'idUser'
    },
    idProduk: {
      type: graphql.GraphQLString,
      name: 'idProduk'
    }
  },
  resolve(_, args) {
    return new Promise((resolve, rejected) => {
      wishlistDataQuery.delWishlist(args, (err, body) => {
        if (err)
          rejected(err)
        else if (body.nModified == 0)
          rejected("failed")
        else
          resolve("success")
      })
    })
  }
}