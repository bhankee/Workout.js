const graphql = require('graphql');
const _ = require('lodash');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLList
} = graphql;
var groups = [{ name: 'Array', id: '1' }, { name: 'String', id: '2' }];
var wods = [
  { name: 'foreach', difficulty: 'medium', id: '1', groupId: '1' },
  { name: 'pop', difficulty: 'easy', id: '2', groupId: '1' },
  { name: '.random', difficulty: 'hard', id: '3', groupId: '2' }
];

const WodType = new GraphQLObjectType({
  name: 'Wod',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    difficulty: { type: GraphQLString },
    group: {
      type: GroupType,
      resolve(parent, args) {
        console.log('PARENT: ', parent);
        return _.find(groups, { id: parent.groupId });
      }
    }
  })
});

const GroupType = new GraphQLObjectType({
  name: 'Group',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    wods: {
      type: new GraphQLList(WodType),
      resolve(parent, args) {
        return _.filter(wods, { groupId: parent.id });
      }
    }
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    wod: {
      type: WodType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // code to get data from DB
        return _.find(wods, { id: args.id });
      }
    },
    group: {
      type: GroupType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return _.find(groups, { id: args.id });
      }
    },
    wods: {
      type: new GraphQLList(WodType),
      resolve(parent, args) {
        return wods;
      }
    },
    groups: {
      type: new GraphQLList(GroupType),
      resolve(parent, args) {
        return groups;
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
