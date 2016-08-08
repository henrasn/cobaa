var express = require('express');
var graphHTTP = require('express-graphql');
var graphql = require('graphql');
var mongoose = require('mongoose');
var Schema = require('./graph');
var test = require('./test');
// var Model = require('./models/ratingModel').main;

// var query = 'query{showSingleData(id:1234){completed,title}}';
// var query = 'mutation mutationRate{add(idProduk:"32423"){}}';
var querys = '{rating(idProduk:"2"){idProduk,ratings{comment,rate,user}}}';

var port = process.env.PORT || 3001;
// mongoose.connect('mongodb://dbrest:restdatabase@ds031965.mlab.com:31965/dbscript');
mongoose.connect('mongodb://127.0.0.1:27017/produk');
// mongoose.connect('mongodb://127.0.0.1:27017/datagraph');

// graphql.graphql(Schema, querys).then((result) => {
//   console.log(JSON.stringify(result));
// });
var routers = express.Router();
routers.route('/wishlist')
  .get(test)

var app = express()
  // .use('/', graphHTTP({
  //   schema: Schema,
  //   pretty: true,
  //   // graphiql: true
  // }))
  .use('/api', routers)
  .listen(port, (err) => {
    if (err) {
      console.log(err)
    } else {
      console.log('running');
    }
  })