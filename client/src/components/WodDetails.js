import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getWodQuery } from '../queries/queries';

class WodDetails extends Component {
  render() {
    return (
      <div>
        <p> Output Wod details here</p>
      </div>
    );
  }
}

export default graphql(getWodQuery)(WodDetails);
