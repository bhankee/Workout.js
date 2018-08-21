const graphql = require('graphql');
const _ = require('lodash');

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

var wods = [
  { name: 'foreach', difficulty: 'medium', id: '1' },
  { name: 'pop', difficulty: 'easy', id: '2' },
  { name: '.random', difficulty: 'hard', id: '3' }
];

const WodType = new GraphQLObjectType({
  name: 'Wod',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    difficulty: { type: GraphQLString }
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    wod: {
      type: WodType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        // code to get data from DB
        return _find(wods, { id: args.id });
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
