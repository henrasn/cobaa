var graphql = require('graphql');
var ratingType = require('../type/ratingType');
var ratingInput = require('../type/ratingTypeInput');
var Model = require('../../models/ratingModel');
var dataQuery = require('../../dataQuery/ratingDataQuery');
var faker = require('faker');

module.exports = {
  type: ratingType,
  args: ratingInput,
  resolve(_, args) {
    return new Promise((resolve, rejected) => {
      newModel = new Model.main({
        idProduk: faker.random.number(999999),
        ratings: [{
          comment: args.comment,
          rate: args.rate,
          user: args.user
        }]
      })

      newModel.save((err, body) => {
        if (err)
          rejected(err)
        else
          resolve(body)
      })
    })
  }
}