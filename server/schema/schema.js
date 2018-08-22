const graphql = require('graphql');
const _ = require('lodash');
const Wod = require('../models/wod');
const Group = require('../models/group');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLList
} = graphql;

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
        //return _.find(groups, { id: parent.groupId });
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
        //return _.filter(wods, { groupId: parent.id });
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
        //return _.find(wods, { id: args.id });
      }
    },
    group: {
      type: GroupType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        //return _.find(groups, { id: args.id });
      }
    },
    wods: {
      type: new GraphQLList(WodType),
      resolve(parent, args) {
        //return wods;
      }
    },
    groups: {
      type: new GraphQLList(GroupType),
      resolve(parent, args) {
        //return groups;
      }
    }
  }
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addWod: {
      type: WodType,
      args: {
        name: { type: GraphQLString },
        difficulty: { type: GraphQLString }
      },
      resolve(parent, args) {
        // Use model to create new Wod
        let wod = new Wod({
          name: args.name,
          difficulty: args.difficulty
        });
        // Save to database
        return wod.save();
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});
