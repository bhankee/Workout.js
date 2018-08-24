import { gql } from 'apollo-boost';

const getWodsQuery = gql`
  {
    wods {
      id
      name
      difficulty
    }
  }
`;

const getGroupsQuery = gql`
  {
    groups {
      name
      id
    }
  }
`;

const addWodMutation = gql`
  mutation($name: String!, $difficulty: String!, $groupId: ID!) {
    addWod(name: $name, difficulty: $difficulty, groupId: $groupId) {
      name
      id
    }
  }
`;

const getWodQuery = gql`
  query($id: ID) {
    wod(id: $id) {
      id
      name
      difficulty
      group {
        name
      }
    }
  }
`;

export { getWodsQuery, getGroupsQuery, addWodMutation, getWodQuery };
