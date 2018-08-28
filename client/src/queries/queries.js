import { gql } from 'apollo-boost';

const getWodsQuery = gql`
  {
    wods {
      id
      name
      movements
      difficulty
    }
  }
`;

const getGroupsQuery = gql`
  {
    groups {
      name
      id
      wods {
        id
        name
        difficulty
        movements
      }
    }
  }
`;

/*const addWodMutation = gql`
  mutation($name: String!, $difficulty: String!, $groupId: ID!) {
    addWod(name: $name, difficulty: $difficulty, groupId: $groupId) {
      name
      id
    }
  }
`;
*/

const getWodQuery = gql`
  query($id: ID) {
    wod(id: $id) {
      id
      name
      movements
      difficulty
      group {
        id
        name
        wods {
          name
          difficulty
        }
      }
    }
  }
`;

export { getWodsQuery, getGroupsQuery, getWodQuery };
