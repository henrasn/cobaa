var graphql = require('graphql');
var produkType = require('../type/produkType');
var Model = require('../../models/produkModel');

var dummy = [{
  'sku': '434j432',
  'name': 'name deui',
  'des': 'desssss',
  'price': 231412,
  'image': 'dasdas'
}]

var produkQuery = new graphql.GraphQLObjectType({
  name: 'queryProduk',
  fields: () => {
    return {
      produk: {
        type: new graphql.GraphQLList(produkType),
        resolve: () => {
          return Model.find();
        }
      }
    }
  }
})

module.exports = {
  type: new graphql.GraphQLList(produkType),
  resolve: () => {
    return Model.find();
  }
}