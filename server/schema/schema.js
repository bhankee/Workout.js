const graphql = require('graphql');
const _ = require('lodash');
const Wod = require('../models/wod');
const Group = require('../models/group');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull
} = graphql;

const WodType = new GraphQLObjectType({
  name: 'Wod',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    movements: { type: GraphQLString },
    difficulty: { type: GraphQLString },
    group: {
      type: GroupType,
      resolve(parent, args) {
        return Group.findById(parent.groupId);
      }
    }
  })
});

const GroupType = new GraphQLObjectType({
  name: 'Group',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    wods: {
      type: new GraphQLList(WodType),
      resolve(parent, args) {
        return Wod.find({ groupId: parent.id });
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
        return Wod.findById(args.id);
      }
    },
    group: {
      type: GroupType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Group.findById(args.id);
      }
    },
    wods: {
      type: new GraphQLList(WodType),
      resolve(parent, args) {
        return Wod.find({});
      }
    },
    groups: {
      type: new GraphQLList(GroupType),
      resolve(parent, args) {
        return Group.find({});
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
        name: { type: new GraphQLNonNull(GraphQLString) },
        movements: { type: new GraphQLNonNull(GraphQLList(GraphQLString)) },
        difficulty: { type: new GraphQLNonNull(GraphQLString) },
        groupId: { type: new GraphQLNonNull(GraphQLID) }
      },
      resolve(parent, args) {
        let wod = new Wod({
          // Use model to create new Wod
          name: args.name,
          movements: args.movements,
          difficulty: args.difficulty,
          groupId: args.groupId
        });
        // Save to database
        return wod.save();
      }
    },
    addGroup: {
      type: GroupType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(parent, args) {
        // Use model to create new Wod
        let group = new Group({
          name: args.name
        });
        // Save to database
        return group.save();
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});
