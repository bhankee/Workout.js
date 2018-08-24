import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import {
  getGroupsQuery,
  addWodMutation,
  getWodsQuery
} from '../queries/queries';

class AddWod extends Component {
  state = {
    name: '',
    difficulty: '',
    groupId: ''
  };
  displayGroups() {
    let data = this.props.getGroupsQuery;

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

  handleName = e => {
    this.setState({ name: e.target.value });
  };
  handleDifficulty = e => {
    this.setState({ difficulty: e.target.value });
  };
  handleGroup = e => {
    this.setState({ groupId: e.target.value });
  };
  submitForm = e => {
    e.preventDefault();
    this.props.addWodMutation({
      variables: {
        name: this.state.name,
        difficulty: this.state.difficulty,
        groupId: this.state.groupId
      },
      refetchQueries: [{ query: getWodsQuery }]
    });
  };

  render() {
    return (
      <form onSubmit={this.submitForm}>
        <div className="field">
          <label>Workout Name:</label>
          <input
            value={this.state.name}
            type="text"
            onChange={this.handleName}
          />
        </div>
        <div className="field">
          <label>Difficulty:</label>
          <input
            value={this.state.difficulty}
            type="text"
            onChange={this.handleDifficulty}
          />
        </div>
        <div className="field">
          <label>API Group:</label>
          <select onChange={this.handleGroup}>
            <option>Select API</option>
            {this.displayGroups()}
          </select>
        </div>
        <button>+</button>
      </form>
    );
  }
}

export default compose(
  graphql(getGroupsQuery, { name: 'getGroupsQuery' })
  /* graphql(addWodMutation, { name: 'addWodMutation' })*/
)(AddWod);
