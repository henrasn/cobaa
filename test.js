var graphql = require('graphql');
var Schema = require('./graph');

var querys = '{rating(idProduk:"2"){idProduk,ratings{comment,rate,user}}}';

// graphql.graphql(Schema, query).then((result) => {}

module.exports = (req, res) => {
  console.log("obj");
  graphql.graphql(Schema, querys).then((result) => {
    console.log(result);
    res.json(result)
  })
}