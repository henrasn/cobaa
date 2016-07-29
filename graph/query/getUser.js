var graphql = require('graphql');
var mongoose = require('mongoose');
var userModel = require('../models/userModel');

var userQuery = new graphql.GraphQLSchema({
  query: new graphql.GraphQLObjectType({
    name
  })
})