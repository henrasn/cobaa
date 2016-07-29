var graphql = require('graphql');
var keranjangType = require('../type/keranjangType');
var Model = require('../../models/keranjangModel');
var keranjangInput = require('../type/keranjangTypeInput');
var keranjangDataQuery = require('../../dataQuery/keranjangDataQuery');

//old query
/*var keranjangQuery = new graphql.GraphQLObjectType({
  name: 'keranjangQueryQuery',
  fields: () => {
    return {
      keranjang: {
        type: new graphql.GraphQLList(keranjangType),
        args: {
          idUser: {
            type: graphql.GraphQLString
          }
        },
        resolve(_, args) {
          return Model.main.find({
            'idUser': args.idUser
          })
        }
      }
    }
  }
})*/

//old mutation
/*var keranjangMutaion = new graphql.GraphQLObjectType({
  name: 'mutationKeranjang',
  fields: () => {
    return {
      add: {
        type: keranjangType,
        args: keranjangInput,
        resolve(_, args) {
          return new Promise((resolve, rejected) => {
            Model.main.find({
              'idUser': args.idUser
            }, {
              '_id': 0,
              '__v': 0,
              'produks': 0
            }, (err, data) => {
              console.log(data);
              if (data[0] == null) {
                keranjangDataQuery.addDoesntExist(args, (err) => {
                  if (err)
                    rejected(err)
                  else
                    resolve(args)
                })
              } else {
                keranjangDataQuery.addExist(args, (err) => {
                  if (err)
                    rejected(err)
                  else
                    resolve(args)
                })
              }
            })
          })
        }
      },
      delete: {
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
            keranjangDataQuery.delKeranjang(args, (err) => {
              if (err)
                rejected(err)
              else
                resolve("success")
            })
          })
        }
      }
    }
  }
})*/


module.exports.keranjangQuery = {
  type: new graphql.GraphQLList(keranjangType),
  args: {
    idUser: {
      type: graphql.GraphQLString
    }
  },
  resolve(_, args) {
    return Model.main.find({
      'idUser': args.idUser
    })
  }
};

// module.exports = new graphql.GraphQLSchema({
//   query: keranjangQuery,
//   mutation: keranjangMutaion
// })