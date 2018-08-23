import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';
import { getWodsQuery } from '../queries/queries';

class WodList extends Component {
  displayWods() {
    let data = this.props.data;
    if (data.loading) {
      return <div>warming up...</div>;
    } else {
      return data.wods.map(wod => {
        return <li key={wod.name}>{wod.name}</li>;
      });
    }
  }
  render() {
    console.log(this.props.data.wods);
    return (
      <div>
        <ul>{this.displayWods()}</ul>
      </div>
    );
  }
}

export default graphql(getWodsQuery)(WodList);
