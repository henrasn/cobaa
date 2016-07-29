var graphql = require('graphql');
var Model = require('../../models/produkModel');

var nestedProduk = new graphql.GraphQLObjectType({
  name: 'nestedProduk',
  fields: () => {
    return {
      weight: {
        type: graphql.GraphQLInt
      },
      color: {
        type: graphql.GraphQLString
      },
      size: {
        type: graphql.GraphQLString
      },
      qty: {
        type: graphql.GraphQLInt
      }
    }
  }
})

var index = 0;
module.exports = new graphql.GraphQLObjectType({
  name: 'produkType',
  fields: () => {
    return {
      sku: {
        type: graphql.GraphQLString
      },
      type: {
        type: graphql.GraphQLString
      },
      configurable_attributes: {
        type: graphql.GraphQLString
      },
      name: {
        type: graphql.GraphQLString
      },
      description: {
        type: graphql.GraphQLString
      },
      short_description: {
        type: graphql.GraphQLString
      },
      price: {
        type: graphql.GraphQLInt
      },
      thumbnail: {
        type: graphql.GraphQLString
      },
      small_image: {
        type: graphql.GraphQLString
      },
      image: {
        type: graphql.GraphQLString
      },
      media_gallery: {
        type: graphql.GraphQLString
      },
      gender: {
        type: graphql.GraphQLString
      },
      brand: {
        type: graphql.GraphQLString
      },
      material_baju: {
        type: graphql.GraphQLString
      },
      momen_penggunaan: {
        type: graphql.GraphQLString
      },
      neck_type: {
        type: graphql.GraphQLString
      },
      childs: {
        type: new graphql.GraphQLList(nestedProduk),
        resolve() {
          return new Promise((resolve, rejected) => {
            Model.find({}, {
              '_id': 0,
              '__v': 0
            }, (err, data) => {
              // console.log(data);
              var newData = JSON.parse(JSON.stringify(data));
              resolve(newData[index].childs)
              index + 1
            })
          })
        }
      }
    }
  }
})