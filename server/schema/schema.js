const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString } = graphql;

const WodType = new GraphQLObjectType({
  name: 'Wod',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    difficulty: { type: GraphQLString }
  })
});
