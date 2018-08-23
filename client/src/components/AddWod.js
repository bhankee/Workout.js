import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const getGroupsQuery = gql`
  {
    groups {
      name
      id
    }
  }
`;

class AddWod extends Component {
  displayGroups() {
    let data = this.props.data;
    if (data.loading) {
      return <option>Loading Groups...</option>;
    } else {
      return data.groups.map(group => {
        return (
          <option key={group.id} value={group.id}>
            {group.name}
          </option>
        );
      });
    }
  }

  render() {
    console.log(this.props.data.wods);
    return (
      <form>
        <div className="field">
          <label>Workout Name:</label>
          <input type="text" />
        </div>
        <div className="field">
          <label>Difficulty:</label>
          <input type="text" />
        </div>
        <div className="field">
          <label>API Group:</label>
          <select>
            <option>Select API</option>
            {this.displayGroups()}
          </select>
        </div>
        <button>+</button>
      </form>
    );
  }
}

export default graphql(getGroupsQuery)(AddWod);
