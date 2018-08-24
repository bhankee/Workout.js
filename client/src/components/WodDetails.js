import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getWodQuery } from '../queries/queries';

class WodDetails extends Component {
  displayWodDetails = () => {
    const { wod } = this.props.data;
    if (wod) {
      return (
        <div>
          <h2>{wod.name}</h2>
          <p>{wod.difficulty}</p>
          <p>{wod.group.name}</p>
        </div>
      );
    } else {
      return <div>No Wod selected</div>;
    }
  };
  render() {
    return <div>{this.displayWodDetails()}</div>;
  }
}

export default graphql(getWodQuery, {
  options: props => {
    return {
      variables: {
        id: props.wodId
      }
    };
  }
})(WodDetails);
