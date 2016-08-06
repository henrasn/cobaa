var graphql = require('graphql');
var wishlistModel = require('../../models/wishlistModel');
var wishlistType = require('../type/wishlistType');

module.exports = {
  type: new graphql.GraphQLList(wishlistType),
  args: {
    idUser: {
      type: graphql.GraphQLString,
      name: 'idUser'
    }
  },
  resolve(_, args) {
    return new Promise((resolve, rejected) => {
      wishlistModel.find({
        'idUser': args.idUser
      }, (err, data) => {
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
}