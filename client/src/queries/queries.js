import { gql } from 'apollo-boost';

const getWodsQuery = gql`
  {
    wods {
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

export { getWodsQuery, getGroupsQuery };
