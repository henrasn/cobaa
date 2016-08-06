var graphql = require('graphql');

var obj1 = new graphql.GraphQLObjectType({
  name: 'obj1',
  fields: {
    modified: {
      type: graphql.GraphQLString
    }
  }
})

var obj2 = new graphql.GraphQLObjectType({
  name: 'obj2',
  fields: {
    ok: {
      type: graphql.GraphQLString
    }
  }
})

var resolveType = (data) => {
  if (data.modified)
    return obj1
  if (data.ok)
    return obj2
}

const searchableType = new graphql.GraphQLUnionType({
  name: 'type',
  types: [obj1, obj2],
  resolveType: resolveType
})

var schema = new graphql.GraphQLSchema({
  query: new graphql.GraphQLObjectType({
    name: 'root',
    fields: {
      search: {
        type: new graphql.GraphQLList(searchableType),
        args: {
          text: {
            type: graphql.GraphQLString,
            name: 'text'
          }
        },
        resolve(_, args) {
          var data = [{
            modified: 'waw'
          }, {
            ok: "hmmm"
          }]
          return data
        }
      }
    }
  })
})

const query = '{search(text:"waw"){... on obj1 {modified}... on obj2 {ok}}}';

graphql.graphql(schema, query).then(result => {
  console.log(JSON.stringify(result));
})