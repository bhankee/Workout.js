import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getWodQuery } from '../queries/queries';
import Timer from './Timer';

class WodDetails extends Component {
  displayWodDetails = () => {
    console.log('HERREEE: ', this.props.data);
    const { wod } = this.props.data;
    // switch statement for wod component
    if (wod) {
      return (
        <div>
          <h2>{wod.name}</h2>
          <p>{wod.difficulty}</p>
          <p>{wod.movements}</p>
          <p>{wod.group.name}</p>
          <Timer />
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

export default graphql(getWodQuery)(WodDetails);
